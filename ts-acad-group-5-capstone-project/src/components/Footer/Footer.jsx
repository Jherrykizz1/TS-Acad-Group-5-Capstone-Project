import './footer.css'

const groupRepoUrl = import.meta.env.VITE_GROUP_REPO_URL || '#'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerGrid">
        <div className="footerCol">
          <h3 className="footerTitle">About</h3>
          <p className="footerText">
            Team overview for the capstone mockup. Replace this sentence with your team’s short
            description and your members’ first names.
          </p>
        </div>

        <div className="footerCol">
          <h3 className="footerTitle">Team</h3>
          <ul className="footerList">
            <li>
              <a className="footerLink" href="https://github.com/Anurella" target="_blank" rel="noreferrer">
                Amaka
              </a>
            </li>
            <li>
              <a
                className="footerLink"
                href="https://www.linkedin.com/in/ifeomaokocha"
                target="_blank"
                rel="noreferrer"
              >
                Ifeoma
              </a>
            </li>
          </ul>
          <p className="footerText">
            <a className="footerLink" href="https://tsacademyonline.com/" target="_blank" rel="noreferrer">
              TSacademy
            </a>
          </p>
        </div>

        <div className="footerCol">
          <h3 className="footerTitle">Group</h3>
          <p className="footerText">
            <a className="footerLink" href={groupRepoUrl}>
              TS-Acad-Group-5
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

