import { Page } from "../components/Page"
import { Answers } from "../components/Answers";
import Link from "next/link";

export default function Directions() {
    return (
        <Page>
            <div className="box">
                <div className="content text-center">
                    <h3 className="uppercase tracking-wider mb-2">Instructions</h3>
                    <h1 className="page-title">It's Easy.</h1>
                    <p>Answer the following questions with:</p>
                    <Answers />
                    <div className="button relative mx-auto w-40 top-32 md:top-20">
                        <Link href="/question">
                            <a className="button-text no-underline">Start</a>
                        </Link>
                    </div>
                </div>
            </div>
        </Page>
    )
}