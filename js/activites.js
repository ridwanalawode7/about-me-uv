//This manages the activites Listed in the activities section

const LEARNING = [
  {
    actName: 'Mechanics Of Materials',
    actMeta: 'Engineering',
    actDesc: `The field of mechanics of materials, typically refers to various methods of calculating the stresses and strains in structural members, such as beams, columns, and shafts.`,
  },
  {
    actName: 'React Js',
    actMeta: 'Programming Library',
    actDesc: `React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.`,
  },
  {
    actName: 'Next Js',
    actMeta: 'Programming Framework',
    actDesc: `Next.js is an open-source web development framework built on top of Node.js enabling React-based web applications functionalities such as server-side rendering and generating static websites.`,
  },
  {
    actName: 'Blender',
    actMeta: '3D Design Tool',
    actDesc: `Blender is a free and open-source 3D computer graphics software toolset used for creating animated films, visual effects, art, 3D-printed models, motion graphics, interactive 3D applications, virtual reality, and, formerly, video games.`,
  },
];

const PROJECTS = [
  // {
  //   actName: 'A.S.S.I.C',
  //   actMeta: 'Website',
  //   actDesc: `Advanced Space System Information Catalogue is a personal project that aims to create a space information website offering information about what is known about the universe for educative purpose.`,
  // },
  {
    actName: '"Epic" Landing Page',
    actMeta: 'Webpage',
    actDesc: `This is a practice project where I try to challenge my HTML, CSS and JavaScript skills by building an epic landing page for a fictional Technology Research and Development Organisation.`,
  },
  {
    actName: 'Hello React! Website',
    actMeta: 'Website',
    actDesc: `After learning the basics of React, I have challenged my self to build a group of React Js practice projects that gives me a hands on practical on the React Js features and concepts I have learnt so far. The projects are going to be hosted on website built with React. The website is aleady in production.`,
    links: [
      {
        linkText: 'Check it out here',
        linkUrl: 'https://ridwanalawode7.github.io/hello-react',
      },
    ],
  },
  {
    actName: 'My Web Dev Portfolio Website',
    actMeta: 'Website',
    actDesc: `The objective of this project is to build a wed developer portfolio website that showcases my skills, projects and experiences as a web developer.`,
  },
];

const BOOKS = [
  {
    actName: `Influence: The Psychology of Persuasion`,
    actMeta: 'by Robert B. Cialdini ',
    actDesc: `Influence, the classic book on persuasion, explains the psychology of why people say "yes"—and how to apply these understandings. Dr. Robert Cialdini is the seminal expert in the rapidly expanding field of influence and persuasion. His thirty-five years of rigorous, evidence-based research along with a three-year program of study on what moves people to change behavior has resulted in this highly acclaimed book.`,
  },
];

const LEARNING_CONTAINER = document.getElementById('learning_');
const PROJECTS_CONTAINER = document.getElementById('projects_');
const BOOKS_CONTAINER = document.getElementById('books_');

function displayActivities(activityObject, activityRoot) {
  for (const entry of activityObject) {
    activityRoot.innerHTML += `<div class="act-item">
                    <div class="act-name-head">
                      <div class="act-name"><h4>${entry.actName}</h4></div>
                      <div class="act-exp-btn" role="button" aria-label="Expand Activities" tabindex="0">
                        <svg viewBox="0 0 6.3499999 3.743854">
                          <g id="layer1">
                            <path
                              d="M 3.175,3.743854 0,0.568854 0.568854,0 3.175,2.619375 5.781146,0.013229 6.35,0.582083 Z"
                              id="path2"
                              style="stroke-width: 0.264583"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div class="act-meta">${entry.actMeta}</div>
                    <div class="act-body">
                      <p>${entry.actDesc} ${
      entry.links ? createAnchorLinks(entry.links) : ''
    }</p>
                    </div>
                  </div>`;
  }
}

function createAnchorLinks(linkObject) {
  let htmlLinks = '';

  for (const iterator of linkObject) {
    htmlLinks += `<a href=${iterator.linkUrl}>${iterator.linkText}</a>`;
    console.log(iterator);
  }

  return htmlLinks;
}

displayActivities(LEARNING, LEARNING_CONTAINER);
displayActivities(PROJECTS, PROJECTS_CONTAINER);
displayActivities(BOOKS, BOOKS_CONTAINER);
