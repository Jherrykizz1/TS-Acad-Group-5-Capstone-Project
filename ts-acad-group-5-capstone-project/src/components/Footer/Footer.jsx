import './footer.css'

const GROUP_REPO_URL = 'https://github.com'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerInner">
        <div className="footerAbout">
          <h3 className="footerTitle">About</h3>
          <p className="footerText">We are a passionate and driven team made up of Tolani, Ifeoluwa, Justice, Emmanuel, Jeremiah, Adegbenga, Serena, John, Jeremiah Halvin and Opeyemi. United by a shared vision, we bring together diverse strengths, ideas, and perspectives to achieve our goals and make meaningful impact.</p>
        </div>

        <div className="footerDivider" aria-hidden="true" />

        <div className="footerBottom">
          <div className="footerFinePrint">
            <div>©2026 Design by Serena and Tolani</div>
            <div>
              Built by{' '}
              <a className="footerFineLink" href="https://github.com/Jherrykizz1/TS-Acad-Group-5-Capstone-Project.git" target="_blank" rel="noreferrer">
                TS-Acad-Group-5
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