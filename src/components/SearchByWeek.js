import React, { useState, useRef, useEffect, useContext } from "react";
import useCalendar from "../hook/useCalendar";
import moment from "moment";
import { ThemeContext } from "../shared/context/ThemeProvider";

import "./searchByWeek.css";

function SearchByWeek() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const api = [
    {
      day: "2/1/2022",
      price: "365.798",
    },
    {
      day: "3/1/2022",
      price: "365.798",
    },
    {
      day: "4/1/2022",
      price: "365.798",
    },
    {
      day: "5/1/2022",
      price: "665.798",
    },
    {
      day: "6/1/2022",
      price: "365.798",
    },
  ];

  const { selectedDate, todayFormatted, getPrevWeek, getNextWeek } =
    useCalendar();
  const [showSort, setShowSort] = useState(false);
  const [typeSort, setTypeSort] = useState("Mặc Định");

  const [activeDay, setActiveDay] = useState(3);
  const [valueDay, setValueDay] = useState(null);

  const sortRef = useRef();
  const indexActive = useRef();
  const closeSortOption = (e) => {
    if (sortRef.current === e.target) {
      setShowSort(false);
    }
  };
  useEffect(() => {
    setShowSort(false);
  }, [typeSort]);
  const handleTypeSort = (e) => {
    setTypeSort(e.target.innerHTML);
  };
  function compare(dateTimeA, dateTimeB) {
    var momentA = moment(dateTimeA, "DD/MM/YYYY");
    var momentB = moment(dateTimeB, "DD/MM/YYYY");
    if (momentA > momentB) return 1;
    else if (momentA < momentB) return -1;
    else return 0;
  }
  const displayGetDay = (selectedDate) => {
    const startDay = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate() - 4
    );
    // return startDay.getMonth() + 1;
    let arr = [];
    for (let i = 1; i <= 7; i++) {
      let a = new Date(
        startDay.getFullYear(),
        startDay.getMonth(),
        startDay.getDate() + i
      );
      let b = `${a.getDate()}/${a.getMonth() + 1}/${a.getFullYear()}`;
      arr.push(b);
    }
    return arr;
  };
  const dateClickHandler = (date, index) => {
    indexActive.current = index;
    console.log(indexActive.current);

    setValueDay(date);
  };
  useEffect(() => {
    setActiveDay(indexActive.current);
  }, [valueDay]);
  const getValueDay = (x, y) => {
    return x.filter((x) => x.day === y);
  };
  return (
    <div
      className={
        theme === "dark"
          ? "SearchByWeek-container dark"
          : "SearchByWeek-container"
      }
    >
      <div className='SearchByWeek-header'>
        <div className='header-content'>
          <p>Kết quả tìm kiếm cho "chuyến bay một chiều"</p>
          <div className='header-user'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='22'
              height='22'
              className='header-icon-user'
              focusable='false'
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              <g data-name='Group 28011'>
                <path
                  data-name='Rectangle 4480'
                  fill='none'
                  d='M0 0h24v24H0z'
                ></path>
                <g data-name='Vector Smart Object21'>
                  <g
                    data-name='Group 21'
                    transform='translate(2 4)'
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path
                      data-name='Path 44'
                      d='M15.605 4.332a2.62 2.62 0 11-5.232 0V2.757a2.62 2.62 0 115.232 0z'
                    ></path>
                    <ellipse
                      data-name='Ellipse 9'
                      cx='2.18'
                      cy='2.216'
                      rx='2.18'
                      ry='2.216'
                      transform='translate(3.84 .443)'
                    ></ellipse>
                    <path
                      data-name='Path 45'
                      d='M8.805 10.302a5.085 5.085 0 00-3.653-1.45 5.261 5.261 0 00-5.136 4.3.872.872 0 00.863 1.019h5'
                    ></path>
                    <path
                      data-name='Path 46'
                      d='M12.984 9.734h0a7.015 7.015 0 00-6.907 6.082.886.886 0 00.871 1.007H19.02a.886.886 0 00.871-1.007 7.015 7.015 0 00-6.907-6.082z'
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            <span>1 người lớn</span>
          </div>
        </div>
        <div className='header-btn'>
          <span>Thay đổi tìm kiếm</span>
        </div>
      </div>
      <div className='SearchByWeek-main'>
        <div className='main-flight'>
          <h4 className='main-flight-title'>Chuyến bay</h4>
          <span className='main-flight-province'>
            Đà Nẵng (DAD) - Hồ Chí Minh (SGN)
          </span>
          <p className='main-flight-time'>Thứ Sáu, 31/12/2021</p>
        </div>
        <div className='calendar-week'>
          {/* nut */}
          <div className='calendar-button prev' onClick={getPrevWeek}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='36'
              height='36'
              className='button-icon'
              focusable='false'
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              <g data-name='Group 28852'>
                <path
                  data-name='Rectangle 4424'
                  fill='none'
                  d='M0 24V0h24v24z'
                ></path>
                <g data-name='Group 27961'>
                  <path
                    data-name='Path 20155'
                    d='M9.098 11.761L14.759 6.1a.34.34 0 01.48.48L9.82 12l5.419 5.419a.338.338 0 010 .481.342.342 0 01-.239.1.331.331 0 01-.239-.1L9.1 12.239a.338.338 0 01-.002-.478z'
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          <div className='calendar-button next' onClick={getNextWeek}>
            <svg
              data-name='Group 28853'
              xmlns='http://www.w3.org/2000/svg'
              width='36'
              height='36'
              className='button-icon'
              focusable='false'
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              <path
                data-name='Rectangle 4424'
                fill='none'
                d='M0 24V0h24v24z'
              ></path>
              <g data-name='Group 27961'>
                <path
                  data-name='Path 20155'
                  d='M15.241 11.761L9.58 6.1a.34.34 0 00-.48.48L14.519 12 9.1 17.419a.338.338 0 000 .48.342.342 0 00.239.1.331.331 0 00.239-.1l5.661-5.66a.338.338 0 00.002-.478z'
                ></path>
              </g>
            </svg>
          </div>
          {/*display*/}
          <ul className='list-date'>
            {displayGetDay(selectedDate).map((x, index) =>
              compare(x, todayFormatted) >= 0 ? (
                <li
                  key={index}
                  className={
                    activeDay === index
                      ? "date-item-price active"
                      : "date-item-price"
                  }
                  onClick={() => dateClickHandler(x, index)}
                >
                  <span>
                    {getValueDay(api, x)[0] ? getValueDay(api, x)[0].day : x}
                  </span>
                  <p>
                    {getValueDay(api, x)[0]
                      ? `${getValueDay(api, x)[0].price}đ`
                      : "-"}
                  </p>
                </li>
              ) : (
                <li key={index} className='date-item disibale'>
                  {x}
                </li>
              )
            )}
          </ul>
        </div>
        <div className='main-filter'>
          <div className='filter-plane-ticket'>
            <div className='filter-search'>
              <span className='btn-filter-search'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  className='filter-icon'
                  focusable='false'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <g data-name='Group 28546'>
                    <path
                      data-name='Rectangle 4593'
                      fill='none'
                      d='M0 0h24v24H0z'
                    ></path>
                    <g data-name='Group 28534'>
                      <path
                        data-name='Path 20368'
                        d='M10.125 21a.367.367 0 01-.185-.049.375.375 0 01-.191-.326v-7.576a1.124 1.124 0 00-.378-.841L3.628 7.106A1.878 1.878 0 013 5.7V4.125A1.126 1.126 0 014.125 3h15.75A1.126 1.126 0 0121 4.125V5.7a1.878 1.878 0 01-.629 1.406l-5.743 5.1a1.124 1.124 0 00-.378.84v4.9a1.13 1.13 0 01-.546.965l-3.387 2.035a.366.366 0 01-.192.054zm-6-17.25a.376.376 0 00-.375.375V5.7a1.126 1.126 0 00.376.844l5.744 5.1a1.878 1.878 0 01.63 1.4v6.914l2.819-1.69a.379.379 0 00.182-.322v-4.9a1.877 1.877 0 01.63-1.4l5.743-5.1a1.129 1.129 0 00.376-.846V4.125a.376.376 0 00-.375-.375z'
                        stroke='currentColor'
                        strokeWidth='0.3'
                      ></path>
                    </g>
                  </g>
                </svg>
                Lọc tìm kiếm
              </span>
            </div>
          </div>
          <div className='main-sort'>
            <div className='Sort-week'>
              <span className='Sort-text-week'>Sắp xếp theo : </span>
              <span
                className='display-Sort-week'
                onClick={() => setShowSort((pre) => !pre)}
              >
                {typeSort}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  className='sort-icon'
                  focusable='false'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <g data-name='Group 28796'>
                    <path
                      data-name='Rectangle 4596'
                      fill='none'
                      d='M0 0h24v24H0z'
                    ></path>
                    <g data-name='Group 28778'>
                      <path data-name='Path 20527' d='M7 10l5 5 5-5z'></path>
                    </g>
                  </g>
                </svg>
              </span>
              {/* sort option */}
              {showSort ? (
                <div className='BoxThoiGian'>
                  <div
                    className='overlay'
                    ref={sortRef}
                    onClick={closeSortOption}
                  ></div>
                  <div className='option-lish-sort'>
                    <span className='option-lish-item' onClick={handleTypeSort}>
                      Giá tăng dần
                    </span>
                    <span className='option-lish-item' onClick={handleTypeSort}>
                      Giá giảm dần
                    </span>
                    <span className='option-lish-item' onClick={handleTypeSort}>
                      Giá khởi hành sớm nhất
                    </span>
                    <span className='option-lish-item' onClick={handleTypeSort}>
                      Giá khởi hành muộn nhất
                    </span>
                    <span className='option-lish-item' onClick={handleTypeSort}>
                      Giá hạ cánh sớm nhất
                    </span>
                    <span className='option-lish-item' onClick={handleTypeSort}>
                      Giá hạ cánh muộn nhất
                    </span>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className='SearchByWeek-footer'>
        <div className='noFlight'>
          <div className='noFlight-container'>
            <div className='noFlight-img'>
              <img
                src='https://flight.hahalolo.com/405ac6caa3f629efdc0e6cf3bd0c821b.svg'
                alt=''
              />
            </div>
            <div className='noFlight-content'>
              <h4>Không tìm thấy chuyến bay!</h4>
              <p>
                Không tìm thấy kết quả tìm kiếm các chuyến bay ngày {valueDay}.
              </p>
              <span>Thay đổi tìm kiếm</span>
            </div>
          </div>
        </div>
        {/* hộp vé is here */}
        <div className='ticketBox-container'>
          <div className='ticketBox-item'></div>
          <div className='chooseTicket'>
            <div className='chooseTicket-price'>
              <span className='sum-money'>Tổng Tiền : </span>
              <span className='color-red'>0đ</span>
              <span className='note'>(Giá đã bao gồm thuế và phí)</span>
            </div>
            <div className='chooseTicket-put'>
              <span className='content'>
                Đã chọn <span className='quanlity'> 0/1 </span> Chuyến bay
              </span>
              <span className='btn-put active'>Đặt vé</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchByWeek;
