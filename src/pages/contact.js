import React from 'react'
import "../assets/fontawesome/css/all.css"

function Contact() {

  return (
    <div className="contact-page container">
      <h1>Get <span style={{color: 'orange'}}>In</span> Touch</h1>

      <p>I’m currently looking for any new opportunities, my inbox is always open. 
        Whether you have a question or just want to say hi!
      </p>

      <a href="mailto:akunneemeka125@gmail.com"><button>Say Hi</button></a>

      <div className="social-icons mt-4">
        <a href="https://github.com/kodecheff" target="_blank"><i class="fab fa-github-square"></i></a>
        <a href="https://twitter.com/kodecheff" target="_blank"><i class="fab fa-twitter"></i></a>
        <a href="https://linkedin.com/in/pascal-akunne-6915881a5/" target="_blank"><i class="fab fa-linkedin"></i></a>
      </div>


      {/* <form>
        <div class="mb-3">
          <input type="text" placeholder="Enter name" class="form-control" id="name" />
        </div>
        <div class="mb-3">
          <input type="email" placeholder="Enter email" class="form-control" id="email" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <textarea class="form-control" id="message" placeholder="Write message" rows="3"></textarea>
        </div>
        <button type="submit" class="btn">Send message</button>
      </form> */}
    </div>
  )
}

export default Contact
