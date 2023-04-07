import Heading from "../helper/Heading";

function ContactFooter() {
  return (
    <footer className="pb-16">
      <Heading id="contact">Contact</Heading>

      <div className="flex-col-center">
        <h1 className="text-2xl max-sm:text-xl mb-4 font-bold">Links</h1>

        <a href="https://github.com/sharkri" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github mr-2" aria-label="github-icon" />
          Github
        </a>
      </div>
    </footer>
  );
}

export default ContactFooter;
