import './footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <h4>About</h4>
        <p>We are a passionate and driven team made up of Tolani, Ifeoluwa, Justice, Emmanuel, Jeremiah, Adegbenga, Serena, John, and Opeyemi. United by a shared vision, we bring together diverse strengths, ideas, and perspectives to achieve our goals and make meaningful impact.</p>
        <br />
        <hr />
        <div className="row">
          <div className="col-md-7">
            <p>&copy;2026 Design by <a href="https://github.com/Anurella" target="_blank">Amaka</a> & <a href="https://github.com/ifeaomaa" target="_blank">Ifeaoma A.</a></p>
            <p>Built by TSS Academy Group 5. All rights reserved.</p>
          </div>
          <div className="col-md-5 text-md-end">
            <p></p>
            <p><a href="https://tsacademyonline.com" target="_blank">TSAcademy</a></p>
          </div>
        </div>
      </div>
    </footer>
  )
}