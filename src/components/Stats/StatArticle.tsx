import React from 'react'

export function StatArticle() {
  return (
    <div className="flex flex-col w-full p-5 lg:px-10 lg:justify-center">
      <p className="mb-7 font-sans text-lg  text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
        malesuada amet pretium lacus. Id{' '}
        <u className="text-rocket-logo-color">potenti diam</u> et cras odio
        viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc
        semper.
      </p>
      <p className="text-lg text-white">
        <a className="hover:text-rocket-logo-color transition-all cursor-pointer">
          <u>Lorem ipsum</u>
        </a>
      </p>
    </div>
  )
}
