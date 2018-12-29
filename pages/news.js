import Layout from '../components/Layout.js';

export default () => (
    <Layout>
		{/* <div id="adbanner">
			<div id="ad">
				<a href="#"><p>Advertise Here</p></a>
			</div>
		</div> */}
		<div id="secwrapper">
			<section>
				<article id="featured">
					<a href="#"><img src="../static/colorsAwards2016_2017.jpg" alt=""/></a>
					<img src="../static/featured.png" alt="" id="featuredico"/>
					<h1>Colours' Awards Ceremony 2016 & 2017</h1>
					<p>Annual Colours' Award Ceremony, a major felicitation ceremony to honor the undergraduate sportsmen & sportswomen of the University of Peradeniya who excelled in the sports field, was held in a grand scale on 26th of November, 2018 at University of Peradeniya.</p>
					<a href="#" className="readmore">Read more</a>
				</article>
				<article>
                    <a href="#"><img src="../static/interFacultyBaseball.jpg" alt=""/></a>
					<h1>Inter Faculty Baseball Tournament 2018</h1>
					<p>Inter Faculty Baseball tournament organized by the Pera Baseball team was held on 21.11.2018 at University ground. Faculty of Engineering crowned the champions after defeating Faculty of Arts in a thrilling final match. Faculty of Management and Faculty of Allied Health Sciences won the 3rd and 4th places respectively.</p>
					<a href="#" className="readmore">Read more</a>
				</article>
				<article className="rightcl">
					<a href="#"><img src="../static/openingOfVolleyBallNightCourt.jpg" alt=""/></a>
					<h1>Opening of Volleyball Night Court</h1>
					<p>Opening ceremony of the Night Volleyball court at University of Peradeniya was commenced successfully on 5th of December 2018 with the presence of Deputy Vice-Chancellor.</p>
					<a href="#" className="readmore">Read more</a>
				</article>			
				<article>
					<a href="#"><img src="../static/swimmingIUG.jpg" alt=""/></a>
					<h1>Inter University Games 2018 - Swimming</h1>
					<p>Inter University Games(IUG) Swimming events were held on 6th of October, 2018 at Rajarata University Swimming Pool.</p>
					<a href="#" className="readmore">Read more</a>
				</article>
				<article>
	                <a href="#"><img src="../static/WUC Weightlifting 2014 1.jpg" alt=""/></a>
					<h1>WORLD UNIVERSITY WEIGHTLIFTING CHAMPIONSHIP 2014</h1>
					<p> The World University Weightlifting Championship was held from 5th to 8th December 2014 in Chiang Mai, Thailand. One of our weightlifters, H.D. Ruwan Sandaruwan of Faculty of Engineering participated for this grand event representing the Sri Lanka National University Weightlifting team.</p>
					<a href="#" className="readmore">Read more</a>
				</article>
				{/* <article id="sponsors">
                    <h1>Photos of Recent Events</h1>
					<img src="../static/football.jpg" alt="" /><img src="../static/Cricket.jpg" alt="" /><img src="../static/Athletic.jpg" alt="" />
					<img src="../static/Karate.jpg" alt="" /><img src="../static/Chess.jpg" alt="" /><img src="../static/Rugby.jpg" alt="" />
					<img src="../static/Table Tennis.jpg" alt="" />
				</article> */}
			</section>
		</div>
		<footer>
			<p>Copyright & copy 2018 Pera Sports Management Platform by UOP. All Rights Reserved.</p>
		</footer>

        <style jsx>{`
            img{
                border: none;
                height: auto; 
                width: auto; 
                max-width: 280px; 
                max-height: 300px;
            }

            body{
                font-family: SourceSansProLight, Verdana, Arial, sans-serif;
                font-size: 14px;
            }
            header h1, nav, nav li{
                display: inline-block;
            }
            header{
                background-color: black;
                height: 50px;
                width: 100%;
                position: fixed;
                top: 0;
                right: 0;
                left: 0;
                box-shadow: 0px 0px 10px rgba(0,0,0,.8);
                z-index: 100;
                border-bottom: 0px solid #C10021;
            }
            header h1 a{
                font-family: LeagueGothic, Verdana, Arial, sans-serif;
                color: black;
                text-decoration: none;
                text-transform: uppercase;
                font-weight: normal;
                font-size: 28px;
                position:absolute;
                top:8px;
                left: 35px;
            }
            #version{
                color: black;
                font-size: 10px;
                position: relative;
                top: 12px;
                left: 122px;
            }
            nav{
                position: absolute;
                top: 32.8%;
                left: 12.5%;
            }
            nav li a{
                color: black;
                text-decoration: none;
                font-family: Verdana, Arial, sans-serif;
                font-size: 13px;
                margin-right: 12px;
                padding: 5px;
            }
            nav li a:hover{
                background-color: #383838;
                border-radius: 3px;
            }
            .current{
                background-color: #383838;
                border-radius: 3px;
            }
            #adbanner{
                margin-top: 50px;
                height: 124px;
                background-color: #dbdbdb;
                border-bottom: 1px solid #c3c3c3;
            }
            #ad{
                width: 728px;
                margin: auto;
            }
            #adbanner a{
                display: inline-block;
                border: 1px solid #c3c3c3;
                height: 90px;
                width: 728px;
                margin: 16px auto;
                color: #6b6b6b;
                text-decoration: none;
                font-family: Verdana, Arial, sans-serif;
                font-size: 14px;
                background-color: #d1d1d1;
            }
            #adbanner a:hover{
                border: 1px solid #a7a7a7;
                /*text-decoration: underline;*/
                color: #3f3f3f;
                background-color: #cacaca;
            }
            #adbanner a p{
                text-align: center;
                margin-top: 35px;
            }
            section{
                width: 1000px;
                margin: auto;
            }
            #secwrapper{
                /*background: url('images/bg.gif') fixed;
                background-color: #f47771;*/ 
                padding-top: 20px; 
            }
            article{
                width: 280px;
                // height: 500px;
                margin-right: 40px;
                display: inline-block;
                vertical-align: top;
                border: 1px solid #c8c8c8;
                margin-bottom: 20px;
                padding: 7px;
                border-radius: 3px;
                box-shadow: 0 2px 3px #ccc;
                background-color: white;
                *display:inline;
                zoom:1;
            }
            #sponsors, .rightcl{
                margin-right: 0px;
            }
            .readmore{
                background-color: black;
                padding: 5px 10px;
                color: white;
                text-decoration: none;
                border-radius: 3px;
                display: inline-block;
            }
            .readmore:hover{
                background-color: #383838;
            }
            article p{
                margin-bottom: 7px;
            }
            #photobox img{
                margin: 5px 4px 6px 6.5px;
                border: 1px solid black;
            }
            #sponsors a{
                color: #6b6b6b;
                text-decoration: none;
                font-family: Verdana, Arial, sans-serif;
                font-size: 14px;
                background-color: #d1d1d1;
                width: 125px;
                height: 125px;
                display: inline-block;
                margin: 5px 4px 6px 7px;
                border: 1px solid #c3c3c3; 
            }
            #sponsors a p{
                margin: 50px auto;
                width: 125px;
                text-align: center;
            }
            #sponsors a:hover{
                border: 1px solid #a7a7a7;
                /*text-decoration: underline;*/
                color: #3f3f3f;
                background-color: #cacaca;
            }
            #featured{
                position: relative;
            }
            #featuredico{
                position: absolute;
                top: 0;
                left: 0;
            }

            footer{
                background-color: black;
                height: 28px;
                color: white;
                padding: 7px;
            }
            footer p{
                margin: 5px 0 0 12%;
            }

            .old_ie header h1, .old_ie nav, .old_ie nav li, .old_ie #adbanner a, .old_ie article, .old_ie .readmore, .old_ie #sponsors a {
                display: inline;
                zoom: 1;
            }
        `}    
        </style>
    </Layout>
)