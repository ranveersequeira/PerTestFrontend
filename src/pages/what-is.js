import React from 'react'
import Link from "next/link";
import { Page } from "../components/Page";

const WhatIs = () => {
  return (
    <Page>
      {/* box */}
      <div className="box">

        {/* heading */}
        <h1 className="page-title -mt-16">
          What is the PerTest?
        </h1>

        <div className="content"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
      </div>
    </Page>
  )
}

export default WhatIs
