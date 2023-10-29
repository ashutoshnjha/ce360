import React, { Component } from 'react'
import Link from 'next/link'
export default class extends Component {
  render () {
    return (
      <div>
        pages/index.js
        <ul>
          <li>
            <Link href="/">Root</Link>
          </li>
          <li>
            <Link href="/uitest">UI-TEST</Link>
          </li>
          <li>
            <Link href="/info">Info</Link>
          </li>
          <li>
            <Link href="/service/hello-world">service Post</Link>
          </li>
        </ul>
      </div>
      
    )
  }
}