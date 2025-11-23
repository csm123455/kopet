import './SocialLinks.css'

function SocialLinks() {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: '/ig.png',
      url: 'https://www.instagram.com/kopet_th/',
    },
    {
      name: 'Tiktok',
      icon: '/tiktok.png',
      url: 'https://www.tiktok.com/@kopet_th?is_from_webapp=1&sender_device=pc',
    },
    {
      name: 'Line',
      icon: '/line.png',
      url: 'https://line.me/R/ti/p/@472srhgn?ts=11232305&oat_content=url',
    },
  ]

  return (
    <section className="social-links">
      <div className="social-links-content">
        <h2 className="social-links-title">Follow Us</h2>
        <div className="social-links-grid">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-item"
            >
              <img
                src={link.icon}
                alt={link.name}
                className="social-link-icon"
              />
              <span className="social-link-text">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialLinks

