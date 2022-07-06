import { useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Home = ({ week, setWeek }) => {
  let average = useRef(0);
  const getAvg = () => {
    let sum = week.reduce((acc, v) => acc + v.rate, 0);
    average.current = (sum / 7).toFixed(1);
  };
  getAvg();

  return (
    <>
      {week.map((v, i) => (
        <Day key={i}>
          <h3>{v.day}</h3>
          {[...Array(+`${v.rate}`)].map((_, i) => (<Circle key={i}/>))}
          {[...Array(5 - +`${v.rate}`)].map((_, i) => (<CircleEmpty key={i}/>))}
          <BtnRate to={`/rate/${i}`}>
            <img src="/img/tri-right.svg" alt={`${v.day}요일 평점 남기기`} />
          </BtnRate>
        </Day>
      ))}
      <TextRate>
        일주일 평균<AvgRate>{average.current}</AvgRate> 점
      </TextRate>
      <Button
        onClick={() => {
          setWeek(
            week.map((v) => {
              v.rate = 0;
              return v;
            })
          );
          getAvg();
        }}
      >
        Reset
      </Button>
    </>
  );
};

export default Home;

const Day = styled.article`
  display: flex;
  align-items: center;
  margin: 20px auto 0;
  font-size: 18px;
  font-weight: 600;
  h3 {
    margin-right: 20px;
  }
`;

const Circle = styled.div`
  width: 26px;
  height: 26px;
  margin: 0 5px;
  border-radius: 50%;
  background: #a9ddd0;
`;

const CircleEmpty = styled.div`
  width: 26px;
  height: 26px;
  margin: 0 5px;
  border-radius: 50%;
  background: #eee;
`;

const BtnRate = styled(Link)`
  margin-left: 20px;
`;

const TextRate = styled.p`
  margin-top: 40px;
  font-size: 18px;
  font-weight: 600;
`;

const AvgRate = styled.span`
  padding: 5px 15px;
  margin-left: 10px;
  border-radius: 5px;
  background: #eee;
  font-weight: 700;
`;

const Button = styled.button`
  margin: 20px 0;
  width: 225px;
  height: 40px;
  border: none;
  border-radius: 5px;
  background: #fa9686;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  transition: background 0.2s ease-in-out;
  &:hover {
    background: #f9b2a6;
  }
`;
