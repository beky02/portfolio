import GithubIcon from "../common-components/icons/github";
import LinkedInIcon from "../common-components/icons/linkedIn";
import Layout from "./layout";

export default function Contact() {
  return (
    <section id="contact" className="h-[60vh] w-full mt-10">
      <Layout>
        <div className="h-full flex flex-col justify-center items-center my-10 gap-y-20 text-center">
          <div className="flex flex-col text-secondary-100 text-6xl font-bold gap-y-10">
            <p>Let&#39;s talk about</p>
            <p>your project</p>
          </div>

          <div className="flex flex-col gap-y-5 items-center">
            <EmailLink />
            <SocialMedia />
          </div>
        </div>
      </Layout>
    </section>
  );
}

function SocialMedia() {
  return (
    <ul className="flex items-center" aria-label="Social media">
      <li className="mr-5 shrink-0 text-xs">
        <a
          href="https://github.com/beky02"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="GitHub (opens in a new tab)"
          title="GitHub"
        >
          <GithubIcon />
        </a>
      </li>
      <li className="mr-5 shrink-0 text-xs">
        <a
          href="https://www.linkedin.com/in/bereket-tadege/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="LinkedIn (opens in a new tab)"
          title="LinkedIn"
        >
          <LinkedInIcon />
        </a>
      </li>
    </ul>
  );
}

function EmailLink() {
  return (
    <div className="flex items-center gap-x-3 hover:scale-110 transition-transform duration-300">
      <div className="h-[1px] w-[100px] bg-primary rounded-sm"></div>
      <a href="mailto:berekettadege@gmail.com" className="text-primary">
        berekettadege09@gmail.com
      </a>
      <div className="h-[1px] w-[100px]  bg-primary rounded-sm"></div>
    </div>
  );
}
