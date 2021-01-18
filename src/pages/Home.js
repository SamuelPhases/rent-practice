import React, { useState, useEffect } from "react";
import "./Home.css";
import Navbar from "../components/Navbar";
import HomeCard from "../components/HomeCard";
import NavbarSearch from "../components/NavbarSearch";

function Home() {
  const [arts, setArts] = useState(true);
  const [outdoor, setOutdoor] = useState(false);
  const [cabins, setCabins] = useState(false);
  const [beach, setBeach] = useState(false);
  const [popular, setPopular] = useState(false);
  const [navChange, setNavChange] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setNavChange(false);
      } else {
        setNavChange(true);
      }
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className="home__header">
      <div className="notification">
        <p>Get the latest on our COVID-19 response</p>
      </div>
      <nav className="nav">{navChange ? <Navbar /> : <NavbarSearch />}</nav>
      <div className="home__banner">
        <img
          src="https://a0.muscache.com/im/pictures/48738093-5bae-4223-9cab-aa1be937305f.jpg?im_w=1200"
          alt=""
        />
        <div className="home__bannerContent">
          <h2>go near</h2>
          <p>Explore unique destinations near you.</p>
          <button className="explore__btn">Explore nearby</button>
        </div>
      </div>
      <div className="home__cardSplit">
        <div className="container  home__cardSplitContainer">
          <HomeCard
            imageUrl="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=320"
            title="Online Enterprises"
            text="Unique activities we can do together, led by a world of hosts."
          />
          <HomeCard
            imageUrl="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=320"
            title="Unique stays"
            text="Spaces that are more than just a place to sleep."
          />
          <HomeCard
            imageUrl="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=320"
            title="Entire homes"
            text="Comfortable private places, with room for friends or family."
          />
        </div>
      </div>
      <div className="online__cardSplit">
        <div className="container">
          <div className="onlineRow1">
            <div>
              <h2>Broadway Online Experiences</h2>
              <p>
                Join live, interactive performances and conversations with
                people from Broadway and beyond. Without leaving home.
              </p>
            </div>
            <button>Explore all</button>
          </div>
          <div className="online__gallery">
            <div className="online__galleryleft">
              <img
                className="online__img"
                src="https://a0.muscache.com/im/pictures/38aeacb5-7e77-4bf6-a813-754605020922.jpg?im_w=480"
                alt=""
              />

              <div className="online__content">
                <h3>Day in the life of a Las Vegas dancer</h3>
              </div>
            </div>
            <div className="online__galleryright">
              <div className="online__galleryrightTop">
                <div>
                  <img
                    className="online__rightImg"
                    src="https://a0.muscache.com/im/pictures/e77da774-9e72-46d6-a7fd-7d159f823046.jpg?im_w=320"
                    alt=""
                  />
                  <div className="online__content">
                    <h3>Share an evening of music and healing</h3>
                  </div>
                </div>
                <div>
                  <img
                    className="online__rightImg"
                    src="https://a0.muscache.com/im/pictures/7f607dbc-c51c-482e-8b67-55ded3e7f864.jpg?im_w=320"
                    alt=""
                  />
                  <div className="online__content">
                    <h3>Night of magic and mind-reading</h3>
                  </div>
                </div>
              </div>
              <div className="online__galleryrightBottom">
                <img
                  className="online__bottomimg"
                  src="https://a0.muscache.com/im/pictures/d88db0e7-ef5b-49c6-ae07-af3525ac252f.jpg?im_w=480"
                  alt=""
                />
                <div className="online__content">
                  <h3>Take part in a live musical</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lighthouse */}
      <div className="lighthouse__split">
        <div className="container  lighthouse__container">
          <div className="lighthouse__left">
            <h2>
              We embrace a world where everyone belongs, and stand with
              #BlackLivesMatter.
            </h2>
            <button>Learn more</button>
          </div>
          <div className="lighthouse__right">
            <p>
              We reject racism or bigotry of any kind. But now is a time for
              action rather than words. So we’d like to share with you, Project
              Lighthouse, a groundbreaking initiative launching in the United
              States to uncover, measure, and overcome discrimination when
              booking or hosting on Airbnb.
            </p>
          </div>
        </div>
      </div>

      {/* Destination */}
      <div className="destination__split">
        <div className="container destination__container">
          <h3>Destinations for future trips</h3>
          <div className="toggle__title">
            <h3
              onClick={() => {
                setArts(true);
                setBeach(false);
                setCabins(false);
                setOutdoor(false);
                setPopular(false);
              }}
            >
              Destinations for arts & culture
            </h3>
            <h3
              onClick={() => {
                setArts(false);
                setBeach(false);
                setCabins(false);
                setOutdoor(true);
                setPopular(false);
              }}
            >
              Destinations for outdoor adventure
            </h3>
            <h3
              onClick={() => {
                setArts(false);
                setBeach(false);
                setCabins(true);
                setOutdoor(false);
                setPopular(false);
              }}
            >
              Mountain cabins
            </h3>
            <h3
              onClick={() => {
                setArts(false);
                setBeach(true);
                setCabins(false);
                setOutdoor(false);
                setPopular(false);
              }}
            >
              Beach destinations
            </h3>
            <h3
              onClick={() => {
                setArts(false);
                setBeach(false);
                setCabins(false);
                setOutdoor(false);
                setPopular(true);
              }}
            >
              Popular destinations
            </h3>
          </div>
          {arts && (
            <div className="toggle__content toggle__arts">
              <div>
                <h4>New York</h4>
                <p>New York</p>
              </div>
              <div>
                <h4>Phoenix</h4>
                <p>Arizona</p>
              </div>
              <div>
                <h4>Atlanta</h4>
                <p>Georgia</p>
              </div>
              <div>
                <h4>Chicago</h4>
                <p>Illinois</p>
              </div>
              <div>
                <h4>New York</h4>
                <p>New York</p>
              </div>
              <div>
                <h4>Phoenix</h4>
                <p>Arizona</p>
              </div>
              <div>
                <h4>Atlanta</h4>
                <p>Georgia</p>
              </div>
              <div>
                <h4>Chicago</h4>
                <p>Illinois</p>
              </div>
              <div>
                <h4>New York</h4>
                <p>New York</p>
              </div>
              <div>
                <h4>Phoenix</h4>
                <p>Arizona</p>
              </div>
              <div>
                <h4>Atlanta</h4>
                <p>Georgia</p>
              </div>
              <div>
                <h4>Chicago</h4>
                <p>Illinois</p>
              </div>
              <div>
                <h4>New York</h4>
                <p>New York</p>
              </div>
              <div>
                <h4>Phoenix</h4>
                <p>Arizona</p>
              </div>
              <div>
                <h4>Atlanta</h4>
                <p>Georgia</p>
              </div>
              <div>
                <h4>Chicago</h4>
                <p>Illinois</p>
              </div>
              <div>
                <h4>New York</h4>
                <p>New York</p>
              </div>
              <div>
                <h4>Phoenix</h4>
                <p>Arizona</p>
              </div>
              <div>
                <h4>Atlanta</h4>
                <p>Georgia</p>
              </div>
              <div>
                <h4>Chicago</h4>
                <p>Illinois</p>
              </div>
              <div>
                <h4>New York</h4>
                <p>New York</p>
              </div>
              <div>
                <h4>Phoenix</h4>
                <p>Arizona</p>
              </div>
              <div>
                <h4>Atlanta</h4>
                <p>Georgia</p>
              </div>
              <div>
                <h4>Chicago</h4>
                <p>Illinois</p>
              </div>
            </div>
          )}
          {outdoor && (
            <div className="toggle__content toggle__outdoor">
              <div>
                <h4>Big Bear Lake</h4>
                <p>California</p>
              </div>
              <div>
                <h4>Ruidoso</h4>
                <p>new mexico</p>
              </div>
              <div>
                <h4>lake powell</h4>
                <p>United states</p>
              </div>
              <div>
                <h4>brason</h4>
                <p>missouri</p>
              </div>
              <div>
                <h4>Big Bear Lake</h4>
                <p>California</p>
              </div>
              <div>
                <h4>Ruidoso</h4>
                <p>new mexico</p>
              </div>
              <div>
                <h4>lake powell</h4>
                <p>United states</p>
              </div>
              <div>
                <h4>brason</h4>
                <p>missouri</p>
              </div>
              <div>
                <h4>Big Bear Lake</h4>
                <p>California</p>
              </div>
              <div>
                <h4>Ruidoso</h4>
                <p>new mexico</p>
              </div>
              <div>
                <h4>lake powell</h4>
                <p>United states</p>
              </div>
              <div>
                <h4>brason</h4>
                <p>missouri</p>
              </div>
            </div>
          )}
          {cabins && (
            <div className="toggle__content toggle__cabins">
              <div>
                <h4>gatlinburg</h4>
                <p>tennessee</p>
              </div>
              <div>
                <h4>pigeon forge</h4>
                <p>tennessee</p>
              </div>
              <div>
                <h4>broken bow</h4>
                <p>oklahoma</p>
              </div>
              <div>
                <h4>helen</h4>
                <p>georgia</p>
              </div>
            </div>
          )}
          {beach && (
            <div className="toggle__content toggle__beach">
              <div>
                <h4>panama city beach</h4>
                <p>florida</p>
              </div>
              <div>
                <h4>myrtle beach</h4>
                <p>south carolina</p>
              </div>
              <div>
                <h4>ocean city</h4>
                <p>maryland</p>
              </div>
              <div>
                <h4>siesta key</h4>
                <p>florida</p>
              </div>
              <div>
                <h4>panama city beach</h4>
                <p>florida</p>
              </div>
              <div>
                <h4>myrtle beach</h4>
                <p>south carolina</p>
              </div>
              <div>
                <h4>ocean city</h4>
                <p>maryland</p>
              </div>
              <div>
                <h4>siesta key</h4>
                <p>florida</p>
              </div>
              <div>
                <h4>panama city beach</h4>
                <p>florida</p>
              </div>
              <div>
                <h4>myrtle beach</h4>
                <p>south carolina</p>
              </div>
              <div>
                <h4>ocean city</h4>
                <p>maryland</p>
              </div>
              <div>
                <h4>siesta key</h4>
                <p>florida</p>
              </div>
            </div>
          )}
          {popular && (
            <div className="toggle__content toggle__popular">
              <div>
                <h4>orlando</h4>
                <p>florida</p>
              </div>
              <div>
                <h4>las vegas</h4>
                <p>nevada</p>
              </div>
              <div>
                <h4>atlantic city</h4>
                <p>new jersey</p>
              </div>
              <div>
                <h4>dubai</h4>
                <p>United arab emirates</p>
              </div>
              <div>
                <h4>orlando</h4>
                <p>florida</p>
              </div>
              <div>
                <h4>las vegas</h4>
                <p>nevada</p>
              </div>
              <div>
                <h4>atlantic city</h4>
                <p>new jersey</p>
              </div>
              <div>
                <h4>dubai</h4>
                <p>United arab emirates</p>
              </div>
              <div>
                <h4>orlando</h4>
                <p>florida</p>
              </div>
              <div>
                <h4>las vegas</h4>
                <p>nevada</p>
              </div>
              <div>
                <h4>atlantic city</h4>
                <p>new jersey</p>
              </div>
              <div>
                <h4>dubai</h4>
                <p>United arab emirates</p>
              </div>
              <div>
                <h4>orlando</h4>
                <p>florida</p>
              </div>
              <div>
                <h4>las vegas</h4>
                <p>nevada</p>
              </div>
              <div>
                <h4>atlantic city</h4>
                <p>new jersey</p>
              </div>
              <div>
                <h4>dubai</h4>
                <p>United arab emirates</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
