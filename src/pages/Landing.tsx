import React from 'react';
import Page from '../components/Page';
import PageContent from '../components/PageContent';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Landing: React.FC = () => (
  <Page>
    <Navbar />
    <PageContent>
      <section className="resume">
        <h1 className="mb-2">EMT and Software Engineer</h1>
        <p className="mb-2">Atlanta, GA<br /><a href="mailto:contact@tylerdteague.com">contact@tylerdteague.com</a></p>

        <h2 className="mt-2 mb-1">Professional Summary</h2>
        <p className="mb-2">Seasoned Software Engineer experienced developing applications, databases, and cloud computing solutions. Smart professional with proven troubleshooting and debugging capabilities for resolving complex technical issues.</p>

        <h2 className="mt-2 mb-1">Skills</h2>
        <ul className="mb-2">
          <li>NodeJS development</li>
          <li>React development</li>
          <li>AWS infrastructure</li>
          <li>Kubernetes</li>
          <li>Java</li>
        </ul>

        <h2 className="mt-2 mb-1">Work History</h2>
        <div className="mb-2">
          <div className="mb-1">
            <strong>01/2022 to Current &mdash; Software Engineer</strong><br />
            Cox Automotive Inc. – Atlanta, GA
            <ul className="mt-1">
              <li>Coordinated with other engineers to evaluate and improve software and hardware interfaces.</li>
              <li>Delivered unit-tested systems within customer-prescribed timeframes.</li>
              <li>Collaborated with fellow engineers to evaluate software and hardware interfaces.</li>
              <li>Collaborated with management, internal and development partners regarding software application design status and project progress.</li>
            </ul>
          </div>
          <div className="mb-1">
            <strong>05/2015 to 01/2022 &mdash; Firefighter/EMT</strong><br />
            Lumpkin County Emergency Services – Dahlonega, GA
            <ul className="mt-1">
              <li>Evaluated situation at emergency sites to determine and execute most effective methods for saving life and property.</li>
              <li>Initiated first aid measures to alleviate further injury and prepared victims for transport to medical facilities.</li>
              <li>Oversaw equipment and vehicle upkeep to maintain emergency readiness.</li>
              <li>Responded to emergency medical calls to perform lifesaving procedures and other emergency medical services.</li>
            </ul>
          </div>
        </div>

        <h2 className="mt-2 mb-1">Education</h2>
        <ul className="mb-2">
          <li>08/2019 &mdash; Bachelor of Science: Computer Science<br />University of North Georgia - Dahlonega, GA</li>
          <li>05/2014 &mdash; High School Diploma<br />Franklin County High School - Carnesville, GA</li>
        </ul>

        <div className="flex-center mt-2 mb-2">
          <a href="/Tyler_Teague_Resume.pdf" download className="download-btn">
            <button className="full-width mb-1" style={{ fontSize: '1.25rem', fontWeight: '500' }}>
              Download My Resume
            </button>
          </a>
        </div>
      </section>
    </PageContent>
    <Footer />
  </Page>
);

export default Landing;
