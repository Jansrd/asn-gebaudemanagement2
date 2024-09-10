import "../assets/styles/social-network.css";

function SocialNetwork({ icon, link, iconColor, iconSize }) {
  return (
    <div className="social-network">
      <a
        style={{ color: iconColor, fontSize: iconSize }}
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        {icon}
      </a>
    </div>
  );
}

export default SocialNetwork;
