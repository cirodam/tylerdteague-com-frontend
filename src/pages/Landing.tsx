import React from 'react';
import Page from '../components/Page';
import PageContent from '../components/PageContent';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Landing: React.FC = () => (
  <Page>
    <Navbar />
    <PageContent>
      <main className="resume" itemScope itemType="http://schema.org/Person">
        <header>
          <h1 className="mb-2" itemProp="name">EMT and Software Engineer</h1>
          <address className="mb-2">
            Atlanta, GA<br />
            <a href="mailto:contact@tylerdteague.com" itemProp="email">contact@tylerdteague.com</a>
          </address>
        </header>

        <section className="mb-2" aria-labelledby="summary-heading">
          <h2 id="summary-heading" className="mt-2 mb-1">Professional Summary</h2>
          <p className="mb-2" itemProp="description">Seasoned Software Engineer experienced in developing applications, databases, and cloud computing solutions. A skilled professional with proven troubleshooting and debugging capabilities for resolving complex technical issues.</p>
        </section>

        <section className="mb-2" aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="mt-2 mb-1">Skills</h2>
          <ul className="mb-2">
            <li>Node.js development</li>
            <li>React development</li>
            <li>AWS infrastructure</li>
            <li>Kubernetes</li>
            <li>Java</li>
          </ul>
        </section>

        <section className="mb-2" aria-labelledby="work-heading">
          <h2 id="work-heading" className="mt-2 mb-1">Work History</h2>
          <article className="mb-1" itemScope itemType="http://schema.org/Organization">
            <strong>01/2022 to Current &mdash; Software Engineer</strong><br />
            <span itemProp="name">Cox Automotive Inc.</span> – Atlanta, GA
            <ul className="mt-1">
              <li>Coordinated with other engineers to evaluate and improve software and hardware interfaces.</li>
              <li>Delivered unit-tested systems within customer-prescribed timeframes.</li>
              <li>Collaborated with management, internal and development partners regarding software application design status and project progress.</li>
            </ul>
          </article>
          <article className="mb-1" itemScope itemType="http://schema.org/Organization">
            <strong>05/2015 to 01/2022 &mdash; Firefighter/EMT</strong><br />
            <span itemProp="name">Lumpkin County Emergency Services</span> – Dahlonega, GA
            <ul className="mt-1">
              <li>Evaluated situation at emergency sites to determine and execute most effective methods for saving life and property.</li>
              <li>Initiated first aid measures to alleviate further injury and prepared victims for transport to medical facilities.</li>
              <li>Oversaw equipment and vehicle upkeep to maintain emergency readiness.</li>
              <li>Responded to emergency medical calls to perform lifesaving procedures and other emergency medical services.</li>
            </ul>
          </article>
        </section>

        <section className="mb-2" aria-labelledby="education-heading">
          <h2 id="education-heading" className="mt-2 mb-1">Education</h2>
          <ul className="mb-2">
            <li>08/2019 &mdash; Bachelor of Science: Computer Science<br />University of North Georgia - Dahlonega, GA</li>
            <li>05/2014 &mdash; High School Diploma<br />Franklin County High School - Carnesville, GA</li>
          </ul>
        </section>

        <div className="flex-center mt-2 mb-2">
          <a href="/Tyler_Teague_Resume.pdf" download className="download-btn">
            <button className="full-width mb-1" style={{ fontSize: '1.25rem', fontWeight: '500' }}>
              Download My Resume
            </button>
          </a>
        </div>
      </main>
    </PageContent>
    <Footer />
  </Page>
);

export default Landing;
