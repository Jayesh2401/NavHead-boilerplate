import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function NavHead() {
  const h1Ref = useRef(null);

  useEffect(() => {
    const thirdDiv = document.querySelector(".third");

    const h1 = h1Ref.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: h1,
        start: "top 50%",
        end: "bottom 10%",
        // markers: true,
        scrub: true,
      },
    });

    tl.to(h1, {
      fontSize: "18px",
    });

    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: h1,
        start: "top 20%",
        end: "bottom 13%",
        // markers: true,
        scrub: true,
      },
    });

    t2.to(".third", {
      width: "100%",
      marginRight: "40px",
      transform: "translateY(59px)",
      scrub: true,
    });

    const t3 = gsap.timeline({
      scrollTrigger: {
        trigger: h1,
        start: "top 10.5%",
        end: "bottom 0%",
        // markers: true,
        scrub: true,
      },
    });

    t3.to(".third", {
      //   top: 0,
      transform: "translateY(0px)",
      opacity: 1,
    });
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "20px",
          width: "100%",
          background: "gray",
          position: "fixed",
          height: "50px",
        }}
      >
        <div>Logo</div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ marginRight: "40px" }}>First</div>
          <div style={{ marginRight: "40px" }}>Second</div>
          <div
            className="third"
            style={{
              width: "0px",
              opacity: 0,
              fontSize: "18px",
              fontWeight: "bold",
              position: "relative",
            }}
          >
            Hello World
          </div>
          <div style={{ marginRight: "40px" }}>Third</div>
          <div>Fourth</div>
        </div>

        <div>Contact</div>
      </nav>
      <section
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#f4923b",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              fontSize: "48px",
              marginLeft: "20px",
            }}
            ref={h1Ref}
          >
            Hello World
          </h1>
        </div>
      </section>
      <section style={{ height: "100vh", background: "#3f5787" }}></section>
    </div>
  );
}

export default NavHead;
