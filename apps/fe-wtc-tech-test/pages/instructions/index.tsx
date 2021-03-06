import React from 'react';
import { DetailsBox } from '@mono-nx-test-with-nextjs/ui';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import test1 from '../instructions/tests/test1';
import test2 from '../instructions/tests/test2';
import test3 from '../instructions/tests/test3';

const useStyles = makeStyles(() =>
  createStyles({
    code: {
      background: '#001628',
      color: '#00FF41',
      padding: '20px',
      borderRadius: '10px',
      margin: '30px 0',
      display: 'block',
      fontSize: '1rem',
    },
  })
);

const listOfAllowedComponents = [
  'Grid',
  'Progress',
  'Buttons',
  'material-icons',
  'Typography',
  'Paper',
];

const Emoji = ({ children, size = 30 }) => (
  <span style={{ fontSize: `${size}px` }}>{children}</span>
);

const CodeBlock = ({ children }) => {
  const classes = useStyles();
  return <code className={classes.code}>{children}</code>;
};

const TESTS = [
  { test: test1, title: 'Movies cards' },
  { test: test2, title: 'Movies cards and filters' },
  { test: test3, title: 'Movies cards and carousel' },
];

const ExternalLink = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

const Instructions = () => {
  return (
    <main>
      <h1>Instructions</h1>
      <p>
        The idea of this test is to give you something which is as close as
        possible to a real situation where you have to implement some user
        stories in a codebase. We believe this is the best way to evaluate a
        candidate because this is what you will do if you get the job.
        Hopefully, you will find this test challenging and fun. We do appreciate
        any feedback (good or bad) you might have so do not hesitate to let us know
        what you think! Help us improve!
      </p>
      <p>Let's begin...</p>
      <p>This codebase is a mono-repo. At the moment you will find:</p>
      <ul>
        <li>A FE application in Next.js (apps/fe-wtc-tech-test)</li>
        <li>A React library of components (libs/ui)</li>
        <li>An Express API (apps/api)</li>
        <li>E2E tests (apps/fe-wtc-tech-test-e2e)</li>
      </ul>
      <p>
        The FE application is already connected to the API (swagger below), so
        you don't need to worry about that. But there is also a shared library
        of components which you might want to use. Imagine this a real
        situation, so when you create a new component, you need to think where
        to put it. Does it belong to a share component library or in the
        application?
      </p>
      <p>
        Remember, the API is not persistent, so every time you make a change
        with PUT etc. it will be saved until you restart.
      </p>
      <p>
        Somebody should have told you which test to do, if you are not sure,
        please reach out to your recruiter and ask.
      </p>
      <p>
      There is no time limit, so you can relax and get it done when you can, it should only take you a few hours depending on which test you choose below. The actual implementation will help us to assess your level more accurately - if we do not agree with the implementation or how you structure your code, this doesn't make you a bad coder, it is just our own opinion - so don't take it personally as this is based on our preference.
      </p>
      <h2>TESTS</h2>
      {TESTS.map(({ test, title }, index) => (
        <div key={title}>
          <h3>
            Test {index + 1}: <b>{title}</b>
          </h3>
          <h4>User Stories</h4>
          {test}
        </div>
      ))}
      <hr />
      <h3>The git bit</h3>
      <p>When you commit your code, you need to follow this pattern:</p>
      <p>user story userStoryNumber.taskNumber. For instance:</p>
      <p>user story 1.1 {'=>'} if you are working on user story 1 task 1</p>
      <p>user story 1.2 {'=>'} if you are working on user story 1 task 2</p>
      <p>
        When you think you are ready for us to review your work, just push your
        code up and send an email to your recruiter. You can push even if you
        are not ready yet, we won't review it until you say it is.
      </p>
      <hr />
      <h3>Requirements</h3>
      <ul>
        <li>Your solution should be responsive</li>
        <li>
          Your solution should work on all the latest 2 versions of modern
          browsers:
          <ul>
            <li>Chrome</li>
            <li>Safari</li>
            <li>Firefox</li>
            <li>Edge</li>
          </ul>
          <p>
            <b>
              What about Explorer 11? If your solution supports it, great! Let
              us know and we will give you extra points, but it is not required.
            </b>
          </p>
        </li>
        <li>
          Your solution should handle application errors (No data from API, no
          images, etc.)
        </li>
        <li>
          You can add other things if you require to (lodash modules, ramda,
          Redux etc.). If you do, we want to know why.
        </li>
        <li>
          Your solution should include MEANINGFUL tests which test some or all
          the application's logic (you can also add E2E tests with Cypress if
          you like and if you want to impress us. fe-wtc-tech-test-e2e is there
          for this reason, but it is not required). Snapshots tests are fine for
          presentational components, but they might not be enough in other
          scenarios. We want to see how you test application logic, we give for
          granted that you know how to write snapshots tests. Do not write unit
          tests and/or integration tests with Cypress. In this case, Cypress can
          only be used for e2e but it is not an alternative to unit and
          integration tests.
        </li>
        <li>
          if you diverge from the default behavior of this repo, you should add
          at the top or the readme file the new instructions. Please be clear.
        </li>
        <li>
          <p>
            In order to speed up development, if you'd like, you can use, change
            or extend components already present in the ui library. Those we
            have included, are just a wrapper around the Material UI one,
            nothing more. You can import them in this way:
          </p>
          <p>
            <CodeBlock>
              {
                "import { Button, Progress } from '@mono-nx-test-with-nextjs/ui';"
              }
            </CodeBlock>
          </p>
          <p>
            Same thing for icons. They can be imported directly as a normal
            component from the library as:
          </p>
          <p>
            <CodeBlock>
              {"import {VisibilityIcon} from '@mono-nx-test-with-nextjs/ui';"}
            </CodeBlock>
          </p>
          <p>
            This is the list of the original Material UI components we wrapped:
          </p>
          <ul>
            {listOfAllowedComponents.map((componentName) => (
              <li key={componentName}>
                <ExternalLink
                  href={`https://material-ui.com/components/${componentName}/`}
                >
                  {componentName}
                </ExternalLink>
              </li>
            ))}
          </ul>
          <p>You can also use Material UI Utils.</p>
          <b>
            <p>
              <b>
                Nothing else is allowed from Material UI or extra UI framework
                (i.e. Bootstrap). We want you to create new components.
              </b>
            </p>
          </b>
        </li>
      </ul>
      <DetailsBox
        summaryDescription={`What we check when grading your solution`}
      >
        <ul>
          <li>
            If your solution meets accessibility standards (at least level A)
          </li>
          <li>If your solution meets security standards</li>
          <li>
            If your solution produces any errors or messages in the console
          </li>
          <li>How your solution handles application errors</li>
          <li>How much your solution follows our instructions</li>
          <li>If you use any third-parties and why</li>
          <li>How you structure your code</li>
          <li>How clean your code is</li>
          <li>Your attention to details</li>
          <li>How close to the design your solution is</li>
          <li>How you write typescript</li>
          <li>
            If your solution runs on our machine after following your
            instructions (if you change anything and diverge from the default
            behavior)
          </li>
        </ul>
      </DetailsBox>
      <DetailsBox
        summaryDescription={`What we DON'T check when grading your solution:`}
      >
        <ul>
          <li>What you choose as CSS methods (BEM, SMACSS, OOCSS, etc.)</li>
          <li>What you choose as CSS "tools" (less, sass, CSS-in-JS)</li>
          <li>
            If you add extra functionalities but you don't do 100% of what
            requested. If you want to impress us, follow our instructions and do
            things properly (add all the required tests!), that is enough.
          </li>
          <li>The time you spend on it</li>
        </ul>
      </DetailsBox>
      <hr />
      <h3>Notes:</h3>
      <ul>
        <li>
          <p>
            Where you are now is where the instructions <Emoji> &#9881;</Emoji>{' '}
            page is:{' '}
            <ExternalLink href={'http://localhost:4200/instructions'}>
              http://localhost:4200/instructions
            </ExternalLink>
            {'. '}
            You can always come back here anytime, just click on the button in
            the footer. <Emoji>&#128071;</Emoji>
          </p>
          <p>
            The FE application home is exposed at:{' '}
            <ExternalLink href={'http://localhost:4200'}>
              http://localhost:4200 
            </ExternalLink>&nbsp;
          - this is where you need to put your code.</p>
        </li>
        <li>
          The API is exposed at http://localhost:3333.
          <p>
            API's endpoint example (movies):{' '}
            <ExternalLink href={'http://localhost:3333/api/movies'}>
              http://localhost:3333/api/movies
            </ExternalLink>
          </p>
          <p>
            <ExternalLink href={'http://localhost:3333/swagger-doc'}>
              API swagger doc
            </ExternalLink>
          </p>
          <p>
            <b>
              Remember, you can actually hit the endpoints from the swagger doc
              to see the data. Click on "Try it out" and then execute. You can
              also play around with params.
            </b>
          </p>
        </li>
        <li>
          <p>
            <ExternalLink href={'/assets/design/fe_movies_tech_test.pdf'}>
              Design
            </ExternalLink>
          </p>
        </li>
      </ul>
      <p>
        That's it!! Now you can start. We hope you will enjoy this challenge and
        good luck!
      </p>
      <p>
        <b>
          01001000 01100001 01110000 01110000 01111001 00100000 01100011
          01101111 01100100 01101001 01101110 01100111 00100001
        </b>
      </p>
    </main>
  );
};

export default Instructions;

