import { Page } from "../components/Page"
import { Answers } from "../components/Answers";
import Link from "next/link";
import Image from "next/image"

export default function Question() {
  return (
    <Page>
      <div className="box">
        <div className="content text-center">
          <div className="font-display text-10xl leading-none -mt-28 flex justify-center">
            <Image src="/img/number-sign.svg" width={72} height={109} />
            <h1 className="page-title">1</h1>
          </div>

          <p>I am very perceptive and I often find myself acting as a guardian, vigilant about keeping myself and others safe.</p>
          <Answers className="bottom-0 p-2" />
        </div>
      </div>
    </Page>
  )
}