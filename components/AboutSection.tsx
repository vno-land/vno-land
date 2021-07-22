import React from 'react';

import HeadingComponent from './Layout/Utility/HeadingComponent';

import styles from '../styles/AboutSection.module.css';

const AboutSection = () => {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.groupOne}>
        <article className={styles.groupOneSubOne}>
          <h2>Preface</h2>
          <p>
            Recently, a production level release of Deno emerged onto the development landscape as an alternative to Node.js and has been steadily gaining popularity ever since. Deno is a secure-by-default runtime environment that aims to simplify many of the operations formerly outsourced to node modules. Similarly, Vue has been gaining ground on both React and Angular since its release in 2014, with a lot of developers excited about its flexibility and ease of use.
            <span className={styles.spacer}></span>
            However, for developers who are equally as excited by Deno as they are by Vue, there has not previously been a way to work with Vue in the Deno runtime. Until now.
          </p>
        </article>
        <div className={styles.groupOneSubTwo}>
          <article>
            <h2>Enter Vno</h2>
            <p>
              As the first build tool for compilation and bundling of Vue single-file components in a Deno runtime, vno allows a user to employ the elegance and functionality afforded by developing with Vue while offering the security and simplicity of Deno.
            </p>
          </article>

          <article>
            <h2>What is Vno?</h2>
            <p>
              Vno is a parser, compiler, and bundler and can be easily accessed through an integrated CLI tool that will either create an entire project from scratch, including an example file structure and components, or optimize an existing Vue project with a few simple commands.
            </p>
          </article>
        </div>
      </div>

      <article className={styles.groupTwo}>
        <h2>How does Vno work?</h2>
        <p>
          At its core vno is an adapter that will parse a Vue component file (or files) and compile and bundle it into a Javascript file to be read and rendered by the browser. <a className={styles.link} href="https://github.com/open-source-labs/vno" target="_blank" rel="noopener noreferrer">A thorough explanation of the process can be found in the vno documentation.</a>

          <span className={styles.spacer}></span>

          The vno module offers the equivalent of a create-vue app through the use of a few simple CLI commands. Although vno can easily be utilized without this functionality, vno create serves to lower the barrier to entry for those wanting to work with Vue in a Deno environment but were formerly held back by the newness of both technologies and their incompatibility.

          <span className={styles.spacer}></span>

          When given a relative path to the root component, vno will recursively walk through the file structure, find all .vue files, and begin the parsing process. During the parse operation each component’s individual tags are isolated and stored and all necessary connections between files are accounted for so that the build occurs in the proper order.

          <span className={styles.spacer}></span>

          Upon successful completion of a vno build, a user will see a vno-build folder created and populated with a build.js file and a style.css file. It is important to note that as of this writing, scoped css styling is still in development and is not currently supported. For best results, it is recommended that every aspect of a component that may require individual styling be given a unique identifier tag.

          <span className={styles.spacer}></span>

          Once the build is complete, the build.js and style.css will need to be linked into the server and referenced inside the index.html file. Upon initializing the server, it is clear how vno has adapted Vue files to be served via Deno to the browser, which, until the introduction of vno, was not possible.
        </p>
      </article>
    </div>
  )
}

export default AboutSection
