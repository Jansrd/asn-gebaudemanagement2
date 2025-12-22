# ASN Gebäudemanagement Website

Company website for ASN Gebäudemanagement - a German building management and facility services company based in Ulm.

## Architecture

This project uses a modern, single-container deployment with automatic HTTPS:

```
┌──────────────────────────────────────┐
│             Caddy Server             │
│  ┌────────────────────────────────┐  │
│  │   Automatic HTTPS (Let's       │  │
│  │   Encrypt + Cloudflare DNS)    │  │
│  └────────────────────────────────┘  │
│  ┌────────────────────────────────┐  │
│  │   Static File Server           │  │
│  │   (React SPA build)            │  │
│  └────────────────────────────────┘  │
└──────────────────────────────────────┘
         ↓ Ports 80 (HTTP) & 443 (HTTPS)
    asn-ulm.de / www.asn-ulm.de
```

### Tech Stack

- **Frontend**: React 18 (Create React App)
- **Routing**: React Router v6 with German URL paths
- **Server**: Caddy with Cloudflare DNS plugin
- **SSL/TLS**: Automatic Let's Encrypt certificates via DNS-01 challenge
- **Deployment**: Docker + Docker Compose
- **Resource Footprint**: ~15-30MB RAM (optimized for low-resource servers)

## Prerequisites

1. **Docker** and **Docker Compose** installed
2. **Cloudflare account** with DNS for `asn-ulm.de`
3. **Cloudflare API token** with DNS edit permissions

## Quick Start

### 1. Setup Environment Variables

Create a `.env` file with your Cloudflare credentials:

```bash
cp .env.example .env
```

Edit `.env` and add your credentials:
```env
CLOUDFLARE_API_TOKEN=your-cloudflare-api-token-here
ACME_EMAIL=admin@asn-ulm.de
```

### 2. Build the Container

```bash
docker-compose -f docker-compose.caddy.yaml build
```

This will:
- Build the React application (production optimized)
- Build Caddy with Cloudflare DNS plugin
- Create a minimal Alpine-based container (~50MB)

### 3. Run the Container

```bash
docker-compose -f docker-compose.caddy.yaml up -d
```

The container will:
- Start Caddy server
- Automatically obtain SSL certificates from Let's Encrypt
- Serve the website on ports 80 (HTTP) and 443 (HTTPS)
- Auto-redirect HTTP → HTTPS

### 4. Verify Deployment

**Check container status:**
```bash
docker-compose -f docker-compose.caddy.yaml ps
```

Expected: Container shows "Up" and "healthy"

**Check logs:**
```bash
docker-compose -f docker-compose.caddy.yaml logs -f web
```

Look for: `"certificate obtained successfully"`

**Test the website:**
```bash
# Test HTTP redirect
curl -I http://asn-ulm.de

# Test HTTPS
curl -I https://asn-ulm.de

# Test www subdomain
curl -I https://www.asn-ulm.de
```

**Test in browser:**
- Navigate to https://asn-ulm.de
- Verify all routes work: `/`, `/über-uns`, `/dienstleistungen`, `/kontakt`
- Check that page refresh works on all routes (SPA routing)

### 5. Tear Down

**Stop the container:**
```bash
docker-compose -f docker-compose.caddy.yaml down
```

**Stop and remove volumes (certificates, etc.):**
```bash
docker-compose -f docker-compose.caddy.yaml down -v
```

**Remove everything including images:**
```bash
docker-compose -f docker-compose.caddy.yaml down -v --rmi all
```

## Development

### Local Development Server

For development with hot-reload:

```bash
npm install
npm start
```

This runs the React dev server on http://localhost:3000

### Building for Production

To build the React app locally (without Docker):

```bash
npm run build
```

Output will be in the `build/` directory.

### Running Tests

```bash
npm test
```

## Project Structure

```
/src
├── App.js                    # Main routing component
├── routes.js                 # Route definitions
├── components/               # Reusable components
├── layouts/                  # Header, Footer
└── pages/                    # Page components
    ├── Home.jsx
    ├── About.jsx
    ├── Services.jsx
    ├── Contact.jsx
    ├── Imprint.jsx
    └── Privacy.jsx

/public                       # Static assets
Dockerfile.caddy              # Multi-stage Caddy production build
Caddyfile                     # Caddy server configuration
docker-compose.caddy.yaml     # Caddy orchestration config
```

## Routes

The website supports German URL paths:

- `/` - Homepage (Startseite)
- `/über-uns` - About (Über uns)
- `/dienstleistungen` - Services (Dienstleistungen)
- `/kontakt` - Contact (Kontakt)
- `/impressum` - Imprint (legal requirement)
- `/datenschutzerklärung` - Privacy Policy

## Configuration

### Caddy Configuration

The `Caddyfile` handles:
- Automatic HTTPS via Let's Encrypt
- DNS-01 challenge using Cloudflare API
- Security headers (XSS, clickjacking protection, etc.)
- Gzip compression
- SPA routing (fallback to index.html)

### Docker Configuration

**Multi-stage build** for minimal image size:
1. **Stage 1**: Build React app with Node.js
2. **Stage 2**: Build Caddy with Cloudflare plugin
3. **Stage 3**: Combine into minimal Alpine image

**Environment variables:**
- `CLOUDFLARE_API_TOKEN` - Cloudflare API token for DNS-01 challenge
- `ACME_EMAIL` - Email for Let's Encrypt notifications

## SSL Certificates

- **Automatic issuance** on first run
- **Automatic renewal** 30 days before expiry
- **Stored in Docker volume** (`caddy_data`)
- **No manual intervention required**

## Monitoring

**View logs:**
```bash
docker-compose -f docker-compose.caddy.yaml logs -f web
```

**Check resource usage:**
```bash
docker stats asn-web --no-stream
```

**View certificate status:**
```bash
docker-compose -f docker-compose.caddy.yaml exec web caddy list-certificates
```

## Troubleshooting

### Container is unhealthy
Check logs for errors:
```bash
docker-compose -f docker-compose.caddy.yaml logs web
```

### Certificate not obtaining
Verify Cloudflare API token:
```bash
docker-compose -f docker-compose.caddy.yaml exec web env | grep CLOUDFLARE
```

### React Router 404 errors
Verify Caddyfile has `try_files {path} /index.html` directive.

### More Help

See [MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md) for detailed troubleshooting and migration information.

## Performance

- **Image size**: ~50MB (multi-stage build)
- **Memory usage**: ~15-30MB (Caddy only)
- **Build time**: ~5-10 minutes (first build with Caddy plugin compilation)
- **Optimizations**: Gzip, HTTP/2, automatic image optimization

## Security

- **HTTPS only** (automatic redirect from HTTP)
- **Security headers** enabled (XSS, MIME sniffing, clickjacking protection)
- **Non-root container** execution
- **Minimal attack surface** (Alpine base, no unnecessary packages)

## License

Proprietary - ASN Gebäudemanagement

## Support

For issues or questions, contact: info@asn-ulm.de
