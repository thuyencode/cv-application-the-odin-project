import GroupInfo from './GroupInfo'

function Main() {
  return (
    <main className='flex w-full flex-col divide-y-2 divide-gray-300 pl-10'>
      <GroupInfo title='Profile' className='py-10'>
        Driven web developer with a deep passion for the entire web development
        process. I thrive on the challenge of translating ideas into clean,
        functional, and beautiful websites.
      </GroupInfo>

      <GroupInfo title='Employment history*' className='py-10'>
        <div>
          <div className='mb-2.5 flex items-center justify-between'>
            <h4 className='capitalize'>Programmer, Acme Technologies Inc.</h4>
            <p className='capitalize text-gray-500'>San Francisco, CA</p>
          </div>

          <p className='mb-5 capitalize text-gray-500'>June 2022 - May 2024</p>

          <ul className='ml-10 list-disc'>
            <li className='text-gray-600'>
              Developed and maintained responsive front-end features for the
              company's e-commerce platform using HTML, CSS, and JavaScript.
            </li>
            <li className='text-gray-600'>
              Collaborated with senior developers on back-end integration using
              APIs.
            </li>
            <li className='text-gray-600'>
              Implemented unit tests to ensure code quality and functionality.
            </li>
            <li className='text-gray-600'>
              Contributed to UI/UX discussions and implemented design mockups
              into functional web pages.
            </li>
            <li className='text-gray-600'>
              Utilized version control systems (e.g., Git) for code management
              and collaboration.
            </li>
          </ul>
        </div>

        <div>
          <div className='mb-2.5 flex items-center justify-between'>
            <h4 className='capitalize'>Programmer, GreenEarth Solutions.</h4>
            <p className='capitalize text-gray-500'>Austin, TX</p>
          </div>

          <p className='mb-5 capitalize text-gray-500'>
            December 2021 - May 2024
          </p>

          <ul className='ml-10 list-disc'>
            <li className='text-gray-600'>
              Developed and maintained native Android applications using Java
              and Kotlin.
            </li>
            <li className='text-gray-600'>
              Contributed to the design and development of a mobile app
              promoting environmental sustainability initiatives.
            </li>
            <li className='text-gray-600'>
              Utilized APIs to integrate with external data sources (e.g.,
              weather data, recycling locations).
            </li>
            <li className='text-gray-600'>
              Implemented unit and integration tests for mobile app stability.
            </li>
            <li className='text-gray-600'>
              Worked closely with project managers and designers to ensure app
              functionality met user needs and project goals.
            </li>
          </ul>
        </div>
      </GroupInfo>

      <GroupInfo title='Education*' className='py-10'>
        <div>
          <div className='mb-2.5 flex items-center justify-between'>
            <h4 className='capitalize'>
              Bachelor of Science in Computer Science, Evergreen Tech University
            </h4>
            <p className='capitalize text-gray-500'>Seattle, WA</p>
          </div>

          <p className='mb-5 capitalize text-gray-500'>
            August 2018 - May 2022
          </p>
        </div>
      </GroupInfo>
    </main>
  )
}

export default Main
