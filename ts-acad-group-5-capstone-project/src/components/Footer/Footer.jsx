import './footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerInner">
        <div className="footerAbout">
          <h3 className="footerTitle">About</h3>
          <p className="footerText">We are a passionate and driven team made up of Tolani, Ifeoluwa, Justice, Emmanuel, Jeremiah, Adegbenga, Serena, John, and Opeyemi. United by a shared vision, we bring together diverse strengths, ideas, and perspectives to achieve our goals and make meaningful impact.</p>
        </div>

        <div className="footerDivider" aria-hidden="true" />

        <div className="footerBottom">
          <div className="footerFinePrint">
            <div>©2026 Design by <a className="footerFineLink" href="https://github.com/Anurella" target="_blank" rel="noreferrer">Amaka</a> &amp; <a className="footerFineLink" href="https://www.linkedin.com/in/ifeomaokocha" target="_blank" rel="noreferrer">Ifeoma A.</a></div>
            <div>
              Built by{' '}
              <a className="footerFineLink" href={groupRepoUrl}>
                GroupName
              </a>
              . All rights reserved
            </div>
          </div>

          <a className="footerRightLink" href="https://tsacademyonline.com/" target="_blank" rel="noreferrer">
            TSAcademy
          </a>
        </div>
      </div>
    </footer>
  )
}