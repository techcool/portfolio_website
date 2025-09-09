import React from 'react'

export default function CareerBenefit() {
  return (
    <>
       <section className="career__benefits">
          <div className="container mx-auto px-4 line g-0 pt-140 pb-150">
            <span className="line-3"></span>

            <div className="flex flex-wrap">
              <div className="w-full lg:w-[58.33333333%]">
                <ul className="career__benefits-list justify-center lg:justify-start">
                  <li>Vacation & Paid <br/>Time Off</li>
                  <li>Work-life <br/> Integration</li>
                  <li>Maternity/Paternity <br/>Benefits</li>
                  <li>Personal <br/> Career Growth</li>
                  <li>Learning & <br/>Development</li>
                  <li>Healthy <br/> Food & Snacks</li>
                </ul>
              </div>
              <div className="w-full lg:w-[41.66666667%]">
                <div className="sec-title-wrapper">
                  <h2 className="sec-title title-anim">Global Perks & Benefits</h2>
                  <p>We want you to love working here as much as we do. To inspire our team to be creative, productive,
                    and most importantly – feel valued as employees, we offer endless perks and de-stressors. How fun it
                    is to unwind while at work!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> 
    </>
  )
}
