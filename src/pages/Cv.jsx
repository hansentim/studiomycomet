import styled from 'styled-components';
import ImageBox from '../components/ImageBox';

const CV = () => {
  return (
    <CVContainer>
      <ImageBox />

      {/* 1. Work (Present) */}
      <Section>
        <h2>Work</h2>
        <h3>Present</h3>
        <ul>
          <li>
            2023-Present: Independent business owner (VAT approved and
            f-skattsedel)
          </li>
          <li>
            Spatial Designer, interior architect, furniture design, applied art,
            illustrator, curator
          </li>
        </ul>
      </Section>

      {/* 2. Galleries */}
      <Section>
        <h2>Galleries</h2>
        <ul>
          <li>Adorno (coming)</li>
        </ul>
      </Section>

      {/* 3. Commissioned/Exhibitions */}
      <Section>
        <h2>Commissioned/Exhibitions</h2>
        <h3>2024</h3>
        <ul>
          <li>Adorno - coming fall/winter 2024</li>
          <li>Bespoke furniture for Meadow (ongoing)</li>
          <li>
            3 Days of Design - group exhibition curated by House of Nordic
            Design
          </li>
          <li>
            SSDD - Väntrum (the Waiting room), group exhibition - co-curator,
            spatial designer, exhibitor
          </li>
          <li>
            Illustrations for the book *Waves of the Blue Sea*, published by
            Media Evolution
          </li>
          <li>Bathroom design, private customer</li>
        </ul>
        <h3>2023</h3>
        <ul>
          <li>
            Spatial design, new spatial profile, bespoke furniture, tile mural,
            and interior architecture for Meadow, Malmö
          </li>
          <li>SSDD, group exhibition at BISe</li>
          <li>Illustration for Purple Ivy</li>
          <li>
            Illustrations for the book *Patterns of Light and Dark*, published
            by Media Evolution
          </li>
        </ul>
      </Section>

      {/* 4. Previous Work (of relevance) */}
      <Section>
        <h3>Previous Work (of relevance)</h3>
        <ul>
          <li>2010-2023: Weekday</li>
          <ul>
            <li>2010-2015: Visual Merchandiser</li>
            <li>2015-2023: Extra during leave of absence for studies</li>
          </ul>
        </ul>
      </Section>

      {/* 5. Media */}
      <Section>
        <h2>Media</h2>
        <ul>
          <li>
            <span>
              Dezeen, article about the NoDe group exhibition during 3 Days of
              Design - pictures of my furniture:
            </span>
            <StyledLink
              href='https://www.dezeen.com/2024/06/17/house-of-nordic-design-node-exhibition/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Dezeen - Read more
            </StyledLink>
          </li>
          <li>
            <span>Sight Unseen, article mentioning Väntrum:</span>
            <StyledLink
              href='https://www.sightunseen.com/2024/07/week-of-july-8-2024/?fbclid=PAZXh0bgNhZW0CMTEAAabm9lRq00FF8lW8ctzolP32meSJfAof6M_EgnzuZzNuSDlF9STH66N1wBY_aem_eHwph_36UyTXAQBvXe8TFw'
              target='_blank'
              rel='noopener noreferrer'
            >
              Sight Unseen - Read more
            </StyledLink>
          </li>
          <li>
            <span>Disegno, article mentioning Väntrum:</span>
            <StyledLink
              href='https://disegnojournal.com/newsfeed/southern-sweden-design-days-2024?fbclid=PAZXh0bgNhZW0CMTEAAaYmZXpMSZ3aq8Zd6hpuhl3JXXGcLLbJ0cs1A0gREFzcZDKv81q17K0Df5E_aem_lrZ8GQi2yxt9CsnIVqlggQ'
              target='_blank'
              rel='noopener noreferrer'
            >
              Disegno - Read more
            </StyledLink>
          </li>
        </ul>
      </Section>

      {/* 6. Education (last section) */}
      <Section>
        <h2>Education</h2>
        <ul>
          <li>
            2020-2022: Master of Arts and Design, Spatial Design - Royal Danish
            Academy (KADK)
          </li>
          <li>
            2018: Guest scenographer student project, one semester - The Danish
            Film School
          </li>
          <li>
            2015-2018: Bachelor of Arts and Design, Spatial Design - Royal
            Danish Academy (KADK)
          </li>
          <li>2009: Intermediala studier 30 ects - Lund University</li>
          <li>2008: Filmvetenskap 30 ects - Lund University</li>
          <li>2006-2007: Fotoskolan i Gamleby - Conceptual photography</li>
          <li>2005-2006: Öland Documentary film school</li>
        </ul>
      </Section>

      {/* Download Link */}
      <DownloadLink>
        <a href='/cv.pdf' download='MyComet_CV_October24.pdf'>
          Download CV (PDF)
        </a>
      </DownloadLink>
    </CVContainer>
  );
};

// Styled components
const CVContainer = styled.div`
  width: 90vw;
  margin: 0 auto;
  padding: 2rem;
  text-align: left;

  @media (max-width: 768px) {
    width: 100vw;
    padding: 1rem;
  }
`;

const Section = styled.section`
  margin-bottom: 2rem;

  h2 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
    color: #333;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
  }

  h3 {
    font-size: 1.3rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  ul {
    list-style-type: none;
    padding-left: 0;
    font-size: 1rem;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }

  ul ul {
    padding-left: 1.5rem;
    font-size: 0.9rem;
    line-height: 1.5;

    @media (max-width: 768px) {
      font-size: 0.85rem;
    }
  }

  li {
    margin-bottom: 0.75rem;
  }

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      color: #0056b3;
    }
  }
`;

const DownloadLink = styled.div`
  text-align: center;
  margin: 3rem 0;

  a {
    font-size: 1.5rem;
    color: white;
    background-color: #333;
    padding: 1rem 2rem;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.2s;

    &:hover {
      background-color: #555;
    }

    @media (max-width: 768px) {
      font-size: 1.2rem;
      padding: 0.8rem 1.5rem;
    }
  }
`;

const StyledLink = styled.a`
  margin-left: 0.5rem;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: #0056b3;
  }
`;

export default CV;
