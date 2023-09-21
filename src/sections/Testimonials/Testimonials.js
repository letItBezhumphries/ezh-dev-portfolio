import styled from 'styled-components';

const TestimonialsContainer = styled.aside`
  margin-bottom: 3rem;
`;

const SectionWrapper = styled.div`
  background: #fff;
  padding: 30px;
`;

const Heading = styled.h2`
  margin-top: 0;
  margin-bottom: 30px;
  color: #545e69;
  font-size: 24px;
`;

const ContentWrapper = styled.div`
  display: flex;
`;

const Testimonial = styled.div`
  margin-bottom: 3rem;
`;

const Quote = styled.blockquote`
  color: #666;
  font-size: 16px;
  border-left: 5px solid #9fdeb7;
  padding: 5px 15px;
  margin-bottom: 15px;
  margin: 0 0 1rem;

  & p {
    margin-bottom: 0;
  }

  & .svg-inline {
    color: #79d19a;
    margin-right: 15px;
  }
`;

const Source = styled.p`
  font-size: 14px;
  padding-left: 20px;
  font-weight: 500;

  & span:first-of-type {
    color: #939ea9;
    font-weight: 600;
  }

  & span:last-of-type {
    color: #999;
  }
`;

const Testimonials = ({ testimonials, heading }) => {
  return (
    <TestimonialsContainer>
      <SectionWrapper>
        <Heading>{heading}</Heading>
        <ContentWrapper>
          {testimonials.map((testimonial, i) => (
            <Testimonial key={i}>
              <Quote>
                <p>{testimonial.quote}</p>
              </Quote>
              <Source>
                <span>{testimonial.name}</span>
                <br />
                <span>{testimonial.title}</span>
              </Source>
            </Testimonial>
          ))}
        </ContentWrapper>
      </SectionWrapper>
    </TestimonialsContainer>
  );
};
export default Testimonials;
