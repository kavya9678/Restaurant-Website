!(function (e) {
  var t = {};
  function n(d) {
    if (t[d]) return t[d].exports;
    var a = (t[d] = { i: d, l: !1, exports: {} });
    return e[d].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, d) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: d });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var d = Object.create(null);
      if (
        (n.r(d),
        Object.defineProperty(d, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var a in e)
          n.d(
            d,
            a,
            function (t) {
              return e[t];
            }.bind(null, a)
          );
      return d;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 0));
})([
  function (e, t, n) {
    "use strict";
    n.r(t);
    const d = (() => {
        const e = document.querySelector("#page-container");
        return {
          render: () => {
            (() => {
              let t = e.lastChild;
              for (; t; ) e.removeChild(t), (t = e.lastChild);
            })();
            const t = document.createElement("nav");
            t.setAttribute("id", "main-nav");
            const n = document.createElement("ul"),
              d = document.createElement("img");
            d.setAttribute("src", "./images/burger-logo-bg.jpg"),
              d.setAttribute("id", "logo");
            const s = document.createElement("li");
            s.setAttribute("id", "logo-li"),
              s.appendChild(d),
              s.addEventListener("click", c.render);
            const o = document.createElement("li");
            (o.textContent = "Home"),
              o.setAttribute("id", "home-li"),
              o.addEventListener("click", c.render);
            const r = document.createElement("li");
            (r.textContent = "Menu"),
              r.setAttribute("id", "menu-li"),
              r.addEventListener("click", function () {
                i.render("burgers", !0);
              });
            const l = document.createElement("li");
            (l.textContent = "About"),
              l.setAttribute("id", "about-li"),
              l.addEventListener("click", a.render);
            const m = document.createElement("li");
            (m.textContent = "Contact"),
              m.setAttribute("id", "contact-li"),
              n.appendChild(s),
              n.appendChild(o),
              n.appendChild(r),
              n.appendChild(l),
              n.appendChild(m);
            const p = document.createElement("div");
            p.setAttribute("id", "social");
            const u = document.createElement("a");
            u.setAttribute(
              "href",
              "https://www.instagram.com/explore/tags/food/?hl=en"
            ),
              u.setAttribute("target", "_blank");
            const h = document.createElement("img");
            h.setAttribute("src", "./images/instagraM.svg"),
              h.setAttribute("alt", "instagram logo"),
              u.appendChild(h);
            const C = document.createElement("a");
            C.setAttribute("href", "https://www.facebook.com/"),
              C.setAttribute("target", "_blank");
            const E = document.createElement("img");
            E.setAttribute("src", "./images/facebook.svg"),
              E.setAttribute("alt", "facebook logo"),
              C.appendChild(E);
            const b = document.createElement("a");
            b.setAttribute("href", "tel:555.236.515");
            const g = document.createElement("button");
            g.setAttribute("id", "numberMenu"),
              (g.textContent = "555.236.515"),
              b.appendChild(g),
              p.appendChild(u),
              p.appendChild(C),
              p.appendChild(b),
              t.appendChild(n),
              t.appendChild(p);
            const A = document.createElement("div");
            A.setAttribute("id", "contact-content");
            const v = document.createElement("div");
            v.setAttribute("id", "contact-info");
            const L = document.createElement("h2");
            L.textContent = "CONTACT";
            const f = document.createElement("div");
            f.classList.add("contact-item");
            const x = document.createElement("span");
            x.classList.add("icon");
            const k = document.createElement("img");
            k.setAttribute("src", "./images/contact-page/pin.svg"),
              k.setAttribute("alt", "pin icon"),
              x.appendChild(k);
            const y = document.createElement("p");
            (y.innerHTML =
              "1510 South Main Street<br>\n         New Delhi,110051<br>\n         Located in connaught place"),
              f.appendChild(x),
              f.appendChild(y);
            const S = document.createElement("div");
            S.classList.add("contact-item");
            const w = document.createElement("span");
            w.classList.add("icon");
            const B = document.createElement("img");
            B.setAttribute("src", "./images/contact-page/clock2.svg"),
              B.setAttribute("alt", "clock icon"),
              w.appendChild(B);
            const M = document.createElement("p");
            (M.innerHTML =
              '<strong class="name">Sun-Thurs:</strong> 12pm-9pm <br>\n         <strong class="name">Fri-Sat:</strong> 12pm-11pm <br>'),
              S.appendChild(w),
              S.appendChild(M);
            const T = document.createElement("div");
            T.classList.add("contact-item");
            const H = document.createElement("a");
            H.setAttribute("href", "tel:555.236.515");
            const j = document.createElement("span");
            j.classList.add("icon");
            const R = document.createElement("img");
            R.setAttribute("src", "./images/contact-page/phone.svg"),
              R.setAttribute("alt", "phone icon"),
              j.appendChild(R);
            const P = document.createElement("p");
            P.setAttribute("id", "numberFont"),
              (P.textContent = "555.236.515"),
              H.appendChild(P),
              T.appendChild(j),
              T.appendChild(H);
            const G = document.createElement("div");
            G.classList.add("contact-item");
            const I = document.createElement("span");
            I.classList.add("icon");
            const $ = document.createElement("img");
            $.setAttribute("src", "./images/contact-page/mail.svg"),
              $.setAttribute("alt", "message icon"),
              I.appendChild($);
            const F = document.createElement("h3");
            (F.textContent = "MESSAGE US"), G.appendChild(I), G.appendChild(F);
            const N = document.createElement("div");
            N.setAttribute("id", "email-sender");
            const O = document.createElement("form");
            O.setAttribute("action", "mailto:stefankaraferovic@gmail.com"),
              O.setAttribute("autocomplete", "off"),
              O.setAttribute("method", "post"),
              O.setAttribute("enctype", "text/plain");
            const D = document.createElement("input");
            D.setAttribute("type", "text"),
              D.setAttribute("id", "name"),
              D.setAttribute("size", "25"),
              D.setAttribute("placeholder", "Name");
            const _ = document.createElement("input");
            _.setAttribute("type", "text"),
              _.setAttribute("id", "name"),
              _.setAttribute("size", "25"),
              _.setAttribute("placeholder", "Phone Number");
            const K = document.createElement("input");
            K.setAttribute("type", "text"),
              K.setAttribute("id", "name"),
              K.setAttribute("size", "25"),
              K.setAttribute("placeholder", "Email Address");
            const Y = document.createElement("textarea");
            Y.setAttribute("name", "message"),
              Y.setAttribute("id", "message"),
              Y.setAttribute("cols", "25"),
              Y.setAttribute("rows", "4"),
              Y.setAttribute("placeholder", "Message"),
              Y.setAttribute("resize", "none");
            const U = document.createElement("input");
            U.setAttribute("type", "submit"),
              U.setAttribute("value", "Send message"),
              U.setAttribute("id", "send"),
              O.appendChild(D),
              O.appendChild(_),
              O.appendChild(K),
              O.appendChild(Y),
              O.appendChild(U),
              N.appendChild(O),
              v.appendChild(L),
              v.appendChild(f),
              v.appendChild(S),
              v.appendChild(T),
              v.appendChild(G),
              v.appendChild(N);
            const W = document.createElement("div");
            W.setAttribute("id", "contact-maps");
            const q = document.createElement("div");
            q.setAttribute("id", "map"),
              (q.innerHTML =
                '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.114827184252!2d77.2065321812452!3d28.628901718705706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001%2C%20India!5e0!3m2!1sen!2srs!4v1607252160623!5m2!1sen!2srs" width="800" height="600" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'),
              W.appendChild(q),
              A.appendChild(v),
              A.appendChild(W);
            const V = document.createElement("footer"),
              z = document.createElement("div");
            (z.innerHTML =
              'Copyright &copy;\n        <script>document.write(new Date().getFullYear());</script>&nbsp;&nbsp;Created by Kavya Singh\n        | <i class="fab fa-github"></i> <a href="https://github.com/kavya9678" target="_blank">kavya9678</a>'),
              V.appendChild(z),
              e.appendChild(t),
              e.appendChild(A),
              e.appendChild(V),
              m.classList.add("active");
          },
        };
      })(),
      a = (() => {
        const e = document.querySelector("#page-container");
        function t() {
          this.setAttribute("src", "./images/about-page/burger-hover-img.png"),
            (this.style.transform = "scale(1.2)");
        }
        function n() {
          this.setAttribute("src", "./images/burger-logo-bg.jpg"),
            (this.style.transform = "scale(1)");
        }
        function a() {
          this.parentNode.removeChild(this);
        }
        function s() {
          const t = document.createElement("img");
          t.setAttribute("src", this.getAttribute("src")),
            "meal" === this.getAttribute("id") &&
              ((t.style.width = "42rem"), (t.style.height = "55rem")),
            (t.style.transform = "scale(0.5)");
          const n = document.createElement("div");
          n.classList.add("show"),
            n.appendChild(t),
            n.addEventListener("click", a),
            e.appendChild(n);
        }
        return {
          render: (a) => {
            (() => {
              let t = e.lastChild;
              for (; t; ) e.removeChild(t), (t = e.lastChild);
            })();
            const o = document.createElement("nav");
            o.setAttribute("id", "main-nav");
            const r = document.createElement("ul"),
              l = document.createElement("img");
            l.setAttribute("src", "./images/burger-logo-bg.jpg"),
              l.setAttribute("id", "logo");
            const m = document.createElement("li");
            m.setAttribute("id", "logo-li"),
              m.appendChild(l),
              m.addEventListener("click", c.render);
            const p = document.createElement("li");
            (p.textContent = "Home"),
              p.setAttribute("id", "home-li"),
              p.addEventListener("click", c.render);
            const u = document.createElement("li");
            (u.textContent = "Menu"),
              u.setAttribute("id", "menu-li"),
              u.addEventListener("click", function () {
                i.render("burgers", !0);
              });
            const h = document.createElement("li");
            (h.textContent = "About"), h.setAttribute("id", "about-li");
            const C = document.createElement("li");
            (C.textContent = "Contact"),
              C.setAttribute("id", "contact-li"),
              C.addEventListener("click", d.render),
              r.appendChild(m),
              r.appendChild(p),
              r.appendChild(u),
              r.appendChild(h),
              r.appendChild(C);
            const E = document.createElement("div");
            E.setAttribute("id", "social");
            const b = document.createElement("a");
            b.setAttribute(
              "href",
              "https://www.instagram.com/explore/tags/food/?hl=en"
            ),
              b.setAttribute("target", "_blank");
            const g = document.createElement("img");
            g.setAttribute("src", "./images/instagraM.svg"),
              g.setAttribute("alt", "instagram logo"),
              b.appendChild(g);
            const A = document.createElement("a");
            A.setAttribute("href", "https://www.facebook.com/"),
              A.setAttribute("target", "_blank");
            const v = document.createElement("img");
            v.setAttribute("src", "./images/facebook.svg"),
              v.setAttribute("alt", "facebook logo"),
              A.appendChild(v);
            const L = document.createElement("a");
            L.setAttribute("href", "tel:555.236.515");
            const f = document.createElement("button");
            f.setAttribute("id", "numberMenu"),
              (f.textContent = "555.236.515"),
              L.appendChild(f),
              E.appendChild(b),
              E.appendChild(A),
              E.appendChild(L),
              o.appendChild(r),
              o.appendChild(E);
            const x = document.createElement("div");
            x.setAttribute("id", "about-content"),
              a && (x.style.animation = "insertItem 0.5s linear  1  forwards");
            const k = document.createElement("div");
            k.setAttribute("id", "about-img");
            const y = document.createElement("img");
            y.setAttribute("src", "./images/about-page/top3.png"),
              y.setAttribute("id", "kitchen"),
              y.setAttribute("alt", "burger making in kitchen");
            const S = document.createElement("img");
            S.setAttribute("src", "./images/about-page/burger8.jpg"),
              S.setAttribute("id", "meal"),
              S.setAttribute("alt", "burger image"),
              k.appendChild(y),
              k.appendChild(S);
            const w = document.createElement("div");
            w.setAttribute("id", "about-text");
            const B = document.createElement("div");
            B.setAttribute("id", "header");
            const M = document.createElement("h2");
            M.textContent = "ABOUT US";
            const T = document.createElement("div");
            T.setAttribute("id", "logo");
            const H = document.createElement("img");
            H.setAttribute("src", "./images/burger-logo-bg.jpg"),
              H.setAttribute("alt", "restauran logo"),
              H.addEventListener("mouseover", t),
              H.addEventListener("mouseleave", n),
              T.appendChild(H),
              B.appendChild(M),
              B.appendChild(T);
            const j = document.createElement("p");
            j.innerHTML =
              'When we opened <strong class="name">Burger cafe</strong> in June 2017, our vision was to create an unassuming watering hole for the locals. In a town with endless options for bars and lounges, we found it challenging to find a friendly bar with a solid craft beer list, good food, and non-gaming/non-smoking. We wanted to provide friends and neighbors alike with the original form of social networking; a fun easy going bar, and a cold pint. Our staunch belief in providing exceptional quality products with friendly service in a clean and welcoming setting has helped us earn the reputation among the locals as one of the best hidden gems in New Delhi.';
            const R = document.createElement("p");
            (R.innerHTML =
              '<strong class="name">Burger cafe</strong> is a culmination of giving our best to the community through our food, service, and atmosphere. Tucked inside one of the premier breweries this collaboration project allows us another opportunity to create a memorable setting for you to catch up with friends and make new ones over tasty bites and a refreshing beer.'),
              w.appendChild(B),
              w.appendChild(j),
              w.appendChild(R),
              x.appendChild(w),
              x.appendChild(k);
            const P = document.createElement("footer"),
              G = document.createElement("div");
            (G.innerHTML =
              'Copyright &copy;\n        <script>document.write(new Date().getFullYear());</script>&nbsp;&nbsp;Created by Kavya Singh\n        | <i class="fab fa-github"></i> <a href="https://github.com/kavya9678" target="_blank">kavya9678</a>'),
              P.appendChild(G),
              e.appendChild(o),
              e.appendChild(x),
              e.appendChild(P),
              h.classList.add("active");
            const I = document.querySelector("#kitchen"),
              $ = document.querySelector("#meal");
            I.addEventListener("click", s), $.addEventListener("click", s);
          },
        };
      })(),
      i = (() => {
        const e = document.querySelector("#page-container"),
          t = (s, r) => {
            (() => {
              let t = e.lastChild;
              for (; t; ) e.removeChild(t), (t = e.lastChild);
            })();
            const l = document.createElement("nav");
            l.setAttribute("id", "main-nav");
            const m = document.createElement("ul"),
              p = document.createElement("img");
            p.setAttribute("src", "./images/burger-logo-bg.jpg"),
              p.setAttribute("id", "logo");
            const u = document.createElement("li");
            u.setAttribute("id", "logo-li"),
              u.appendChild(p),
              u.addEventListener("click", c.render);
            const h = document.createElement("li");
            (h.textContent = "Home"),
              h.setAttribute("id", "home-li"),
              h.addEventListener("click", c.render);
            const C = document.createElement("li");
            (C.textContent = "Menu"), C.setAttribute("id", "menu-li");
            const E = document.createElement("li");
            (E.textContent = "About"),
              E.setAttribute("id", "about-li"),
              E.addEventListener("click", a.render);
            const b = document.createElement("li");
            (b.textContent = "Contact"),
              b.setAttribute("id", "contact-li"),
              b.addEventListener("click", d.render),
              m.appendChild(u),
              m.appendChild(h),
              m.appendChild(C),
              m.appendChild(E),
              m.appendChild(b);
            const g = document.createElement("div");
            g.setAttribute("id", "social");
            const A = document.createElement("a");
            A.setAttribute(
              "href",
              "https://www.instagram.com/explore/tags/food/?hl=en"
            ),
              A.setAttribute("target", "_blank");
            const v = document.createElement("img");
            v.setAttribute("src", "./images/instagraM.svg"),
              v.setAttribute("alt", "instagram logo"),
              A.appendChild(v);
            const L = document.createElement("a");
            L.setAttribute("href", "https://www.facebook.com/"),
              L.setAttribute("target", "_blank");
            const f = document.createElement("img");
            f.setAttribute("src", "./images/facebook.svg"),
              f.setAttribute("alt", "facebook logo"),
              L.appendChild(f);
            const x = document.createElement("a");
            x.setAttribute("href", "tel:555.236.515");
            const k = document.createElement("button");
            k.setAttribute("id", "numberMenu"),
              (k.textContent = "555.236.515"),
              x.appendChild(k),
              g.appendChild(A),
              g.appendChild(L),
              g.appendChild(x),
              l.appendChild(m),
              l.appendChild(g);
            const y = document.createElement("div");
            y.setAttribute("id", "menu-content"),
              r && (y.style.animation = "insertItem 0.6s linear  1  forwards");
            const S = document.createElement("div");
            S.setAttribute("id", "menu");
            const w = document.createElement("ul"),
              B = document.createElement("li");
            B.setAttribute("id", "burgers"),
              (B.textContent = "BURGERS & SANDWICHES"),
              B.addEventListener("click", function () {
                t("burgers");
              });
            const M = document.createElement("li");
            M.setAttribute("id", "snacks"),
              (M.textContent = "SNACKS"),
              M.addEventListener("click", function () {
                t("snacks");
              });
            const T = document.createElement("li");
            (T.textContent = "SALADS"),
              T.setAttribute("id", "salads"),
              T.addEventListener("click", function () {
                t("salads");
              });
            const H = document.createElement("li");
            if (
              ((H.textContent = "MINI ME"),
              H.setAttribute("id", "minies"),
              H.addEventListener("click", function () {
                t("minies");
              }),
              w.appendChild(B),
              w.appendChild(M),
              w.appendChild(T),
              w.appendChild(H),
              S.appendChild(w),
              "burgers" === s)
            ) {
              B.classList.add("activeTab");
              const e = document.createElement("div");
              e.setAttribute("id", "menu-items");
              const t = document.createElement("div");
              t.classList.add("menu-item");
              const n = document.createElement("div");
              n.classList.add("menu-item-header");
              const d = document.createElement("h2");
              d.classList.add("name"), (d.textContent = "CRAFT BURGER");
              const a = document.createElement("span");
              a.classList.add("price"),
                (a.textContent = "Rs 540"),
                n.appendChild(d),
                n.appendChild(a);
              const i = document.createElement("div");
              i.classList.add("img-div");
              const c = document.createElement("img");
              c.setAttribute("src", "./images/burgers/burger1.jpg"),
                i.appendChild(c);
              const s = document.createElement("div");
              s.classList.add("menu-item-description");
              const o = document.createElement("p");
              (o.textContent =
                "Lettuce, Tomato, Pickles, American, Caramelized Onion, Fry Sauce"),
                s.appendChild(o),
                s.appendChild(i),
                t.appendChild(n),
                t.appendChild(s);
              const r = document.createElement("div");
              r.classList.add("menu-item");
              const l = document.createElement("div");
              l.classList.add("menu-item-header");
              const m = document.createElement("h2");
              m.classList.add("name"),
                (m.textContent = "FRIED CHICKEN SANDWICH");
              const p = document.createElement("span");
              p.classList.add("price"),
                (p.textContent = "Rs 600"),
                l.appendChild(m),
                l.appendChild(p);
              const u = document.createElement("img");
              u.setAttribute("src", "./images/burgers/burger2.jpg");
              const h = document.createElement("div");
              h.classList.add("menu-item-description");
              const C = document.createElement("p");
              (C.innerHTML =
                "Lettuce, Tomato, Pickles, Kewpie Mayo <br> Choose from: Nashville Hot Spice Blend, Honey Garlic BBQ, or Buffalo"),
                h.appendChild(C),
                h.appendChild(u),
                r.appendChild(l),
                r.appendChild(h);
              const E = document.createElement("div");
              E.classList.add("menu-item");
              const b = document.createElement("div");
              b.classList.add("menu-item-header");
              const g = document.createElement("h2");
              g.classList.add("name"), (g.textContent = "PORK BELLY BURGER");
              const A = document.createElement("span");
              A.classList.add("price"),
                (A.textContent = "Rs 660"),
                b.appendChild(g),
                b.appendChild(A);
              const v = document.createElement("img");
              v.setAttribute("src", "./images/burgers/burger3.jpg");
              const L = document.createElement("div");
              L.classList.add("menu-item-description");
              const f = document.createElement("p");
              (f.textContent =
                "Hoisin Glazed Pork Belly and Burger Patty, Gochujang Aioli, Fried Shallots, Cabbage, Cilantro"),
                L.appendChild(f),
                L.appendChild(v),
                E.appendChild(b),
                E.appendChild(L);
              const x = document.createElement("div");
              x.classList.add("menu-item");
              const k = document.createElement("div");
              k.classList.add("menu-item-header");
              const w = document.createElement("h2");
              w.classList.add("name"), (w.textContent = "VEGAN CRAFT BURGER");
              const M = document.createElement("span");
              M.classList.add("price"),
                (M.textContent = "Rs 660"),
                k.appendChild(w),
                k.appendChild(M);
              const T = document.createElement("img");
              T.setAttribute("src", "./images/burgers/burger4.jpg");
              const H = document.createElement("div");
              H.classList.add("menu-item-description");
              const j = document.createElement("p");
              (j.textContent = "Lettuce, Tomatoes, Pickle, Cheddar, Fry Sauce"),
                H.appendChild(j),
                H.appendChild(T),
                x.appendChild(k),
                x.appendChild(H);
              const R = document.createElement("div");
              R.classList.add("menu-item");
              const P = document.createElement("div");
              P.classList.add("menu-item-header");
              const G = document.createElement("h2");
              G.classList.add("name"),
                (G.textContent = "BEER BATTERED FISH PO'BOY");
              const I = document.createElement("span");
              I.classList.add("price"),
                (I.textContent = "Rs 600"),
                P.appendChild(G),
                P.appendChild(I);
              const $ = document.createElement("img");
              $.setAttribute("src", "./images/burgers/burger5.jpg");
              const F = document.createElement("div");
              F.classList.add("menu-item-description");
              const N = document.createElement("p");
              (N.textContent =
                "Beer Battered Cod, Lettuce, Tomato, Cajun Remoulade, Pickles"),
                F.appendChild(N),
                F.appendChild($),
                R.appendChild(P),
                R.appendChild(F);
              const O = document.createElement("div");
              O.classList.add("menu-item");
              const D = document.createElement("div");
              D.classList.add("menu-item-header");
              const _ = document.createElement("h2");
              _.classList.add("name"), (_.textContent = "BBQ CHICKEN BANH MI");
              const K = document.createElement("span");
              K.classList.add("price"),
                (K.textContent = "Rs 540"),
                D.appendChild(_),
                D.appendChild(K);
              const Y = document.createElement("img");
              Y.setAttribute("src", "./images/burgers/burger6.jpg");
              const U = document.createElement("div");
              U.classList.add("menu-item-description");
              const W = document.createElement("p");
              (W.textContent =
                "Ginger Garlic Marinated Chicken Thigh, Cucumber, Pickled Daikon, Pickled Carrots, Cilantro, Fresh Jalapeno, Kewpie Mayo"),
                U.appendChild(W),
                U.appendChild(Y),
                O.appendChild(D),
                O.appendChild(U);
              const q = document.createElement("div");
              q.classList.add("menu-item");
              const V = document.createElement("div");
              V.classList.add("menu-item-header");
              const z = document.createElement("h2");
              z.classList.add("name"), (z.textContent = "BBQ STEAK BANH MI");
              const J = document.createElement("span");
              J.classList.add("price"),
                (J.textContent = "Rs 600"),
                V.appendChild(z),
                V.appendChild(J);
              const Q = document.createElement("img");
              Q.setAttribute("src", "./images/burgers/burger7.jpg");
              const X = document.createElement("div");
              X.classList.add("menu-item-description");
              const Z = document.createElement("p");
              (Z.textContent =
                "Shallot Peppered Sirloin, Cucumber, Pickled Daikon, Pickled Carrots, Cilantro, Fresh Jalapeno, Kewpie Mayo"),
                X.appendChild(Z),
                X.appendChild(Q),
                q.appendChild(V),
                q.appendChild(X);
              const ee = document.createElement("div");
              ee.classList.add("menu-item");
              const te = document.createElement("div");
              te.classList.add("menu-item-header");
              const ne = document.createElement("h2");
              ne.classList.add("name"), (ne.textContent = "PORK BELLY BANH MI");
              const de = document.createElement("span");
              de.classList.add("price"),
                (de.textContent = "Rs 660"),
                te.appendChild(ne),
                te.appendChild(de);
              const ae = document.createElement("img");
              ae.setAttribute("src", "./images/burgers/burger8.jpg");
              const ie = document.createElement("div");
              ie.classList.add("menu-item-description");
              const ce = document.createElement("p");
              (ce.textContent =
                "Hoisin Sambal Glazed Belly, Cucumber, Pickled Daikon, Pickled Carrots, Cilantro, Fresh Jalapeno, Kewpie Mayo"),
                ie.appendChild(ce),
                ie.appendChild(ae),
                ee.appendChild(te),
                ee.appendChild(ie),
                e.appendChild(t),
                e.appendChild(r),
                e.appendChild(E),
                e.appendChild(x),
                e.appendChild(R),
                e.appendChild(O),
                e.appendChild(q),
                e.appendChild(ee),
                y.appendChild(S),
                y.appendChild(e);
            }
            if ("snacks" === s) {
              M.classList.add("activeTab");
              const e = document.createElement("div");
              e.setAttribute("id", "menu-items");
              const t = document.createElement("div");
              t.classList.add("menu-item");
              const n = document.createElement("div");
              n.classList.add("menu-item-header");
              const d = document.createElement("h2");
              d.classList.add("name"), (d.textContent = "FRENCH FRIES");
              const a = document.createElement("span");
              a.classList.add("price"),
                (a.textContent = "Rs 300"),
                n.appendChild(d),
                n.appendChild(a);
              const i = document.createElement("img");
              i.setAttribute("src", "./images/snacks/snack1.jpg");
              const c = document.createElement("div");
              c.classList.add("menu-item-description");
              const s = document.createElement("p");
              (s.textContent = "Served with Fry Sauce"),
                c.appendChild(s),
                c.appendChild(i),
                t.appendChild(n),
                t.appendChild(c);
              const o = document.createElement("div");
              o.classList.add("menu-item");
              const r = document.createElement("div");
              r.classList.add("menu-item-header");
              const l = document.createElement("h2");
              l.classList.add("name"),
                (l.textContent = "BEER BRINED JUMBO WINGS (6 OR 12)");
              const m = document.createElement("span");
              m.classList.add("price"),
                (m.textContent = "Rs 450/Rs 999"),
                r.appendChild(l),
                r.appendChild(m);
              const p = document.createElement("img");
              p.setAttribute("src", "./images/snacks/snack2.jpg");
              const u = document.createElement("div");
              u.classList.add("menu-item-description");
              const h = document.createElement("p");
              (h.innerHTML =
                "Choose from: Buffalo, Honey Garlic BBQ, Hoisin Sambal, or Gochujang Honey. Served with Celery & Buttermilk Ranch or Blue Cheese"),
                u.appendChild(h),
                u.appendChild(p),
                o.appendChild(r),
                o.appendChild(u);
              const C = document.createElement("div");
              C.classList.add("menu-item");
              const E = document.createElement("div");
              E.classList.add("menu-item-header");
              const b = document.createElement("h2");
              b.classList.add("name"), (b.textContent = "CRISPY CAULIFLOWER");
              const g = document.createElement("span");
              g.classList.add("price"),
                (g.textContent = "Rs 590"),
                E.appendChild(b),
                E.appendChild(g);
              const A = document.createElement("img");
              A.setAttribute("src", "./images/snacks/snack3.jpg");
              const v = document.createElement("div");
              v.classList.add("menu-item-description");
              const L = document.createElement("p");
              (L.textContent =
                "Choose from: Buffalo, Honey Garlic BBQ, Hoisin Sambal, Gochujang Honey, Buttermilk Ranch, or Blue Cheese."),
                v.appendChild(L),
                v.appendChild(A),
                C.appendChild(E),
                C.appendChild(v);
              const f = document.createElement("div");
              f.classList.add("menu-item");
              const x = document.createElement("div");
              x.classList.add("menu-item-header");
              const k = document.createElement("h2");
              k.classList.add("name"), (k.textContent = "ELOTE SALSA & CHIPS");
              const w = document.createElement("span");
              w.classList.add("price"),
                (w.textContent = "Rs 499"),
                x.appendChild(k),
                x.appendChild(w);
              const B = document.createElement("img");
              B.setAttribute("src", "./images/snacks/snack4.jpg");
              const T = document.createElement("div");
              T.classList.add("menu-item-description");
              const H = document.createElement("p");
              (H.textContent =
                "Roasted Sweet Corn, Pico de Gallo, Cilantro Lime Crema, Tajin, Cotija Cheese"),
                T.appendChild(H),
                T.appendChild(B),
                f.appendChild(x),
                f.appendChild(T);
              const j = document.createElement("div");
              j.classList.add("menu-item");
              const R = document.createElement("div");
              R.classList.add("menu-item-header");
              const P = document.createElement("h2");
              P.classList.add("name"), (P.textContent = "BAJA FISH TACOS");
              const G = document.createElement("span");
              G.classList.add("price"),
                (G.textContent = "Rs 499"),
                R.appendChild(P),
                R.appendChild(G);
              const I = document.createElement("img");
              I.setAttribute("src", "./images/snacks/snack5.jpg");
              const $ = document.createElement("div");
              $.classList.add("menu-item-description");
              const F = document.createElement("p");
              (F.textContent =
                "Beer Battered Cod, Cabbage, Pico de Gallo, Guacamole, Cilantro Lime Crema"),
                $.appendChild(F),
                $.appendChild(I),
                j.appendChild(R),
                j.appendChild($);
              const N = document.createElement("div");
              N.classList.add("menu-item");
              const O = document.createElement("div");
              O.classList.add("menu-item-header");
              const D = document.createElement("h2");
              D.classList.add("name"), (D.textContent = "TJ DOG");
              const _ = document.createElement("span");
              _.classList.add("price"),
                (_.textContent = "Rs 540"),
                O.appendChild(D),
                O.appendChild(_);
              const K = document.createElement("img");
              K.setAttribute("src", "./images/snacks/snack6.jpg");
              const Y = document.createElement("div");
              Y.classList.add("menu-item-description");
              const U = document.createElement("p");
              (U.textContent =
                "Bacon Wrapped All Beef Dog, Grilled Fajitas, Cilantro Lime Crema, Cotija Cheese"),
                Y.appendChild(U),
                Y.appendChild(K),
                N.appendChild(O),
                N.appendChild(Y);
              const W = document.createElement("div");
              W.classList.add("menu-item");
              const q = document.createElement("div");
              q.classList.add("menu-item-header");
              const V = document.createElement("h2");
              V.classList.add("name"), (V.textContent = "GARBAGE NACHOS");
              const z = document.createElement("span");
              z.classList.add("price"),
                (z.textContent = "Rs 1200"),
                q.appendChild(V),
                q.appendChild(z);
              const J = document.createElement("img");
              J.setAttribute("src", "./images/snacks/snack7.jpg");
              const Q = document.createElement("div");
              Q.classList.add("menu-item-description");
              const X = document.createElement("p");
              (X.textContent =
                "Pork Belly & Chicken with a House Cheese Blend, Pico De Gallo, Guacamole, Cilantro Lime Crema"),
                Q.appendChild(X),
                Q.appendChild(J),
                W.appendChild(q),
                W.appendChild(Q),
                e.appendChild(t),
                e.appendChild(o),
                e.appendChild(C),
                e.appendChild(f),
                e.appendChild(j),
                e.appendChild(N),
                e.appendChild(W),
                y.appendChild(S),
                y.appendChild(e);
            }
            if ("salads" === s) {
              T.classList.add("activeTab");
              const e = document.createElement("div");
              e.setAttribute("id", "menu-items");
              const t = document.createElement("div");
              t.classList.add("menu-item");
              const n = document.createElement("div");
              n.classList.add("menu-item-header");
              const d = document.createElement("h2");
              d.classList.add("name"), (d.textContent = "MIXED GREENS");
              const a = document.createElement("span");
              a.classList.add("price"),
                (a.textContent = "Rs 509"),
                n.appendChild(d),
                n.appendChild(a);
              const i = document.createElement("img");
              i.setAttribute("src", "./images/salads/salad1.jpg");
              const c = document.createElement("div");
              c.classList.add("menu-item-description");
              const s = document.createElement("p");
              (s.textContent =
                "Carrots, Tomatoes, Cucumber, Croutons & Choice of: Citrus Vinaigrette (V), Ranch, or Blue Cheese Dressing"),
                c.appendChild(s),
                c.appendChild(i),
                t.appendChild(n),
                t.appendChild(c);
              const o = document.createElement("div");
              o.classList.add("menu-item");
              const r = document.createElement("div");
              r.classList.add("menu-item-header");
              const l = document.createElement("h2");
              l.classList.add("name"), (l.textContent = "CRAFT COBB");
              const m = document.createElement("span");
              m.classList.add("price"),
                (m.textContent = "Rs 600"),
                r.appendChild(l),
                r.appendChild(m);
              const p = document.createElement("img");
              p.setAttribute("src", "./images/salads/salad2.jpg");
              const u = document.createElement("div");
              u.classList.add("menu-item-description");
              const h = document.createElement("p");
              (h.innerHTML =
                "Romaine, Carrots, Tomatoes, Cucumber, Egg, Bacon, Blue Cheese"),
                u.appendChild(h),
                u.appendChild(p),
                o.appendChild(r),
                o.appendChild(u);
              const C = document.createElement("div");
              C.classList.add("menu-item");
              const E = document.createElement("div");
              E.classList.add("menu-item-header");
              const b = document.createElement("h2");
              b.classList.add("name"), (b.textContent = "CAESAR");
              const g = document.createElement("span");
              g.classList.add("price"),
                (g.textContent = "Rs 599"),
                E.appendChild(b),
                E.appendChild(g);
              const A = document.createElement("img");
              A.setAttribute("src", "./images/salads/salad3.jpg");
              const v = document.createElement("div");
              v.classList.add("menu-item-description");
              const L = document.createElement("p");
              (L.textContent = "Romaine, Shaved Parmesan, Croutons"),
                v.appendChild(L),
                v.appendChild(A),
                C.appendChild(E),
                C.appendChild(v);
              const f = document.createElement("div");
              f.classList.add("menu-item");
              const x = document.createElement("div");
              x.classList.add("menu-item-header");
              const k = document.createElement("h2");
              k.classList.add("name"),
                (k.textContent = "ADD PROTEIN"),
                x.appendChild(k);
              const w = document.createElement("div");
              w.classList.add("menu-item-description");
              const B = document.createElement("p"),
                M = document.createElement("p"),
                H = document.createElement("p");
              (B.textContent = "Grilled Chipotle Chicken – Rs 300"),
                (M.textContent = "Peppered Sirloin Steak – Rs 450"),
                (H.textContent = "Pork Belly – Rs 500"),
                w.appendChild(B),
                w.appendChild(M),
                w.appendChild(H),
                (B.style.margin = "1rem 0rem 0rem"),
                (M.style.margin = "0rem"),
                (H.style.margin = "0rem"),
                f.appendChild(x),
                f.appendChild(w),
                e.appendChild(t),
                e.appendChild(o),
                e.appendChild(C),
                e.appendChild(f),
                y.appendChild(S),
                y.appendChild(e);
            }
            if ("minies" === s) {
              H.classList.add("activeTab");
              const e = document.createElement("div");
              e.setAttribute("id", "menu-items");
              const t = document.createElement("div");
              t.classList.add("menu-item");
              const n = document.createElement("div");
              n.classList.add("menu-item-header");
              const d = document.createElement("h2");
              d.classList.add("name"), (d.textContent = "MINI BURGER W/ FRIES");
              const a = document.createElement("span");
              a.classList.add("price"),
                (a.textContent = "Rs 550"),
                n.appendChild(d),
                n.appendChild(a);
              const i = document.createElement("img");
              i.setAttribute("src", "./images/minies/mini1.jpg");
              const c = document.createElement("div");
              c.classList.add("menu-item-description");
              const s = document.createElement("p");
              (s.textContent = "Meat, Cheese, Potato Roll"),
                c.appendChild(s),
                c.appendChild(i),
                t.appendChild(n),
                t.appendChild(c);
              const o = document.createElement("div");
              o.classList.add("menu-item");
              const r = document.createElement("div");
              r.classList.add("menu-item-header");
              const l = document.createElement("h2");
              l.classList.add("name"),
                (l.textContent = "GRILLED CHEESE W/ FRIES");
              const m = document.createElement("span");
              m.classList.add("price"),
                (m.textContent = "Rs 599"),
                r.appendChild(l),
                r.appendChild(m);
              const p = document.createElement("img");
              p.setAttribute("src", "./images/minies/mini2.jpg");
              const u = document.createElement("div");
              u.classList.add("menu-item-description");
              const h = document.createElement("p");
              (h.textContent = "American & Cheddar"),
                u.appendChild(h),
                u.appendChild(p),
                o.appendChild(r),
                o.appendChild(u);
              const C = document.createElement("div");
              C.classList.add("menu-item");
              const E = document.createElement("div");
              E.classList.add("menu-item-header");
              const b = document.createElement("h2");
              b.classList.add("name"), (b.textContent = "MAC & CHEESE");
              const g = document.createElement("span");
              g.classList.add("price"),
                (g.textContent = "Rs 480"),
                E.appendChild(b),
                E.appendChild(g);
              const A = document.createElement("img");
              A.setAttribute("src", "./images/minies/mini3.jpg");
              const v = document.createElement("div");
              v.classList.add("menu-item-description");
              const L = document.createElement("p");
              (L.innerHTML = ""),
                v.appendChild(L),
                v.appendChild(A),
                C.appendChild(E),
                C.appendChild(v),
                e.appendChild(t),
                e.appendChild(o),
                e.appendChild(C),
                y.appendChild(S),
                y.appendChild(e);
            }
            const j = document.createElement("footer"),
              R = document.createElement("div");
            (R.innerHTML =
              'Copyright &copy;\n        <script>document.write(new Date().getFullYear());</script>&nbsp;&nbsp;Created by Kavya Singh\n        | <i class="fab fa-github"></i> <a href="https://github.com/kavya9678" target="_blank">kavya9678</a>'),
              j.appendChild(R),
              e.appendChild(l),
              e.appendChild(y),
              e.appendChild(j),
              C.classList.add("active");
            document.querySelectorAll(".menu-item").forEach((e) => {
              e.addEventListener("mousemove", function () {
                !(function (e) {
                  let t = e.offsetWidth,
                    d = e.offsetHeight,
                    a = event.offsetX,
                    c = event.offsetY;
                  this !== event.target &&
                    ((a += event.target.offsetLeft),
                    (c += event.target.offsetTop));
                  (n = Math.round((a / t) * 1e3 - 500)),
                    (i = Math.round((c / d) * 1e3 - 500)),
                    (e.querySelector("img").style.transform = `translateX(${
                      n / 75 + 55
                    }rem) translateY(${i / 75 - 18}rem)`);
                })(e);
              }),
                e.addEventListener("click", o);
            });
          };
        let n, i;
        function s() {
          this.parentNode.removeChild(this);
        }
        function o() {
          let t = this.querySelector("img");
          const n = document.createElement("img");
          n.setAttribute("src", t.getAttribute("src")),
            (n.style.transform = t.style.transform + " scale(0.5)");
          const d = document.createElement("div");
          d.classList.add("show"),
            d.appendChild(n),
            d.addEventListener("click", s),
            e.appendChild(d);
        }
        return { render: t };
      })(),
      c = (() => {
        const e = document.querySelector("#page-container");
        let t = document.createElement("h1");
        const n = document.querySelector("body");
        return (
          n.addEventListener("mousemove", function (e) {
            let d = n.offsetWidth,
              a = n.offsetHeight,
              i = e.offsetX,
              c = e.offsetY;
            this !== e.target &&
              ((i += e.target.offsetLeft), (c += e.target.offsetTop));
            const s = (i / d) * 30 - 15,
              o = (c / a) * 30 - 15;
            t.style.boxShadow = `${s}px ${o}px 2px 5px rgba(0, 0, 0, 0.2)`;
          }),
          {
            render: function (n) {
              (() => {
                let t = e.lastChild;
                for (; t; ) e.removeChild(t), (t = e.lastChild);
              })();
              const c = document.createElement("nav");
              c.setAttribute("id", "main-nav");
              const s = document.createElement("ul"),
                o = document.createElement("img");
              o.setAttribute("src", "./images/burger-logo-bg.jpg"),
                o.setAttribute("id", "logo");
              const r = document.createElement("li");
              r.setAttribute("id", "logo-li"), r.appendChild(o);
              const l = document.createElement("li");
              (l.textContent = "Home"), l.setAttribute("id", "home-li");
              const m = document.createElement("li");
              (m.textContent = "Menu"),
                m.setAttribute("id", "menu-li"),
                m.addEventListener("click", function () {
                  i.render("burgers", !0);
                });
              const p = document.createElement("li");
              (p.textContent = "About"),
                p.setAttribute("id", "about-li"),
                p.addEventListener("click", a.render);
              const u = document.createElement("li");
              (u.textContent = "Contact"),
                u.setAttribute("id", "contact-li"),
                u.addEventListener("click", d.render),
                s.appendChild(r),
                s.appendChild(l),
                s.appendChild(m),
                s.appendChild(p),
                s.appendChild(u);
              const h = document.createElement("div");
              h.setAttribute("id", "social");
              const C = document.createElement("a");
              C.setAttribute(
                "href",
                "https://www.instagram.com/explore/tags/food/?hl=en"
              ),
                C.setAttribute("target", "_blank");
              const E = document.createElement("img");
              E.setAttribute("src", "./images/instagraM.svg"),
                E.setAttribute("alt", "instagram logo"),
                C.appendChild(E);
              const b = document.createElement("a");
              b.setAttribute("href", "https://www.facebook.com/"),
                b.setAttribute("target", "_blank");
              const g = document.createElement("img");
              g.setAttribute("src", "./images/facebook.svg"),
                g.setAttribute("alt", "facebook logo"),
                b.appendChild(g);
              const A = document.createElement("a");
              A.setAttribute("href", "tel:555.236.515");
              const v = document.createElement("button");
              v.setAttribute("id", "numberMenu"),
                (v.textContent = "555.236.515"),
                A.appendChild(v),
                h.appendChild(C),
                h.appendChild(b),
                h.appendChild(A),
                c.appendChild(s),
                c.appendChild(h),
                !0 === n &&
                  (c.style.animation = "navAnimation 1s linear 1 forwards");
              const L = document.createElement("div");
              L.setAttribute("id", "content"),
                t.setAttribute("id", "slogan"),
                (t.textContent = "A TASTY BURGER IS WHAT YOU DESERVE"),
                t.addEventListener("click", function () {
                  i.render("burgers", !0);
                });
              const f = document.createElement("div");
              f.classList.add("contact-item");
              const x = document.createElement("span");
              x.classList.add("icon");
              const k = document.createElement("img");
              k.setAttribute("src", "./images/contact-page/pin.svg"),
                k.setAttribute("alt", "pin icon"),
                x.appendChild(k);
              const y = document.createElement("p");
              (y.innerHTML =
                "1510 South Main Street<br>\n         New Delhi,110051<br>\n         Located in connaught place"),
                f.appendChild(x),
                f.appendChild(y);
              const S = document.createElement("div");
              S.classList.add("contact-item");
              const w = document.createElement("span");
              w.classList.add("icon");
              const B = document.createElement("img");
              B.setAttribute("src", "./images/contact-page/clock2.svg"),
                B.setAttribute("alt", "clock icon"),
                w.appendChild(B);
              const M = document.createElement("p");
              (M.innerHTML =
                '<strong class="name">Sun-Thurs:</strong> 12pm-9pm <br>\n        <strong class="name">Fri-Sat:</strong> 12pm-11pm <br>'),
                S.appendChild(w),
                S.appendChild(M);
              const T = document.createElement("div");
              T.setAttribute("id", "contact-info"),
                T.classList.add("home-info"),
                T.appendChild(f),
                T.appendChild(S),
                L.appendChild(t),
                L.appendChild(T);
              const H = document.createElement("footer"),
                j = document.createElement("div");
              (j.innerHTML =
                'Copyright &copy;\n        <script>document.write(new Date().getFullYear());</script>&nbsp;&nbsp;Created by Kavya Singh\n        | <i class="fab fa-github"></i> <a href="https://github.com/kavya9678" target="_blank">kavya9678</a>'),
                H.appendChild(j),
                e.appendChild(c),
                e.appendChild(L),
                e.appendChild(H),
                l.classList.add("active");
            },
          }
        );
      })();
    window.onload = c.render(!0);
  },
]);
