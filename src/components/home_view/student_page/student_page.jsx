import React from 'react'

import './student_page.css'

import studentPageImg from '../../../assets/images/website_images/student.jpg'
import PageImg from '../../shared/page_img/page_img'

const StudentPage = () => {
  return (
    <>
      <PageImg img_url={studentPageImg} title="Student" />

      <section className="home-student container">
        <h5 className="staff-section__h5">• LET'S RECOGNISE THEM •</h5>
        <h2 className="staff-section__h2">students in the spotlight</h2>


        <h3 className="home-student-spotlight-section-h3">Class honors</h3>

        <div className="home-student-spotlights">

          {/* <div className="home-student-spotlight">
            <h3 className="home-student-spotlight-name">Best Student (Class 1)</h3>
            <div className="home-student-spotlight-img-box">
              <img src="https://pbs.twimg.com/media/D2qtOY8WkAEnGd1?format=jpg&name=4096x4096" alt="" className="home-student-spotlight-img" />
            </div>
            <h4 className="home-student-spotlight-student">Emmanuel Kweku Godsaye-Simpson</h4>
            <small className="home-student-spotlight-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ex officia officiis quisquam dolor corporis quo, velit sapiente, deleniti blanditiis doloribus autem tempora quidem suscipit sint illo libero amet? Officia perferendis iusto nobis? Tempore, labore quae maxime deleniti provident odit adipisci repellat doloribus aut nesciunt sapiente non enim iure voluptas ducimus, repudiandae corrupti beatae veritatis in. Ad ea officiis fugiat at enim quos quo provident accusantium dolor assumenda. Ullam qui dolorum eaque, maxime fuga ratione aliquid nemo a rem incidunt autem, repudiandae doloribus quam veritatis facilis illum! Eos alias hic nesciunt deserunt porro, eaque dicta ad voluptas illum. Dignissimos, aliquam?</small>
          </div>

          <div className="home-student-spotlight">
            <h3 className="home-student-spotlight-name">Best Student (Class 2)</h3>
            <div className="home-student-spotlight-img-box">
              <img src="https://pbs.twimg.com/media/D2qtOY8WkAEnGd1?format=jpg&name=4096x4096" alt="" className="home-student-spotlight-img" />
            </div>
            <h4 className="home-student-spotlight-student">Emmanuel Kweku Godsaye-Simpson</h4>
            <small className="home-student-spotlight-desc">Lorem ipsum dolicing elit. Eum itaque ipnt soluta. Distinctio, tempore accusamus deserunt eos eligendi dolorum repellat repellendus porro, aliquam cum dolorem accusantium a velit, debitis fugit ullam sunt quasi omnis fugiat obcaecati aspernatur labore! Doloribus beatae nesciunt velit! Aut ipsa laborum eius animi fuga?</small>
          </div>

          <div className="home-student-spotlight">
            <h3 className="home-student-spotlight-name">Best Student (Class 3)</h3>
            <div className="home-student-spotlight-img-box">
              <img src="https://pbs.twimg.com/media/D2qtOY8WkAEnGd1?format=jpg&name=4096x4096" alt="" className="home-student-spotlight-img" />
            </div>
            <h4 className="home-student-spotlight-student">Emmanuel Kweku Godsaye-Simpson</h4>
            <small className="home-student-spotlight-desc">Amet consectetur adipisicing elit. Eum itaque ipsum magni sint soluta. Distinctio, tempore accusamus deserunt eos eligendi dolorum repellat repellendus porro, aliquam cum dolorem accusantium a velit, debitis fugit ullam sunt quasi omnis fugiat obcaecati aspernatur labore! Doloribus beatae nesciunt velit! Aut ipsa laborum eius animi fuga?</small>
          </div>

          <div className="home-student-spotlight">
            <h3 className="home-student-spotlight-name">Best Student (Class 4)</h3>
            <div className="home-student-spotlight-img-box">
              <img src="https://pbs.twimg.com/media/D2qtOY8WkAEnGd1?format=jpg&name=4096x4096" alt="" className="home-student-spotlight-img" />
            </div>
            <h4 className="home-student-spotlight-student">Emmanuel Kweku Godsaye-Simpson</h4>
            <small className="home-student-spotlight-desc">Lorem ipsung elit. Eum itaque ipsum magni sint soluta. Distinctio, tempore accusamus deserunt eos eligendi dolorum repellat repellendus porro, aliquam cum dolorem accusantium a velit, debitis fugit ullam sunt quasi omnis fugiat obcaecati aspernatur labore! Doloribus beatae nesciunt velit! Aut ipsa laborum eius animi fuga?</small>
          </div>

          <div className="home-student-spotlight">
            <h3 className="home-student-spotlight-name">Best Student (Class 5)</h3>
            <div className="home-student-spotlight-img-box">
              <img src="https://pbs.twimg.com/media/D2qtOY8WkAEnGd1?format=jpg&name=4096x4096" alt="" className="home-student-spotlight-img" />
            </div>
            <h4 className="home-student-spotlight-student">Emmanuel Kweku Godsaye-Simpson</h4>
            <small className="home-student-spotlight-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum itaque ipsum magni sint soluta. Distinctio, tempore accusamus deserunt eos eligendi dolorum repellat repellendus porro, aliquam cum dolorem accusantium a velit, debitis fugit ullam sunt quasi omnis fugiat obcaecati aspernatur labore! Doloribus beatae nesciunt velit! Aut ipsa laborum eius animi fuga?</small>
          </div>

          <div className="home-student-spotlight">
            <h3 className="home-student-spotlight-name">Best Student (Class 6)</h3>
            <div className="home-student-spotlight-img-box">
              <img src="https://pbs.twimg.com/media/D2qtOY8WkAEnGd1?format=jpg&name=4096x4096" alt="" className="home-student-spotlight-img" />
            </div>
            <h4 className="home-student-spotlight-student">Emmanuel Kweku Godsaye-Simpson</h4>
            <small className="home-student-spotlight-desc">Lorem ipsum dolor sit Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem maxime earum quis incidunt quaerat enim hic repellat, culpa recusandae a? amet consectetur adipisicing elit. Eum itaque ipsum magni sint soluta. Distinctio, tempore accusamus deserunt eos eligendi dolorum repellat repellendus porro, aliquam cum dolorem accusantium a velit, debitis fugit ullam sunt quasi omnis fugiat obcaecati aspernatur labore! Doloribus beatae nesciunt velit! Aut ipsa laborum eius animi fuga?</small>
          </div>

          <div className="home-student-spotlight">
            <h4 className="home-student-spotlight-name">Best Student (Class 7)</h4>
            <div className="home-student-spotlight-img-box">
              <img src="https://pbs.twimg.com/media/D2qtOY8WkAEnGd1?format=jpg&name=4096x4096" alt="" className="home-student-spotlight-img" />
            </div>
            <h4 className="home-student-spotlight-student">Emmanuel Kweku Godsaye-Simpson</h4>
            <small className="home-student-spotlight-desc">Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa excepturi odio dolorem quia optio laborum! adipisicing elit. Eum itaque ipsum magni sint soluta. Distinctio, tempore accusamus deserunt eos eligendi dolorum repellat repellendus porro, aliquam cum dolorem accusantium a velit, debitis fugit ullam sunt quasi omnis fugiat obcaecati aspernatur labore! Doloribus beatae nesciunt velit! Aut ipsa laborum eius animi fuga?</small>
          </div> */}



        </div>
      </section>
    </>
  )
}
export default StudentPage