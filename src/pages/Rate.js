import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Rate = ({ week, setWeek, rate, setRate }) => {
  const navigate = useNavigate();
  const dayIdx = useParams().day;
  
  useEffect(() => setRate(5), []);
  useEffect(() => {
    const handleKeyUp = (e) => {
      if (e.key >= 1 && e.key <= 5) {
        let num = parseInt(e.key);
        setRate(num);
        document.getElementById(`rate-${num}`).checked = true;
      }
    };
    window.document.addEventListener('keyup', handleKeyUp);
    return () => {
      window.document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const onClickInput = (e) => {
    setRate(parseInt(e.target.value));
  };

  const onClickSubmit = (e) => {
    e.preventDefault();
    setWeek(() => {
      week[dayIdx]['rate'] = rate;
      return week;
    });
    navigate('/');
  };

  return (
    <>
      <RateTitle>
        <span>{week[dayIdx].day}</span>요일 평점 남기기
      </RateTitle>
      <Radios>
        <input
          type="radio"
          name="radio-rate"
          id="rate-1"
          value={1}
          onClick={onClickInput}
        />
        <label htmlFor="rate-1">
          <Circle />
        </label>
        <input
          type="radio"
          name="radio-rate"
          id="rate-2"
          value={2}
          onClick={onClickInput}
        />
        <label htmlFor="rate-2">
          <Circle />
        </label>
        <input
          type="radio"
          name="radio-rate"
          id="rate-3"
          value={3}
          onClick={onClickInput}
        />
        <label htmlFor="rate-3">
          <Circle />
        </label>
        <input
          type="radio"
          name="radio-rate"
          id="rate-4"
          value={4}
          onClick={onClickInput}
        />
        <label htmlFor="rate-4">
          <Circle />
        </label>
        <input
          type="radio"
          name="radio-rate"
          id="rate-5"
          value={5}
          onClick={onClickInput}
          defaultChecked
        />
        <label htmlFor="rate-5">
          <Circle />
        </label>
      </Radios>
      <Button onClick={onClickSubmit}>등록</Button>
    </>
  );
};

export default Rate;

const RateTitle = styled.h2`
  margin: 30px auto 60px;
  color: #334e57;
  font-size: 22px;
  font-weight: 600;
  span {
    font-size: 32px;
  }
`;

const Circle = styled.div`
  display: inline-block;
  width: 41px;
  height: 41px;
  margin: 0 7px;
  border-radius: 50%;
  background: #a9ddd0;
  cursor: pointer;
`;

const Radios = styled.form`
  input[type='radio'] {
    display: none;
    &:checked {
      & ~ label div {
        background: #d9d9d9;
      }
      + label div {
        background: #a9ddd0;
      }
    }
  }
`;

const Button = styled.button`
  margin: 60px auto 0;
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
