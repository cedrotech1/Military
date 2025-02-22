--
-- PostgreSQL database dump
--

-- Dumped from database version 17.2
-- Dumped by pg_dump version 17.2

-- Started on 2025-02-22 16:28:33

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 868 (class 1247 OID 57556)
-- Name: enum_Users_gender; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."enum_Users_gender" AS ENUM (
    'Male',
    'Female',
    'Other'
);


ALTER TYPE public."enum_Users_gender" OWNER TO postgres;

--
-- TOC entry 865 (class 1247 OID 57459)
-- Name: enum_users_gender; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum_users_gender AS ENUM (
    'Male',
    'Female',
    'Other'
);


ALTER TYPE public.enum_users_gender OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 231 (class 1259 OID 131163)
-- Name: Appointments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Appointments" (
    id integer NOT NULL,
    "missionID" integer NOT NULL,
    "userID" integer NOT NULL,
    status character varying(255),
    "assignedBY" integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Appointments" OWNER TO postgres;

--
-- TOC entry 230 (class 1259 OID 131162)
-- Name: Appointments_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Appointments_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Appointments_id_seq" OWNER TO postgres;

--
-- TOC entry 5003 (class 0 OID 0)
-- Dependencies: 230
-- Name: Appointments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Appointments_id_seq" OWNED BY public."Appointments".id;


--
-- TOC entry 221 (class 1259 OID 131085)
-- Name: Departments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Departments" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    description text,
    "readerId" integer,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public."Departments" OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 131084)
-- Name: Departments_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Departments_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Departments_id_seq" OWNER TO postgres;

--
-- TOC entry 5004 (class 0 OID 0)
-- Dependencies: 220
-- Name: Departments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Departments_id_seq" OWNED BY public."Departments".id;


--
-- TOC entry 225 (class 1259 OID 131118)
-- Name: Missions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Missions" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    location character varying(255),
    start_date timestamp with time zone,
    end_date timestamp with time zone,
    description character varying(255),
    status character varying(255),
    "CountryID" integer,
    "createdBY" integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Missions" OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 131117)
-- Name: Missions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Missions_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Missions_id_seq" OWNER TO postgres;

--
-- TOC entry 5005 (class 0 OID 0)
-- Dependencies: 224
-- Name: Missions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Missions_id_seq" OWNED BY public."Missions".id;


--
-- TOC entry 233 (class 1259 OID 131185)
-- Name: Notifications; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Notifications" (
    id integer NOT NULL,
    "userID" integer NOT NULL,
    title character varying(255) NOT NULL,
    message text NOT NULL,
    type character varying(255),
    "isRead" boolean DEFAULT false NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Notifications" OWNER TO postgres;

--
-- TOC entry 232 (class 1259 OID 131184)
-- Name: Notifications_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Notifications_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Notifications_id_seq" OWNER TO postgres;

--
-- TOC entry 5006 (class 0 OID 0)
-- Dependencies: 232
-- Name: Notifications_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Notifications_id_seq" OWNED BY public."Notifications".id;


--
-- TOC entry 227 (class 1259 OID 131137)
-- Name: ProfileCategories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."ProfileCategories" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."ProfileCategories" OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 131136)
-- Name: ProfileCategories_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."ProfileCategories_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."ProfileCategories_id_seq" OWNER TO postgres;

--
-- TOC entry 5007 (class 0 OID 0)
-- Dependencies: 226
-- Name: ProfileCategories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."ProfileCategories_id_seq" OWNED BY public."ProfileCategories".id;


--
-- TOC entry 229 (class 1259 OID 131144)
-- Name: ProfileDetails; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."ProfileDetails" (
    id integer NOT NULL,
    "userID" integer NOT NULL,
    "categoryID" integer NOT NULL,
    name character varying(255),
    description character varying(255),
    image character varying(255),
    status character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."ProfileDetails" OWNER TO postgres;

--
-- TOC entry 228 (class 1259 OID 131143)
-- Name: ProfileDetails_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."ProfileDetails_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."ProfileDetails_id_seq" OWNER TO postgres;

--
-- TOC entry 5008 (class 0 OID 0)
-- Dependencies: 228
-- Name: ProfileDetails_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."ProfileDetails_id_seq" OWNED BY public."ProfileDetails".id;


--
-- TOC entry 217 (class 1259 OID 57453)
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 131098)
-- Name: Users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Users" (
    id integer NOT NULL,
    firstname character varying(255) NOT NULL,
    lastname character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    phone character varying(255),
    gender public."enum_Users_gender",
    role character varying(255),
    address text,
    code character varying(255),
    status character varying(255),
    image character varying(255),
    "departmentId" integer,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public."Users" OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 131097)
-- Name: Users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Users_id_seq" OWNER TO postgres;

--
-- TOC entry 5009 (class 0 OID 0)
-- Dependencies: 222
-- Name: Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;


--
-- TOC entry 219 (class 1259 OID 131073)
-- Name: countries; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.countries (
    id integer NOT NULL,
    common_name character varying(255) NOT NULL,
    official_name character varying(255),
    code character varying(3) NOT NULL,
    region character varying(255),
    subregion character varying(255),
    languages json,
    currencies json,
    capital character varying(255),
    flag_url character varying(255),
    google_map_url character varying(255),
    openstreet_map_url character varying(255),
    timezone character varying(255),
    continent character varying(255),
    latitude numeric(10,7),
    longitude numeric(10,7),
    population bigint,
    landlocked boolean DEFAULT false NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.countries OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 131072)
-- Name: countries_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.countries_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.countries_id_seq OWNER TO postgres;

--
-- TOC entry 5010 (class 0 OID 0)
-- Dependencies: 218
-- Name: countries_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.countries_id_seq OWNED BY public.countries.id;


--
-- TOC entry 4798 (class 2604 OID 131166)
-- Name: Appointments id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Appointments" ALTER COLUMN id SET DEFAULT nextval('public."Appointments_id_seq"'::regclass);


--
-- TOC entry 4789 (class 2604 OID 131088)
-- Name: Departments id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Departments" ALTER COLUMN id SET DEFAULT nextval('public."Departments_id_seq"'::regclass);


--
-- TOC entry 4795 (class 2604 OID 131121)
-- Name: Missions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Missions" ALTER COLUMN id SET DEFAULT nextval('public."Missions_id_seq"'::regclass);


--
-- TOC entry 4799 (class 2604 OID 131188)
-- Name: Notifications id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Notifications" ALTER COLUMN id SET DEFAULT nextval('public."Notifications_id_seq"'::regclass);


--
-- TOC entry 4796 (class 2604 OID 131140)
-- Name: ProfileCategories id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ProfileCategories" ALTER COLUMN id SET DEFAULT nextval('public."ProfileCategories_id_seq"'::regclass);


--
-- TOC entry 4797 (class 2604 OID 131147)
-- Name: ProfileDetails id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ProfileDetails" ALTER COLUMN id SET DEFAULT nextval('public."ProfileDetails_id_seq"'::regclass);


--
-- TOC entry 4792 (class 2604 OID 131101)
-- Name: Users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);


--
-- TOC entry 4787 (class 2604 OID 131076)
-- Name: countries id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.countries ALTER COLUMN id SET DEFAULT nextval('public.countries_id_seq'::regclass);


--
-- TOC entry 4995 (class 0 OID 131163)
-- Dependencies: 231
-- Data for Name: Appointments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Appointments" (id, "missionID", "userID", status, "assignedBY", "createdAt", "updatedAt") FROM stdin;
1	1	1	active	2	2025-02-21 19:13:18.577+02	2025-02-21 19:13:18.577+02
2	2	2	inactive	1	2025-02-21 19:13:18.577+02	2025-02-21 19:13:18.577+02
3	3	3	closed	3	2025-02-21 19:13:18.577+02	2025-02-21 19:13:18.577+02
\.


--
-- TOC entry 4985 (class 0 OID 131085)
-- Dependencies: 221
-- Data for Name: Departments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Departments" (id, name, description, "readerId", "createdAt", "updatedAt") FROM stdin;
39	drpartment2 2991	ssddddddddddddddddd	2	2025-02-22 12:22:07.031+02	2025-02-22 15:03:49.33+02
\.


--
-- TOC entry 4989 (class 0 OID 131118)
-- Dependencies: 225
-- Data for Name: Missions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Missions" (id, name, location, start_date, end_date, description, status, "CountryID", "createdBY", "createdAt", "updatedAt") FROM stdin;
1	Mission to Congo	DRC	2025-01-01 02:00:00+02	2025-12-31 02:00:00+02	mission to fight all congolese terorism and terosists	active	1	1	2025-02-21 19:13:18.554+02	2025-02-21 19:13:18.554+02
2	cabo dergado	mozambique	2025-03-15 02:00:00+02	2025-06-30 02:00:00+02	mission to fight all  terorism  in mozambique and terosists	ongoing	2	2	2025-02-21 19:13:18.554+02	2025-02-21 19:13:18.554+02
3	Fance meeting peace	france	2026-05-20 02:00:00+02	2026-08-15 02:00:00+02	mission to go in france and do meeting for search for peace	active	3	2	2025-02-21 19:13:18.554+02	2025-02-21 19:13:18.554+02
\.


--
-- TOC entry 4997 (class 0 OID 131185)
-- Dependencies: 233
-- Data for Name: Notifications; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Notifications" (id, "userID", title, message, type, "isRead", "createdAt", "updatedAt") FROM stdin;
1	1	profile changed	Your profile has been changed, they added profile detail for you	alert	f	2025-02-21 19:13:18.596+02	2025-02-21 19:13:18.596+02
2	1	Appointment changed	Your appointment is changed from active to disactive	alert	f	2025-02-21 19:13:18.596+02	2025-02-21 19:13:18.596+02
3	2	Your appoitment 	Your appointment is has been deleted !	alert	f	2025-02-21 19:13:18.596+02	2025-02-21 19:13:18.596+02
4	2	profile changed	Your profile has been changed, they added profile detail for you	alert	f	2025-02-21 19:13:18.596+02	2025-02-21 19:13:18.596+02
6	3	Your appoitment 	Your appointment is has been deleted !	alert	f	2025-02-21 19:13:18.596+02	2025-02-21 19:13:18.596+02
8	5	Account created for you	your account has been created successfull	account	f	2025-02-21 19:20:13.619+02	2025-02-21 19:20:13.619+02
9	5	your  account has been updated	your account has been edited by admin	account	f	2025-02-21 22:20:14.924+02	2025-02-21 22:20:14.924+02
10	8	Account created for you	your account has been created successfull	account	f	2025-02-21 23:23:11.366+02	2025-02-21 23:23:11.366+02
11	9	Account created for you	your account has been created successfull	account	f	2025-02-21 23:31:48.647+02	2025-02-21 23:31:48.647+02
12	10	Account created for you	your account has been created successfull	account	f	2025-02-21 23:34:04.631+02	2025-02-21 23:34:04.631+02
44	42	Account created for you	your account has been created successfull	account	f	2025-02-22 10:38:31.037+02	2025-02-22 10:38:31.037+02
45	5	your  account has been updated	your account has been edited by admin	account	f	2025-02-22 10:48:10.085+02	2025-02-22 10:48:10.085+02
46	3	your  account has been updated	your account has been edited by admin	account	f	2025-02-22 11:11:27.858+02	2025-02-22 11:11:27.858+02
5	3	Appointment changed	Your appointment is changed from active to disactive	alert	t	2025-02-21 19:13:18.596+02	2025-02-22 12:09:10.69+02
47	3	your  account has been updated	your account has been edited by admin	account	f	2025-02-22 12:22:36.823+02	2025-02-22 12:22:36.823+02
\.


--
-- TOC entry 4991 (class 0 OID 131137)
-- Dependencies: 227
-- Data for Name: ProfileCategories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."ProfileCategories" (id, name, "createdAt", "updatedAt") FROM stdin;
1	Personal Information	2025-02-21 19:13:18.503+02	2025-02-21 19:13:18.503+02
2	certificates	2025-02-21 19:13:18.503+02	2025-02-21 19:13:18.503+02
3	skills	2025-02-21 19:13:18.503+02	2025-02-21 19:13:18.503+02
4	trainning	2025-02-21 19:13:18.503+02	2025-02-21 19:13:18.503+02
\.


--
-- TOC entry 4993 (class 0 OID 131144)
-- Dependencies: 229
-- Data for Name: ProfileDetails; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."ProfileDetails" (id, "userID", "categoryID", name, description, image, status, "createdAt", "updatedAt") FROM stdin;
1	1	1	Profile Picture	descrpition	\N	active	2025-02-21 19:13:18.526+02	2025-02-21 19:13:18.526+02
2	2	2	certificate	certificate in software development	\N	active	2025-02-21 19:13:18.526+02	2025-02-21 19:13:18.526+02
3	3	3	skills	skills in software development	\N	active	2025-02-21 19:13:18.526+02	2025-02-21 19:13:18.526+02
\.


--
-- TOC entry 4981 (class 0 OID 57453)
-- Dependencies: 217
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."SequelizeMeta" (name) FROM stdin;
20231201082111-create-country.js
20231201082740-create-department.js
20231201082741-create-user.js
20231208145628-create-missions.js
20231208145628-create-profile_categories.js
20231208145628-create-profile_details1.js
20231208145629-create-appointments.js
20231208145629-create-notifications.js
\.


--
-- TOC entry 4987 (class 0 OID 131098)
-- Dependencies: 223
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Users" (id, firstname, lastname, email, password, phone, gender, role, address, code, status, image, "departmentId", "createdAt", "updatedAt") FROM stdin;
1	admin	cedro	admin@gmail.com	$2b$10$6nlOLiuwA7cbInQgpt3gZu.3SmPhbe6pLKeeyeKmKq2L/MphghgRG	0780000000	Male	admin	huye/tumba	\N	active	https://res.cloudinary.com/dzl8xve8s/image/upload/v1739974089/Card/tpfxwscg5hfek50yitjc.png	\N	2025-02-21 19:13:18.483+02	2025-02-21 19:13:18.483+02
2	Uwase	karara	officer@gmail.com	$2b$10$5HjyZiR4DB2W.2iKlV7z8eZ6FS0KUXMjRuGN4/1GSNGCI/xhKNB6y	0781234567	Male	Commander-Officer	Kigali, Rwanda	\N	active	http://res.cloudinary.com/dzl8xve8s/image/upload/v1724766686/Card/nrujel7xhcokiikabpyj.png	\N	2025-02-21 19:13:18.483+02	2025-02-21 19:13:18.483+02
8	cedrick	hakuzimana	cedrickhakuzimanaz@gmail.com	$2a$10$dXRTlnIoqSR.DAPIUjKOfuBi2Kvy.qPAkbLoCchbod3PN5pz7gtwy	0784366616	Male	user	5 KN 27 Street	\N	active	\N	\N	2025-02-21 23:23:06.335+02	2025-02-21 23:23:06.335+02
42	ss	ss	admin23@gmail.com	$2a$10$R/TgazTbawWhft5G7.xDr.JGylANzSvgcfVZFbzJe17G4SiTtbMRy	07843666112	Male	user	5 KN 27 Street	\N	active	\N	\N	2025-02-22 10:38:30.976+02	2025-02-22 10:38:30.976+02
9	cedrick	hakuzimana	cedrickkakuzimanas@gmail.com	$2a$10$r56nroo4iMwWMDcMfYpAJODzbkmb4AK6MZOfEMHD6Zpz5rprYF0ha	0784366616s	Female	user	5 KN 27 Street	\N	active	\N	\N	2025-02-21 23:31:44.045+02	2025-02-21 23:31:44.045+02
10	cedrick	hakuzimana	cedrickkakuzimanaxx@gmail.com	$2a$10$bIXNw0wkf1/mGLNS6DAbe.PvGYN.rFAY2PYHfDMqvYD7oJ3RT7dJm	0784366616q	Female	user	5 KN 27 Street	\N	active	\N	\N	2025-02-21 23:33:59.676+02	2025-02-21 23:33:59.676+02
5	bijoux	kubwimana	kefakettybijoux12@gmail.com	$2b$10$/Lg8PBRob13/Qz2o2NdxXekKzGMa6/ltbboPlUCEkVASxXRW/ms3u	07784316633	Female	Commander-Officer			active	\N	\N	2025-02-21 19:20:10.051+02	2025-02-22 10:48:10.039+02
3	cedrick	cedro	user@gmail.com	$2b$10$pM7CM9cuBUUQLdFpNoH8W.SWBVO98MZJ3pgQmxRz3ZY07ZHC32e6O	0787654321	Male	user	Kigali, Rwanda	\N	active	http://res.cloudinary.com/dzl8xve8s/image/upload/v1724766686/Card/nrujel7xhcokiikabpyj.png	39	2025-02-21 19:13:18.483+02	2025-02-22 12:22:36.795+02
\.


--
-- TOC entry 4983 (class 0 OID 131073)
-- Dependencies: 219
-- Data for Name: countries; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.countries (id, common_name, official_name, code, region, subregion, languages, currencies, capital, flag_url, google_map_url, openstreet_map_url, timezone, continent, latitude, longitude, population, landlocked, "createdAt", "updatedAt") FROM stdin;
1	South Georgia	South Georgia and the South Sandwich Islands	SGS	Antarctic	\N	{"eng":"English"}	{"SHP":{"name":"Saint Helena pound","symbol":"£"}}	King Edward Point	https://flagcdn.com/w320/gs.png	https://goo.gl/maps/mJzdaBwKBbm2B81q9	https://www.openstreetmap.org/relation/1983629	UTC-02:00	Antarctica	-54.5000000	-37.0000000	30	f	2025-02-21 19:13:17.744+02	2025-02-21 19:13:17.744+02
2	Grenada	Grenada	GRD	Americas	Caribbean	{"eng":"English"}	{"XCD":{"name":"Eastern Caribbean dollar","symbol":"$"}}	St. George's	https://flagcdn.com/w320/gd.png	https://goo.gl/maps/rqWyfUAt4xhvk1Zy9	https://www.openstreetmap.org/relation/550727	UTC-04:00	North America	12.1166667	-61.6666667	112519	f	2025-02-21 19:13:17.744+02	2025-02-21 19:13:17.744+02
3	Switzerland	Swiss Confederation	CHE	Europe	Western Europe	{"fra":"French","gsw":"Swiss German","ita":"Italian","roh":"Romansh"}	{"CHF":{"name":"Swiss franc","symbol":"Fr."}}	Bern	https://flagcdn.com/w320/ch.png	https://goo.gl/maps/uVuZcXaxSx5jLyEC9	https://www.openstreetmap.org/relation/51701	UTC+01:00	Europe	47.0000000	8.0000000	8654622	t	2025-02-21 19:13:17.744+02	2025-02-21 19:13:17.744+02
4	Sierra Leone	Republic of Sierra Leone	SLE	Africa	Western Africa	{"eng":"English"}	{"SLL":{"name":"Sierra Leonean leone","symbol":"Le"}}	Freetown	https://flagcdn.com/w320/sl.png	https://goo.gl/maps/jhacar85oq9QaeKB7	https://www.openstreetmap.org/relation/192777	UTC	Africa	8.5000000	-11.5000000	7976985	f	2025-02-21 19:13:17.744+02	2025-02-21 19:13:17.744+02
5	Hungary	Hungary	HUN	Europe	Central Europe	{"hun":"Hungarian"}	{"HUF":{"name":"Hungarian forint","symbol":"Ft"}}	Budapest	https://flagcdn.com/w320/hu.png	https://goo.gl/maps/9gfPupm5bffixiFJ6	https://www.openstreetmap.org/relation/21335	UTC+01:00	Europe	47.0000000	20.0000000	9749763	t	2025-02-21 19:13:17.744+02	2025-02-21 19:13:17.744+02
6	Taiwan	Republic of China (Taiwan)	TWN	Asia	Eastern Asia	{"zho":"Chinese"}	{"TWD":{"name":"New Taiwan dollar","symbol":"$"}}	Taipei	https://flagcdn.com/w320/tw.png	https://goo.gl/maps/HgMKFQjNadF3Wa6B6	https://www.openstreetmap.org/relation/449220	UTC+08:00	Asia	23.5000000	121.0000000	23503349	f	2025-02-21 19:13:17.744+02	2025-02-21 19:13:17.744+02
7	Wallis and Futuna	Territory of the Wallis and Futuna Islands	WLF	Oceania	Polynesia	{"fra":"French"}	{"XPF":{"name":"CFP franc","symbol":"₣"}}	Mata-Utu	https://flagcdn.com/w320/wf.png	https://goo.gl/maps/CzVqK74QYtbHv65r5	https://www.openstreetmap.org/relation/3412448	UTC+12:00	Oceania	-13.3000000	-176.2000000	11750	f	2025-02-21 19:13:17.744+02	2025-02-21 19:13:17.744+02
8	Barbados	Barbados	BRB	Americas	Caribbean	{"eng":"English"}	{"BBD":{"name":"Barbadian dollar","symbol":"$"}}	Bridgetown	https://flagcdn.com/w320/bb.png	https://goo.gl/maps/2m36v8STvbGAWd9c7	https://www.openstreetmap.org/relation/547511	UTC-04:00	North America	13.1666667	-59.5333333	287371	f	2025-02-21 19:13:17.744+02	2025-02-21 19:13:17.745+02
9	Pitcairn Islands	Pitcairn Group of Islands	PCN	Oceania	Polynesia	{"eng":"English"}	{"NZD":{"name":"New Zealand dollar","symbol":"$"}}	Adamstown	https://flagcdn.com/w320/pn.png	https://goo.gl/maps/XGJMnMAigXjXcxSa7	https://www.openstreetmap.org/relation/2185375	UTC-08:00	Oceania	-25.0666667	-130.1000000	56	f	2025-02-21 19:13:17.745+02	2025-02-21 19:13:17.745+02
10	Ivory Coast	Republic of Côte d'Ivoire	CIV	Africa	Western Africa	{"fra":"French"}	{"XOF":{"name":"West African CFA franc","symbol":"Fr"}}	Yamoussoukro	https://flagcdn.com/w320/ci.png	https://goo.gl/maps/wKsmN7f5qAeNtGjP6	https://www.openstreetmap.org/relation/192779	UTC	Africa	8.0000000	-5.0000000	26378275	f	2025-02-21 19:13:17.745+02	2025-02-21 19:13:17.745+02
11	Tunisia	Tunisian Republic	TUN	Africa	Northern Africa	{"ara":"Arabic"}	{"TND":{"name":"Tunisian dinar","symbol":"د.ت"}}	Tunis	https://flagcdn.com/w320/tn.png	https://goo.gl/maps/KgUmpZdUuNRaougs8	https://www.openstreetmap.org/relation/192757	UTC+01:00	Africa	34.0000000	9.0000000	11818618	f	2025-02-21 19:13:17.745+02	2025-02-21 19:13:17.745+02
12	Italy	Italian Republic	ITA	Europe	Southern Europe	{"ita":"Italian"}	{"EUR":{"name":"Euro","symbol":"€"}}	Rome	https://flagcdn.com/w320/it.png	https://goo.gl/maps/8M1K27TDj7StTRTq8	https://www.openstreetmap.org/relation/365331	UTC+01:00	Europe	42.8333333	12.8333333	59554023	f	2025-02-21 19:13:17.745+02	2025-02-21 19:13:17.745+02
13	Benin	Republic of Benin	BEN	Africa	Western Africa	{"fra":"French"}	{"XOF":{"name":"West African CFA franc","symbol":"Fr"}}	Porto-Novo	https://flagcdn.com/w320/bj.png	https://goo.gl/maps/uMw1BsHEXQYgVFFu6	https://www.openstreetmap.org/relation/192784	UTC+01:00	Africa	9.5000000	2.2500000	12123198	f	2025-02-21 19:13:17.745+02	2025-02-21 19:13:17.745+02
14	Indonesia	Republic of Indonesia	IDN	Asia	South-Eastern Asia	{"ind":"Indonesian"}	{"IDR":{"name":"Indonesian rupiah","symbol":"Rp"}}	Jakarta	https://flagcdn.com/w320/id.png	https://goo.gl/maps/9gfPupm5bffixiFJ6	https://www.openstreetmap.org/relation/21335	UTC+07:00	Asia	-5.0000000	120.0000000	273523621	f	2025-02-21 19:13:17.745+02	2025-02-21 19:13:17.745+02
15	Cape Verde	Republic of Cabo Verde	CPV	Africa	Western Africa	{"por":"Portuguese"}	{"CVE":{"name":"Cape Verdean escudo","symbol":"Esc"}}	Praia	https://flagcdn.com/w320/cv.png	https://goo.gl/maps/Kc9vy5ChjuiAgMfXA	https://www.openstreetmap.org/relation/535774	UTC-01:00	Africa	16.5388000	-23.0418000	555988	f	2025-02-21 19:13:17.745+02	2025-02-21 19:13:17.745+02
16	Saint Kitts and Nevis	Federation of Saint Christopher and Nevis	KNA	Americas	Caribbean	{"eng":"English"}	{"XCD":{"name":"Eastern Caribbean dollar","symbol":"$"}}	Basseterre	https://flagcdn.com/w320/kn.png	https://goo.gl/maps/qiaVwcLVTXX3eoTNA	https://www.openstreetmap.org/relation/536899	UTC-04:00	North America	17.3333333	-62.7500000	53192	f	2025-02-21 19:13:17.745+02	2025-02-21 19:13:17.745+02
17	Laos	Lao People's Democratic Republic	LAO	Asia	South-Eastern Asia	{"lao":"Lao"}	{"LAK":{"name":"Lao kip","symbol":"₭"}}	Vientiane	https://flagcdn.com/w320/la.png	https://goo.gl/maps/F3asVB7sRKgSnwbE7	https://www.openstreetmap.org/relation/49903	UTC+07:00	Asia	18.0000000	105.0000000	7275556	t	2025-02-21 19:13:17.745+02	2025-02-21 19:13:17.745+02
18	Caribbean Netherlands	Bonaire, Sint Eustatius and Saba	BES	Americas	Caribbean	{"eng":"English","nld":"Dutch","pap":"Papiamento"}	{"USD":{"name":"United States dollar","symbol":"$"}}	Kralendijk	https://flagcdn.com/w320/bq.png	https://goo.gl/maps/4XVes1P6uEDTz77WA	https://www.openstreetmap.org/relation/1216720	UTC-04:00	North America	12.1800000	-68.2500000	25987	f	2025-02-21 19:13:17.745+02	2025-02-21 19:13:17.745+02
19	Uganda	Republic of Uganda	UGA	Africa	Eastern Africa	{"eng":"English","swa":"Swahili"}	{"UGX":{"name":"Ugandan shilling","symbol":"Sh"}}	Kampala	https://flagcdn.com/w320/ug.png	https://goo.gl/maps/Y7812hFiGa8LD9N68	https://www.openstreetmap.org/relation/192796	UTC+03:00	Africa	1.0000000	32.0000000	45741000	t	2025-02-21 19:13:17.745+02	2025-02-21 19:13:17.745+02
20	Andorra	Principality of Andorra	AND	Europe	Southern Europe	{"cat":"Catalan"}	{"EUR":{"name":"Euro","symbol":"€"}}	Andorra la Vella	https://flagcdn.com/w320/ad.png	https://goo.gl/maps/JqAnacWE2qEznKgw7	https://www.openstreetmap.org/relation/9407	UTC+01:00	Europe	42.5000000	1.5000000	77265	t	2025-02-21 19:13:17.745+02	2025-02-21 19:13:17.745+02
21	Burundi	Republic of Burundi	BDI	Africa	Eastern Africa	{"fra":"French","run":"Kirundi"}	{"BIF":{"name":"Burundian franc","symbol":"Fr"}}	Gitega	https://flagcdn.com/w320/bi.png	https://goo.gl/maps/RXPWoRrB9tfrJpUG7	https://www.openstreetmap.org/relation/195269	UTC+02:00	Africa	-3.5000000	30.0000000	11890781	t	2025-02-21 19:13:17.745+02	2025-02-21 19:13:17.745+02
22	South Africa	Republic of South Africa	ZAF	Africa	Southern Africa	{"afr":"Afrikaans","eng":"English","nbl":"Southern Ndebele","nso":"Northern Sotho","sot":"Southern Sotho","ssw":"Swazi","tsn":"Tswana","tso":"Tsonga","ven":"Venda","xho":"Xhosa","zul":"Zulu"}	{"ZAR":{"name":"South African rand","symbol":"R"}}	Pretoria	https://flagcdn.com/w320/za.png	https://goo.gl/maps/CLCZ1R8Uz1KpYhRv6	https://www.openstreetmap.org/relation/87565	UTC+02:00	Africa	-29.0000000	24.0000000	59308690	f	2025-02-21 19:13:17.745+02	2025-02-21 19:13:17.745+02
23	France	French Republic	FRA	Europe	Western Europe	{"fra":"French"}	{"EUR":{"name":"Euro","symbol":"€"}}	Paris	https://flagcdn.com/w320/fr.png	https://goo.gl/maps/g7QxxSFsWyTPKuzd7	https://www.openstreetmap.org/relation/1403916	UTC-10:00	Europe	46.0000000	2.0000000	67391582	f	2025-02-21 19:13:17.745+02	2025-02-21 19:13:17.745+02
24	Libya	State of Libya	LBY	Africa	Northern Africa	{"ara":"Arabic"}	{"LYD":{"name":"Libyan dinar","symbol":"ل.د"}}	Tripoli	https://flagcdn.com/w320/ly.png	https://goo.gl/maps/eLgGnaQWcJEdYRMy5	openstreetmap.org/relation/192758	UTC+01:00	Africa	25.0000000	17.0000000	6871287	f	2025-02-21 19:13:17.745+02	2025-02-21 19:13:17.745+02
25	Mexico	United Mexican States	MEX	Americas	North America	{"spa":"Spanish"}	{"MXN":{"name":"Mexican peso","symbol":"$"}}	Mexico City	https://flagcdn.com/w320/mx.png	https://goo.gl/maps/s5g7imNPMDEePxzbA	https://www.openstreetmap.org/relation/114686	UTC-08:00	North America	23.0000000	-102.0000000	128932753	f	2025-02-21 19:13:17.745+02	2025-02-21 19:13:17.745+02
26	Gabon	Gabonese Republic	GAB	Africa	Middle Africa	{"fra":"French"}	{"XAF":{"name":"Central African CFA franc","symbol":"Fr"}}	Libreville	https://flagcdn.com/w320/ga.png	https://goo.gl/maps/vyRSkqw1H1fnq4ry6	https://www.openstreetmap.org/relation/192793	UTC+01:00	Africa	-1.0000000	11.7500000	2225728	f	2025-02-21 19:13:17.745+02	2025-02-21 19:13:17.745+02
27	Northern Mariana Islands	Commonwealth of the Northern Mariana Islands	MNP	Oceania	Micronesia	{"cal":"Carolinian","cha":"Chamorro","eng":"English"}	{"USD":{"name":"United States dollar","symbol":"$"}}	Saipan	https://flagcdn.com/w320/mp.png	https://goo.gl/maps/cpZ67knoRAcfu1417	https://www.openstreetmap.org/relation/306004	UTC+10:00	Oceania	15.2000000	145.7500000	57557	f	2025-02-21 19:13:17.745+02	2025-02-21 19:13:17.745+02
28	North Macedonia	Republic of North Macedonia	MKD	Europe	Southeast Europe	{"mkd":"Macedonian"}	{"MKD":{"name":"denar","symbol":"den"}}	Skopje	https://flagcdn.com/w320/mk.png	https://goo.gl/maps/55Q8MEnF6ACdu3q79	https://www.openstreetmap.org/relation/53293	UTC+01:00	Europe	41.8333333	22.0000000	2077132	t	2025-02-21 19:13:17.745+02	2025-02-21 19:13:17.745+02
29	China	People's Republic of China	CHN	Asia	Eastern Asia	{"zho":"Chinese"}	{"CNY":{"name":"Chinese yuan","symbol":"¥"}}	Beijing	https://flagcdn.com/w320/cn.png	https://goo.gl/maps/p9qC6vgiFRRXzvGi7	https://www.openstreetmap.org/relation/270056	UTC+08:00	Asia	35.0000000	105.0000000	1402112000	f	2025-02-21 19:13:17.745+02	2025-02-21 19:13:17.745+02
30	Yemen	Republic of Yemen	YEM	Asia	Western Asia	{"ara":"Arabic"}	{"YER":{"name":"Yemeni rial","symbol":"﷼"}}	Sana'a	https://flagcdn.com/w320/ye.png	https://goo.gl/maps/WCmE76HKcLideQQw7	https://www.openstreetmap.org/relation/305092	UTC+03:00	Asia	15.0000000	48.0000000	29825968	f	2025-02-21 19:13:17.745+02	2025-02-21 19:13:17.745+02
31	Saint Barthélemy	Collectivity of Saint Barthélemy	BLM	Americas	Caribbean	{"fra":"French"}	{"EUR":{"name":"Euro","symbol":"€"}}	Gustavia	https://flagcdn.com/w320/bl.png	https://goo.gl/maps/Mc7GqH466S7AAk297	https://www.openstreetmap.org/relation/7552779	UTC-04:00	North America	18.5000000	-63.4166667	4255	f	2025-02-21 19:13:17.745+02	2025-02-21 19:13:17.745+02
32	Guernsey	Bailiwick of Guernsey	GGY	Europe	Northern Europe	{"eng":"English","fra":"French","nfr":"Guernésiais"}	{"GBP":{"name":"British pound","symbol":"£"},"GGP":{"name":"Guernsey pound","symbol":"£"}}	St. Peter Port	https://flagcdn.com/w320/gg.png	https://goo.gl/maps/6kXnQU5QvEZMD9VB7	https://www.openstreetmap.org/relation/270009	UTC+00:00	Europe	49.4666667	-2.5833333	62999	f	2025-02-21 19:13:17.745+02	2025-02-21 19:13:17.745+02
33	Solomon Islands	Solomon Islands	SLB	Oceania	Melanesia	{"eng":"English"}	{"SBD":{"name":"Solomon Islands dollar","symbol":"$"}}	Honiara	https://flagcdn.com/w320/sb.png	https://goo.gl/maps/JbPkx86Ywjv8C1n8A	https://www.openstreetmap.org/relation/1857436	UTC+11:00	Oceania	-8.0000000	159.0000000	686878	f	2025-02-21 19:13:17.745+02	2025-02-21 19:13:17.745+02
34	Svalbard and Jan Mayen	Svalbard og Jan Mayen	SJM	Europe	Northern Europe	{"nor":"Norwegian"}	{"NOK":{"name":"krone","symbol":"kr"}}	Longyearbyen	https://flagcdn.com/w320/sj.png	https://goo.gl/maps/L2wyyn3cQ16PzQ5J8	https://www.openstreetmap.org/relation/1337397	UTC+01:00	Europe	78.0000000	20.0000000	2562	f	2025-02-21 19:13:17.745+02	2025-02-21 19:13:17.745+02
35	Faroe Islands	Faroe Islands	FRO	Europe	Northern Europe	{"dan":"Danish","fao":"Faroese"}	{"DKK":{"name":"Danish krone","symbol":"kr"},"FOK":{"name":"Faroese króna","symbol":"kr"}}	Tórshavn	https://flagcdn.com/w320/fo.png	https://goo.gl/maps/6sTru4SmHdEVcNkM6	https://www.openstreetmap.org/relation/52939	UTC+00:00	Europe	62.0000000	-7.0000000	48865	f	2025-02-21 19:13:17.745+02	2025-02-21 19:13:17.745+02
36	Uzbekistan	Republic of Uzbekistan	UZB	Asia	Central Asia	{"rus":"Russian","uzb":"Uzbek"}	{"UZS":{"name":"Uzbekistani soʻm","symbol":"so'm"}}	Tashkent	https://flagcdn.com/w320/uz.png	https://goo.gl/maps/AJpo6MjMx23qSWCz8	https://www.openstreetmap.org/relation/196240	UTC+05:00	Asia	41.0000000	64.0000000	34232050	t	2025-02-21 19:13:17.745+02	2025-02-21 19:13:17.745+02
37	Egypt	Arab Republic of Egypt	EGY	Africa	Northern Africa	{"ara":"Arabic"}	{"EGP":{"name":"Egyptian pound","symbol":"£"}}	Cairo	https://flagcdn.com/w320/eg.png	https://goo.gl/maps/uoDRhXbsqjG6L7VG7	https://www.openstreetmap.org/relation/1473947	UTC+02:00	Africa	27.0000000	30.0000000	102334403	f	2025-02-21 19:13:17.745+02	2025-02-21 19:13:17.745+02
38	Senegal	Republic of Senegal	SEN	Africa	Western Africa	{"fra":"French"}	{"XOF":{"name":"West African CFA franc","symbol":"Fr"}}	Dakar	https://flagcdn.com/w320/sn.png	https://goo.gl/maps/o5f1uD5nyihCL3HCA	https://www.openstreetmap.org/relation/192775	UTC	Africa	14.0000000	-14.0000000	16743930	f	2025-02-21 19:13:17.745+02	2025-02-21 19:13:17.745+02
39	Sri Lanka	Democratic Socialist Republic of Sri Lanka	LKA	Asia	Southern Asia	{"sin":"Sinhala","tam":"Tamil"}	{"LKR":{"name":"Sri Lankan rupee","symbol":"Rs  රු"}}	Sri Jayawardenepura Kotte	https://flagcdn.com/w320/lk.png	https://goo.gl/maps/VkPHoeFSfgzRQCDv8	https://www.openstreetmap.org/relation/536807	UTC+05:30	Asia	7.0000000	81.0000000	21919000	f	2025-02-21 19:13:17.745+02	2025-02-21 19:13:17.745+02
40	Palestine	State of Palestine	PSE	Asia	Western Asia	{"ara":"Arabic"}	{"EGP":{"name":"Egyptian pound","symbol":"E£"},"ILS":{"name":"Israeli new shekel","symbol":"₪"},"JOD":{"name":"Jordanian dinar","symbol":"JD"}}	Ramallah	https://flagcdn.com/w320/ps.png	https://goo.gl/maps/QvTbkRdmdWEoYAmt5	https://www.openstreetmap.org/relation/1703814	UTC+02:00	Asia	31.9000000	35.2000000	4803269	f	2025-02-21 19:13:17.745+02	2025-02-21 19:13:17.745+02
41	Bangladesh	People's Republic of Bangladesh	BGD	Asia	Southern Asia	{"ben":"Bengali"}	{"BDT":{"name":"Bangladeshi taka","symbol":"৳"}}	Dhaka	https://flagcdn.com/w320/bd.png	https://goo.gl/maps/op6gmLbHcvv6rLhH6	https://www.openstreetmap.org/relation/184640	UTC+06:00	Asia	24.0000000	90.0000000	164689383	f	2025-02-21 19:13:17.745+02	2025-02-21 19:13:17.745+02
42	Peru	Republic of Peru	PER	Americas	South America	{"aym":"Aymara","que":"Quechua","spa":"Spanish"}	{"PEN":{"name":"Peruvian sol","symbol":"S/ "}}	Lima	https://flagcdn.com/w320/pe.png	https://goo.gl/maps/uDWEUaXNcZTng1fP6	https://www.openstreetmap.org/relation/288247	UTC-05:00	South America	-10.0000000	-76.0000000	32971846	f	2025-02-21 19:13:17.745+02	2025-02-21 19:13:17.745+02
43	Singapore	Republic of Singapore	SGP	Asia	South-Eastern Asia	{"eng":"English","zho":"Chinese","msa":"Malay","tam":"Tamil"}	{"SGD":{"name":"Singapore dollar","symbol":"$"}}	Singapore	https://flagcdn.com/w320/sg.png	https://goo.gl/maps/QbQt9Y9b5KFzsahV6	https://www.openstreetmap.org/relation/536780	UTC+08:00	Asia	1.3666667	103.8000000	5685807	f	2025-02-21 19:13:17.745+02	2025-02-21 19:13:17.745+02
44	Turkey	Republic of Turkey	TUR	Asia	Western Asia	{"tur":"Turkish"}	{"TRY":{"name":"Turkish lira","symbol":"₺"}}	Ankara	https://flagcdn.com/w320/tr.png	https://goo.gl/maps/dXFFraiUDfcB6Quk6	https://www.openstreetmap.org/relation/174737	UTC+03:00	Europe	39.0000000	35.0000000	84339067	f	2025-02-21 19:13:17.745+02	2025-02-21 19:13:17.745+02
45	Afghanistan	Islamic Republic of Afghanistan	AFG	Asia	Southern Asia	{"prs":"Dari","pus":"Pashto","tuk":"Turkmen"}	{"AFN":{"name":"Afghan afghani","symbol":"؋"}}	Kabul	https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png	https://goo.gl/maps/BXBGw7yUUFknCfva9	https://www.openstreetmap.org/relation/303427	UTC+04:30	Asia	33.0000000	65.0000000	40218234	t	2025-02-21 19:13:17.745+02	2025-02-21 19:13:17.745+02
46	Aruba	Aruba	ABW	Americas	Caribbean	{"nld":"Dutch","pap":"Papiamento"}	{"AWG":{"name":"Aruban florin","symbol":"ƒ"}}	Oranjestad	https://flagcdn.com/w320/aw.png	https://goo.gl/maps/8hopbQqifHAgyZyg8	https://www.openstreetmap.org/relation/1231749	UTC-04:00	North America	12.5000000	-69.9666667	106766	f	2025-02-21 19:13:17.745+02	2025-02-21 19:13:17.745+02
47	Cook Islands	Cook Islands	COK	Oceania	Polynesia	{"eng":"English","rar":"Cook Islands Māori"}	{"CKD":{"name":"Cook Islands dollar","symbol":"$"},"NZD":{"name":"New Zealand dollar","symbol":"$"}}	Avarua	https://flagcdn.com/w320/ck.png	https://goo.gl/maps/nrGZrvWRGB4WHgDC9	https://www.openstreetmap.org/relation/2184233	UTC-10:00	Oceania	-21.2333333	-159.7666667	18100	f	2025-02-21 19:13:17.745+02	2025-02-21 19:13:17.745+02
48	United Kingdom	United Kingdom of Great Britain and Northern Ireland	GBR	Europe	Northern Europe	{"eng":"English"}	{"GBP":{"name":"British pound","symbol":"£"}}	London	https://flagcdn.com/w320/gb.png	https://goo.gl/maps/FoDtc3UKMkFsXAjHA	https://www.openstreetmap.org/relation/62149	UTC-08:00	Europe	54.0000000	-2.0000000	67215293	f	2025-02-21 19:13:17.745+02	2025-02-21 19:13:17.745+02
49	Zambia	Republic of Zambia	ZMB	Africa	Eastern Africa	{"eng":"English"}	{"ZMW":{"name":"Zambian kwacha","symbol":"ZK"}}	Lusaka	https://flagcdn.com/w320/zm.png	https://goo.gl/maps/mweBcqvW8TppZW6q9	https://www.openstreetmap.org/relation/195271	UTC+02:00	Africa	-15.0000000	30.0000000	18383956	t	2025-02-21 19:13:17.745+02	2025-02-21 19:13:17.745+02
50	Finland	Republic of Finland	FIN	Europe	Northern Europe	{"fin":"Finnish","swe":"Swedish"}	{"EUR":{"name":"Euro","symbol":"€"}}	Helsinki	https://flagcdn.com/w320/fi.png	https://goo.gl/maps/HjgWDCNKRAYHrkMn8	openstreetmap.org/relation/54224	UTC+02:00	Europe	64.0000000	26.0000000	5530719	f	2025-02-21 19:13:17.745+02	2025-02-21 19:13:17.745+02
51	Niger	Republic of Niger	NER	Africa	Western Africa	{"fra":"French"}	{"XOF":{"name":"West African CFA franc","symbol":"Fr"}}	Niamey	https://flagcdn.com/w320/ne.png	https://goo.gl/maps/VKNU2TLsZcgxM49c8	https://www.openstreetmap.org/relation/192786	UTC+01:00	Africa	16.0000000	8.0000000	24206636	t	2025-02-21 19:13:17.745+02	2025-02-21 19:13:17.745+02
52	Christmas Island	Territory of Christmas Island	CXR	Oceania	Australia and New Zealand	{"eng":"English"}	{"AUD":{"name":"Australian dollar","symbol":"$"}}	Flying Fish Cove	https://flagcdn.com/w320/cx.png	https://goo.gl/maps/ZC17hHsQZpShN5wk9	https://www.openstreetmap.org/relation/6365444	UTC+07:00	Asia	-10.5000000	105.6666667	2072	f	2025-02-21 19:13:17.745+02	2025-02-21 19:13:17.745+02
53	Tokelau	Tokelau	TKL	Oceania	Polynesia	{"eng":"English","smo":"Samoan","tkl":"Tokelauan"}	{"NZD":{"name":"New Zealand dollar","symbol":"$"}}	Fakaofo	https://flagcdn.com/w320/tk.png	https://goo.gl/maps/Ap5qN8qien6pT9UN6	https://www.openstreetmap.org/relation/2186600	UTC+13:00	Oceania	-9.0000000	-172.0000000	1411	f	2025-02-21 19:13:17.745+02	2025-02-21 19:13:17.745+02
54	Guinea-Bissau	Republic of Guinea-Bissau	GNB	Africa	Western Africa	{"por":"Portuguese","pov":"Upper Guinea Creole"}	{"XOF":{"name":"West African CFA franc","symbol":"Fr"}}	Bissau	https://flagcdn.com/w320/gw.png	https://goo.gl/maps/5Wyaz17miUc1zLc67	https://www.openstreetmap.org/relation/192776	UTC	Africa	12.0000000	-15.0000000	1967998	f	2025-02-21 19:13:17.745+02	2025-02-21 19:13:17.745+02
55	Azerbaijan	Republic of Azerbaijan	AZE	Asia	Western Asia	{"aze":"Azerbaijani"}	{"AZN":{"name":"Azerbaijani manat","symbol":"₼"}}	Baku	https://flagcdn.com/w320/az.png	https://goo.gl/maps/az3Zz7ar2aoB9AUc6	https://www.openstreetmap.org/relation/364110	UTC+04:00	Europe	40.5000000	47.5000000	10110116	t	2025-02-21 19:13:17.745+02	2025-02-21 19:13:17.745+02
56	Réunion	Réunion Island	REU	Africa	Eastern Africa	{"fra":"French"}	{"EUR":{"name":"Euro","symbol":"€"}}	Saint-Denis	https://flagcdn.com/w320/re.png	https://goo.gl/maps/wWpBrXsp8UHVbah29	https://www.openstreetmap.org/relation/1785276	UTC+04:00	Africa	-21.1500000	55.5000000	840974	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
57	Djibouti	Republic of Djibouti	DJI	Africa	Eastern Africa	{"ara":"Arabic","fra":"French"}	{"DJF":{"name":"Djiboutian franc","symbol":"Fr"}}	Djibouti	https://flagcdn.com/w320/dj.png	https://goo.gl/maps/V1HWfzN3bS1kwf4C6	https://www.openstreetmap.org/relation/192801	UTC+03:00	Africa	11.5000000	43.0000000	988002	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
58	North Korea	Democratic People's Republic of Korea	PRK	Asia	Eastern Asia	{"kor":"Korean"}	{"KPW":{"name":"North Korean won","symbol":"₩"}}	Pyongyang	https://flagcdn.com/w320/kp.png	https://goo.gl/maps/9q5T2DMeH5JL7Tky6	https://www.openstreetmap.org/relation/192734	UTC+09:00	Asia	40.0000000	127.0000000	25778815	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
59	Mauritius	Republic of Mauritius	MUS	Africa	Eastern Africa	{"eng":"English","fra":"French","mfe":"Mauritian Creole"}	{"MUR":{"name":"Mauritian rupee","symbol":"₨"}}	Port Louis	https://flagcdn.com/w320/mu.png	https://goo.gl/maps/PpKtZ4W3tir5iGrz7	https://www.openstreetmap.org/relation/535828	UTC+04:00	Africa	-20.2833333	57.5500000	1265740	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
60	Montserrat	Montserrat	MSR	Americas	Caribbean	{"eng":"English"}	{"XCD":{"name":"Eastern Caribbean dollar","symbol":"$"}}	Plymouth	https://flagcdn.com/w320/ms.png	https://goo.gl/maps/CSbe7UmxPmiwQB7GA	https://www.openstreetmap.org/relation/537257	UTC-04:00	North America	16.7500000	-62.2000000	4922	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
61	United States Virgin Islands	Virgin Islands of the United States	VIR	Americas	Caribbean	{"eng":"English"}	{"USD":{"name":"United States dollar","symbol":"$"}}	Charlotte Amalie	https://flagcdn.com/w320/vi.png	https://goo.gl/maps/mBfreywj8dor6q4m9	openstreetmap.org/relation/286898	UTC-04:00	North America	18.3500000	-64.9333330	106290	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
62	Colombia	Republic of Colombia	COL	Americas	South America	{"spa":"Spanish"}	{"COP":{"name":"Colombian peso","symbol":"$"}}	Bogotá	https://flagcdn.com/w320/co.png	https://goo.gl/maps/zix9qNFX69E9yZ2M6	https://www.openstreetmap.org/relation/120027	UTC-05:00	South America	4.0000000	-72.0000000	50882884	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
63	Greece	Hellenic Republic	GRC	Europe	Southern Europe	{"ell":"Greek"}	{"EUR":{"name":"Euro","symbol":"€"}}	Athens	https://flagcdn.com/w320/gr.png	https://goo.gl/maps/LHGcAvuRyD2iKECC6	https://www.openstreetmap.org/relation/192307	UTC+02:00	Europe	39.0000000	22.0000000	10715549	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
64	Croatia	Republic of Croatia	HRV	Europe	Southeast Europe	{"hrv":"Croatian"}	{"EUR":{"name":"Euro","symbol":"€"}}	Zagreb	https://flagcdn.com/w320/hr.png	https://goo.gl/maps/qSG6xTKUmrYpwmGQ6	https://www.openstreetmap.org/relation/214885	UTC+01:00	Europe	45.1666667	15.5000000	4047200	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
65	Morocco	Kingdom of Morocco	MAR	Africa	Northern Africa	{"ara":"Arabic","ber":"Berber"}	{"MAD":{"name":"Moroccan dirham","symbol":"د.م."}}	Rabat	https://flagcdn.com/w320/ma.png	https://goo.gl/maps/6oMv3dyBZg3iaXQ5A	https://www.openstreetmap.org/relation/3630439	UTC	Africa	32.0000000	-5.0000000	36910558	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
66	Algeria	People's Democratic Republic of Algeria	DZA	Africa	Northern Africa	{"ara":"Arabic"}	{"DZD":{"name":"Algerian dinar","symbol":"د.ج"}}	Algiers	https://flagcdn.com/w320/dz.png	https://goo.gl/maps/RsAyAfyaiNVb8DpW8	https://www.openstreetmap.org/relation/192756	UTC+01:00	Africa	28.0000000	3.0000000	44700000	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
67	Antarctica	Antarctica	ATA	Antarctic	\N	{}	{}	\N	https://flagcdn.com/w320/aq.png	https://goo.gl/maps/kyBuJriu4itiXank7	https://www.openstreetmap.org/node/36966060	UTC-03:00	Antarctica	-90.0000000	0.0000000	1000	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
68	Netherlands	Kingdom of the Netherlands	NLD	Europe	Western Europe	{"nld":"Dutch"}	{"EUR":{"name":"Euro","symbol":"€"}}	Amsterdam	https://flagcdn.com/w320/nl.png	https://goo.gl/maps/Hv6zQswGhFxoVVBm6	https://www.openstreetmap.org/relation/47796	UTC+01:00	Europe	52.5000000	5.7500000	16655799	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
69	Sudan	Republic of the Sudan	SDN	Africa	Northern Africa	{"ara":"Arabic","eng":"English"}	{"SDG":{"name":"Sudanese pound","symbol":"ج.س"}}	Khartoum	https://flagcdn.com/w320/sd.png	https://goo.gl/maps/bNW7YUJCaqR8zcXn7	https://www.openstreetmap.org/relation/192789	UTC+03:00	Africa	15.0000000	30.0000000	43849269	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
70	Fiji	Republic of Fiji	FJI	Oceania	Melanesia	{"eng":"English","fij":"Fijian","hif":"Fiji Hindi"}	{"FJD":{"name":"Fijian dollar","symbol":"$"}}	Suva	https://flagcdn.com/w320/fj.png	https://goo.gl/maps/r9fhDqoLZdg1zmE99	https://www.openstreetmap.org/relation/571747	UTC+12:00	Oceania	17.7134000	178.0650000	896444	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
71	Liechtenstein	Principality of Liechtenstein	LIE	Europe	Western Europe	{"deu":"German"}	{"CHF":{"name":"Swiss franc","symbol":"Fr"}}	Vaduz	https://flagcdn.com/w320/li.png	https://goo.gl/maps/KNuHeiJzAPodwM7y6	https://www.openstreetmap.org/relation/1155955	UTC+01:00	Europe	47.2666667	9.5333333	38137	t	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
72	Nepal	Federal Democratic Republic of Nepal	NPL	Asia	Southern Asia	{"nep":"Nepali"}	{"NPR":{"name":"Nepalese rupee","symbol":"₨"}}	Kathmandu	https://flagcdn.com/w320/np.png	https://goo.gl/maps/UMj2zpbQp7B5c3yT7	https://www.openstreetmap.org/relation/184633	UTC+05:45	Asia	28.0000000	84.0000000	29136808	t	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
73	Puerto Rico	Commonwealth of Puerto Rico	PRI	Americas	Caribbean	{"eng":"English","spa":"Spanish"}	{"USD":{"name":"United States dollar","symbol":"$"}}	San Juan	https://flagcdn.com/w320/pr.png	https://goo.gl/maps/sygfDbtwn389wu8x5	https://www.openstreetmap.org/relation/4422604	UTC-04:00	North America	18.2500000	-66.5000000	3194034	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
74	Georgia	Georgia	GEO	Asia	Western Asia	{"kat":"Georgian"}	{"GEL":{"name":"lari","symbol":"₾"}}	Tbilisi	https://flagcdn.com/w320/ge.png	https://goo.gl/maps/bvCaGBePR1ZEDK5cA	https://www.openstreetmap.org/relation/28699	UTC+04:00	Asia	42.0000000	43.5000000	3714000	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
75	Pakistan	Islamic Republic of Pakistan	PAK	Asia	Southern Asia	{"eng":"English","urd":"Urdu"}	{"PKR":{"name":"Pakistani rupee","symbol":"₨"}}	Islamabad	https://flagcdn.com/w320/pk.png	https://goo.gl/maps/5LYujdfR5yLUXoERA	https://www.openstreetmap.org/relation/307573	UTC+05:00	Asia	30.0000000	70.0000000	220892331	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
76	Monaco	Principality of Monaco	MCO	Europe	Western Europe	{"fra":"French"}	{"EUR":{"name":"Euro","symbol":"€"}}	Monaco	https://flagcdn.com/w320/mc.png	https://goo.gl/maps/DGpndDot28bYdXYn7	https://www.openstreetmap.org/relation/1124039	UTC+01:00	Europe	43.7333333	7.4000000	39244	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
77	Botswana	Republic of Botswana	BWA	Africa	Southern Africa	{"eng":"English","tsn":"Tswana"}	{"BWP":{"name":"Botswana pula","symbol":"P"}}	Gaborone	https://flagcdn.com/w320/bw.png	https://goo.gl/maps/E364KeLy6N4JwxwQ8	https://www.openstreetmap.org/relation/1889339	UTC+02:00	Africa	-22.0000000	24.0000000	2351625	t	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
78	Lebanon	Lebanese Republic	LBN	Asia	Western Asia	{"ara":"Arabic","fra":"French"}	{"LBP":{"name":"Lebanese pound","symbol":"ل.ل"}}	Beirut	https://flagcdn.com/w320/lb.png	https://goo.gl/maps/Sz5VCU8UFBqMyTdc9	https://www.openstreetmap.org/relation/184843	UTC+02:00	Asia	33.8333333	35.8333333	6825442	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
79	Papua New Guinea	Independent State of Papua New Guinea	PNG	Oceania	Melanesia	{"eng":"English","hmo":"Hiri Motu","tpi":"Tok Pisin"}	{"PGK":{"name":"Papua New Guinean kina","symbol":"K"}}	Port Moresby	https://flagcdn.com/w320/pg.png	https://goo.gl/maps/ChGmzZBjZ3vnBwR2A	https://goo.gl/maps/ChGmzZBjZ3vnBwR2A	UTC+10:00	Oceania	-6.0000000	147.0000000	8947027	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
80	Mayotte	Department of Mayotte	MYT	Africa	Eastern Africa	{"fra":"French"}	{"EUR":{"name":"Euro","symbol":"€"}}	Mamoudzou	https://flagcdn.com/w320/yt.png	https://goo.gl/maps/1e7MXmfBwQv3TQGF7	https://www.openstreetmap.org/relation/1259885	UTC+03:00	Africa	-12.8333333	45.1666667	226915	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
81	Dominican Republic	Dominican Republic	DOM	Americas	Caribbean	{"spa":"Spanish"}	{"DOP":{"name":"Dominican peso","symbol":"$"}}	Santo Domingo	https://flagcdn.com/w320/do.png	https://goo.gl/maps/soxooTHxEeiAbn3UA	https://www.openstreetmap.org/relation/307828	UTC-04:00	North America	19.0000000	-70.6666667	10847904	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
82	Norfolk Island	Territory of Norfolk Island	NFK	Oceania	Australia and New Zealand	{"eng":"English","pih":"Norfuk"}	{"AUD":{"name":"Australian dollar","symbol":"$"}}	Kingston	https://flagcdn.com/w320/nf.png	https://goo.gl/maps/pbvtm6XYd1iZbjky5	https://www.openstreetmap.org/relation/2574988	UTC+11:30	Oceania	-29.0333333	167.9500000	2302	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
83	Bouvet Island	Bouvet Island	BVT	Antarctic	\N	{"nor":"Norwegian"}	{}	\N	https://flagcdn.com/w320/bv.png	https://goo.gl/maps/7WRQAEKZb4uK36yi9	https://www.openstreetmap.org/way/174996681	UTC+01:00	Antarctica	54.4208000	3.3464000	\N	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
84	Qatar	State of Qatar	QAT	Asia	Western Asia	{"ara":"Arabic"}	{"QAR":{"name":"Qatari riyal","symbol":"ر.ق"}}	Doha	https://flagcdn.com/w320/qa.png	https://goo.gl/maps/ZV76Y49z7LLUZ2KQ6	https://www.openstreetmap.org/relation/305095	UTC+03:00	Asia	25.5000000	51.2500000	2881060	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
85	Madagascar	Republic of Madagascar	MDG	Africa	Eastern Africa	{"fra":"French","mlg":"Malagasy"}	{"MGA":{"name":"Malagasy ariary","symbol":"Ar"}}	Antananarivo	https://flagcdn.com/w320/mg.png	https://goo.gl/maps/AHQh2ABBaFW6Ngj26	https://www.openstreetmap.org/relation/447325	UTC+03:00	Africa	-20.0000000	47.0000000	27691019	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
86	India	Republic of India	IND	Asia	Southern Asia	{"eng":"English","hin":"Hindi","tam":"Tamil"}	{"INR":{"name":"Indian rupee","symbol":"₹"}}	New Delhi	https://flagcdn.com/w320/in.png	https://goo.gl/maps/WSk3fLwG4vtPQetp7	https://www.openstreetmap.org/relation/304716	UTC+05:30	Asia	20.0000000	77.0000000	1380004385	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
87	Syria	Syrian Arab Republic	SYR	Asia	Western Asia	{"ara":"Arabic"}	{"SYP":{"name":"Syrian pound","symbol":"£"}}	Damascus	https://flagcdn.com/w320/sy.png	https://goo.gl/maps/Xe3VnFbwdb4nv2SM9	https://www.openstreetmap.org/relation/184840	UTC+02:00	Asia	35.0000000	38.0000000	17500657	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
88	Montenegro	Montenegro	MNE	Europe	Southeast Europe	{"cnr":"Montenegrin"}	{"EUR":{"name":"Euro","symbol":"€"}}	Podgorica	https://flagcdn.com/w320/me.png	https://goo.gl/maps/4THX1fM7WqANuPbB8	https://www.openstreetmap.org/relation/53296	UTC+01:00	Europe	42.5000000	19.3000000	621718	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
89	Eswatini	Kingdom of Eswatini	SWZ	Africa	Southern Africa	{"eng":"English","ssw":"Swazi"}	{"SZL":{"name":"Swazi lilangeni","symbol":"L"},"ZAR":{"name":"South African rand","symbol":"R"}}	Mbabane	https://flagcdn.com/w320/sz.png	https://goo.gl/maps/cUY79eqQihFSE8hV6	https://www.openstreetmap.org/relation/88210	UTC+02:00	Africa	-26.5000000	31.5000000	1160164	t	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
90	Paraguay	Republic of Paraguay	PRY	Americas	South America	{"grn":"Guaraní","spa":"Spanish"}	{"PYG":{"name":"Paraguayan guaraní","symbol":"₲"}}	Asunción	https://flagcdn.com/w320/py.png	https://goo.gl/maps/JtnqG73WJn1Gx6mz6	https://www.openstreetmap.org/relation/287077	UTC-04:00	South America	-23.0000000	-58.0000000	7132530	t	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
91	El Salvador	Republic of El Salvador	SLV	Americas	Central America	{"spa":"Spanish"}	{"USD":{"name":"United States dollar","symbol":"$"}}	San Salvador	https://flagcdn.com/w320/sv.png	https://goo.gl/maps/cZnCEi5sEMQtKKcB7	https://www.openstreetmap.org/relation/1520612	UTC-06:00	North America	13.8333333	-88.9166667	6486201	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
92	Ukraine	Ukraine	UKR	Europe	Eastern Europe	{"ukr":"Ukrainian"}	{"UAH":{"name":"Ukrainian hryvnia","symbol":"₴"}}	Kyiv	https://flagcdn.com/w320/ua.png	https://goo.gl/maps/DvgJMiPJ7aozKFZv7	https://www.openstreetmap.org/relation/60199	UTC+02:00	Europe	49.0000000	32.0000000	44134693	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
93	Isle of Man	Isle of Man	IMN	Europe	Northern Europe	{"eng":"English","glv":"Manx"}	{"GBP":{"name":"British pound","symbol":"£"},"IMP":{"name":"Manx pound","symbol":"£"}}	Douglas	https://flagcdn.com/w320/im.png	https://goo.gl/maps/4DqVHDgVaFgnh8ZV8	https://www.openstreetmap.org/relation/62269	UTC+00:00	Europe	54.2500000	-4.5000000	85032	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
94	Namibia	Republic of Namibia	NAM	Africa	Southern Africa	{"afr":"Afrikaans","deu":"German","eng":"English","her":"Herero","hgm":"Khoekhoe","kwn":"Kwangali","loz":"Lozi","ndo":"Ndonga","tsn":"Tswana"}	{"NAD":{"name":"Namibian dollar","symbol":"$"},"ZAR":{"name":"South African rand","symbol":"R"}}	Windhoek	https://flagcdn.com/w320/na.png	https://goo.gl/maps/oR1i8BFEYX3EY83WA	https://www.openstreetmap.org/relation/195266	UTC+01:00	Africa	-22.0000000	17.0000000	2540916	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
95	United Arab Emirates	United Arab Emirates	ARE	Asia	Western Asia	{"ara":"Arabic"}	{"AED":{"name":"United Arab Emirates dirham","symbol":"د.إ"}}	Abu Dhabi	https://flagcdn.com/w320/ae.png	https://goo.gl/maps/AZZTDA6GzVAnKMVd8	https://www.openstreetmap.org/relation/307763	UTC+04:00	Asia	24.0000000	54.0000000	9890400	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
96	Bulgaria	Republic of Bulgaria	BGR	Europe	Southeast Europe	{"bul":"Bulgarian"}	{"BGN":{"name":"Bulgarian lev","symbol":"лв"}}	Sofia	https://flagcdn.com/w320/bg.png	https://goo.gl/maps/F5uAhDGWzc3BrHfm9	https://www.openstreetmap.org/relation/186382	UTC+02:00	Europe	43.0000000	25.0000000	6927288	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
97	Greenland	Greenland	GRL	Americas	North America	{"kal":"Greenlandic"}	{"DKK":{"name":"krone","symbol":"kr."}}	Nuuk	https://flagcdn.com/w320/gl.png	https://goo.gl/maps/j3289UPEQXt1ceSy8	https://www.openstreetmap.org/relation/2184073	UTC-04:00	North America	72.0000000	-40.0000000	56367	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
98	Germany	Federal Republic of Germany	DEU	Europe	Western Europe	{"deu":"German"}	{"EUR":{"name":"Euro","symbol":"€"}}	Berlin	https://flagcdn.com/w320/de.png	https://goo.gl/maps/mD9FBMq1nvXUBrkv6	https://www.openstreetmap.org/relation/51477	UTC+01:00	Europe	51.0000000	9.0000000	83240525	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
99	Cambodia	Kingdom of Cambodia	KHM	Asia	South-Eastern Asia	{"khm":"Khmer"}	{"KHR":{"name":"Cambodian riel","symbol":"៛"},"USD":{"name":"United States dollar","symbol":"$"}}	Phnom Penh	https://flagcdn.com/w320/kh.png	https://goo.gl/maps/nztQtFSrUXZymJaW8	https://www.openstreetmap.org/relation/49898	UTC+07:00	Asia	13.0000000	105.0000000	16718971	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
100	Iraq	Republic of Iraq	IRQ	Asia	Western Asia	{"ara":"Arabic","arc":"Aramaic","ckb":"Sorani"}	{"IQD":{"name":"Iraqi dinar","symbol":"ع.د"}}	Baghdad	https://flagcdn.com/w320/iq.png	https://goo.gl/maps/iL8Bmy1sUCW9fUk18	https://www.openstreetmap.org/relation/304934	UTC+03:00	Asia	33.0000000	44.0000000	40222503	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
101	French Southern and Antarctic Lands	Territory of the French Southern and Antarctic Lands	ATF	Antarctic	\N	{"fra":"French"}	{"EUR":{"name":"Euro","symbol":"€"}}	Port-aux-Français	https://flagcdn.com/w320/tf.png	https://goo.gl/maps/6ua6CX1m4w1xF2Em7	https://www.openstreetmap.org/relation/2186658	UTC+05:00	Antarctica	-49.2500000	69.1670000	400	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
102	Sweden	Kingdom of Sweden	SWE	Europe	Northern Europe	{"swe":"Swedish"}	{"SEK":{"name":"Swedish krona","symbol":"kr"}}	Stockholm	https://flagcdn.com/w320/se.png	https://goo.gl/maps/iqygE491ADVgnBW39	https://www.openstreetmap.org/relation/52822	UTC+01:00	Europe	62.0000000	15.0000000	10353442	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
103	Cuba	Republic of Cuba	CUB	Americas	Caribbean	{"spa":"Spanish"}	{"CUC":{"name":"Cuban convertible peso","symbol":"$"},"CUP":{"name":"Cuban peso","symbol":"$"}}	Havana	https://flagcdn.com/w320/cu.png	https://goo.gl/maps/1dDw1QfZspfMUTm99	https://www.openstreetmap.org/relation/307833	UTC-05:00	North America	21.5000000	-80.0000000	11326616	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
104	Kyrgyzstan	Kyrgyz Republic	KGZ	Asia	Central Asia	{"kir":"Kyrgyz","rus":"Russian"}	{"KGS":{"name":"Kyrgyzstani som","symbol":"с"}}	Bishkek	https://flagcdn.com/w320/kg.png	https://goo.gl/maps/SKG8BSMMQVvxkRkB7	https://www.openstreetmap.org/relation/178009	UTC+06:00	Asia	41.0000000	75.0000000	6591600	t	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
105	Russia	Russian Federation	RUS	Europe	Eastern Europe	{"rus":"Russian"}	{"RUB":{"name":"Russian ruble","symbol":"₽"}}	Moscow	https://flagcdn.com/w320/ru.png	https://goo.gl/maps/4F4PpDhGJgVvLby57	https://www.openstreetmap.org/relation/60189#map=3/65.15/105.29	UTC+03:00	Europe	60.0000000	100.0000000	144104080	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
106	Malaysia	Malaysia	MYS	Asia	South-Eastern Asia	{"eng":"English","msa":"Malay"}	{"MYR":{"name":"Malaysian ringgit","symbol":"RM"}}	Kuala Lumpur	https://flagcdn.com/w320/my.png	https://goo.gl/maps/qrY1PNeUXGyXDcPy6	https://www.openstreetmap.org/relation/2108121	UTC+08:00	Asia	2.5000000	112.5000000	32365998	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
107	São Tomé and Príncipe	Democratic Republic of São Tomé and Príncipe	STP	Africa	Middle Africa	{"por":"Portuguese"}	{"STN":{"name":"São Tomé and Príncipe dobra","symbol":"Db"}}	São Tomé	https://flagcdn.com/w320/st.png	https://goo.gl/maps/9EUppm13RtPX9oF46	https://www.openstreetmap.org/relation/535880	UTC	Africa	1.0000000	7.0000000	219161	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
108	Cyprus	Republic of Cyprus	CYP	Europe	Southern Europe	{"ell":"Greek","tur":"Turkish"}	{"EUR":{"name":"Euro","symbol":"€"}}	Nicosia	https://flagcdn.com/w320/cy.png	https://goo.gl/maps/77hPBRdLid8yD5Bm7	https://www.openstreetmap.org/relation/307787	UTC+02:00	Europe	35.0000000	33.0000000	1207361	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
109	Canada	Canada	CAN	Americas	North America	{"eng":"English","fra":"French"}	{"CAD":{"name":"Canadian dollar","symbol":"$"}}	Ottawa	https://flagcdn.com/w320/ca.png	https://goo.gl/maps/jmEVLugreeqiZXxbA	https://www.openstreetmap.org/relation/1428125	UTC-08:00	North America	60.0000000	-95.0000000	38005238	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
110	Malawi	Republic of Malawi	MWI	Africa	Eastern Africa	{"eng":"English","nya":"Chewa"}	{"MWK":{"name":"Malawian kwacha","symbol":"MK"}}	Lilongwe	https://flagcdn.com/w320/mw.png	https://goo.gl/maps/mc6z83pW9m98X2Ef6	https://www.openstreetmap.org/relation/195290	UTC+02:00	Africa	-13.5000000	34.0000000	19129955	t	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
111	Saudi Arabia	Kingdom of Saudi Arabia	SAU	Asia	Western Asia	{"ara":"Arabic"}	{"SAR":{"name":"Saudi riyal","symbol":"ر.س"}}	Riyadh	https://flagcdn.com/w320/sa.png	https://goo.gl/maps/5PSjvdJ1AyaLFRrG9	https://www.openstreetmap.org/relation/307584	UTC+03:00	Asia	25.0000000	45.0000000	34813867	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
112	Bosnia and Herzegovina	Bosnia and Herzegovina	BIH	Europe	Southeast Europe	{"bos":"Bosnian","hrv":"Croatian","srp":"Serbian"}	{"BAM":{"name":"Bosnia and Herzegovina convertible mark","symbol":"KM"}}	Sarajevo	https://flagcdn.com/w320/ba.png	https://www.google.com/maps/place/Bosnia+and+Herzegovina	https://www.openstreetmap.org/relation/2528142	UTC+01:00	Europe	44.0000000	18.0000000	3280815	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
113	Ethiopia	Federal Democratic Republic of Ethiopia	ETH	Africa	Eastern Africa	{"amh":"Amharic"}	{"ETB":{"name":"Ethiopian birr","symbol":"Br"}}	Addis Ababa	https://flagcdn.com/w320/et.png	https://goo.gl/maps/2Q4hQWCbhuZLj3fG6	https://www.openstreetmap.org/relation/192800	UTC+03:00	Africa	8.0000000	38.0000000	114963583	t	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
114	Spain	Kingdom of Spain	ESP	Europe	Southern Europe	{"spa":"Spanish","cat":"Catalan","eus":"Basque","glc":"Galician"}	{"EUR":{"name":"Euro","symbol":"€"}}	Madrid	https://flagcdn.com/w320/es.png	https://goo.gl/maps/138JaXW8EZzRVitY9	https://www.openstreetmap.org/relation/1311341	UTC	Europe	40.0000000	-4.0000000	47351567	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
115	Slovenia	Republic of Slovenia	SVN	Europe	Central Europe	{"slv":"Slovene"}	{"EUR":{"name":"Euro","symbol":"€"}}	Ljubljana	https://flagcdn.com/w320/si.png	https://goo.gl/maps/7zgFmswcCJh5L5D49	https://www.openstreetmap.org/relation/218657	UTC+01:00	Europe	46.1166667	14.8166667	2100126	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
116	Oman	Sultanate of Oman	OMN	Asia	Western Asia	{"ara":"Arabic"}	{"OMR":{"name":"Omani rial","symbol":"ر.ع."}}	Muscat	https://flagcdn.com/w320/om.png	https://goo.gl/maps/L2BoXoAwDDwWecnw5	https://www.openstreetmap.org/relation/305138	UTC+04:00	Asia	21.0000000	57.0000000	5106622	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
117	Saint Pierre and Miquelon	Saint Pierre and Miquelon	SPM	Americas	North America	{"fra":"French"}	{"EUR":{"name":"Euro","symbol":"€"}}	Saint-Pierre	https://flagcdn.com/w320/pm.png	https://goo.gl/maps/bUM8Yc8pA8ghyhmt6	https://www.openstreetmap.org/relation/3406826	UTC-03:00	North America	46.8333333	-56.3333333	6069	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
118	Macau	Macao Special Administrative Region of the People's Republic of China	MAC	Asia	Eastern Asia	{"por":"Portuguese","zho":"Chinese"}	{"MOP":{"name":"Macanese pataca","symbol":"P"}}	\N	https://flagcdn.com/w320/mo.png	https://goo.gl/maps/whymRdk3dZFfAAs4A	https://www.openstreetmap.org/relation/1867188	UTC+08:00	Asia	22.1666667	113.5500000	649342	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
119	San Marino	Republic of San Marino	SMR	Europe	Southern Europe	{"ita":"Italian"}	{"EUR":{"name":"Euro","symbol":"€"}}	City of San Marino	https://flagcdn.com/w320/sm.png	https://goo.gl/maps/rxCVJjm8dVY93RPY8	https://www.openstreetmap.org/relation/54624	UTC+01:00	Europe	43.7666667	12.4166667	33938	t	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
120	Lesotho	Kingdom of Lesotho	LSO	Africa	Southern Africa	{"eng":"English","sot":"Sotho"}	{"LSL":{"name":"Lesotho loti","symbol":"L"},"ZAR":{"name":"South African rand","symbol":"R"}}	Maseru	https://flagcdn.com/w320/ls.png	https://goo.gl/maps/H8gJi5mL4Cmd1SF28	https://www.openstreetmap.org/relation/2093234	UTC+02:00	Africa	-29.5000000	28.5000000	2142252	t	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
121	Marshall Islands	Republic of the Marshall Islands	MHL	Oceania	Micronesia	{"eng":"English","mah":"Marshallese"}	{"USD":{"name":"United States dollar","symbol":"$"}}	Majuro	https://flagcdn.com/w320/mh.png	https://goo.gl/maps/A4xLi1XvcX88gi3W8	https://www.openstreetmap.org/relation/571771	UTC+12:00	Oceania	9.0000000	168.0000000	59194	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
122	Sint Maarten	Sint Maarten	SXM	Americas	Caribbean	{"eng":"English","fra":"French","nld":"Dutch"}	{"ANG":{"name":"Netherlands Antillean guilder","symbol":"ƒ"}}	Philipsburg	https://flagcdn.com/w320/sx.png	https://goo.gl/maps/DjvcESy1a1oGEZuNA	https://www.openstreetmap.org/relation/1231790	UTC-04:00	North America	18.0333330	-63.0500000	40812	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
123	Iceland	Iceland	ISL	Europe	Northern Europe	{"isl":"Icelandic"}	{"ISK":{"name":"Icelandic króna","symbol":"kr"}}	Reykjavik	https://flagcdn.com/w320/is.png	https://goo.gl/maps/WxFWSQuc3oamNxoE6	https://www.openstreetmap.org/relation/299133	UTC	Europe	65.0000000	-18.0000000	366425	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
124	Luxembourg	Grand Duchy of Luxembourg	LUX	Europe	Western Europe	{"deu":"German","fra":"French","ltz":"Luxembourgish"}	{"EUR":{"name":"Euro","symbol":"€"}}	Luxembourg	https://flagcdn.com/w320/lu.png	https://goo.gl/maps/L6b2AgndgHprt2Ko9	https://www.openstreetmap.org/relation/2171347#map=10/49.8167/6.1335	UTC+01:00	Europe	49.7500000	6.1666667	632275	t	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
125	Argentina	Argentine Republic	ARG	Americas	South America	{"grn":"Guaraní","spa":"Spanish"}	{"ARS":{"name":"Argentine peso","symbol":"$"}}	Buenos Aires	https://flagcdn.com/w320/ar.png	https://goo.gl/maps/Z9DXNxhf2o93kvyc6	https://www.openstreetmap.org/relation/286393	UTC-03:00	South America	-34.0000000	-64.0000000	45376763	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
126	Turks and Caicos Islands	Turks and Caicos Islands	TCA	Americas	Caribbean	{"eng":"English"}	{"USD":{"name":"United States dollar","symbol":"$"}}	Cockburn Town	https://flagcdn.com/w320/tc.png	https://goo.gl/maps/R8VUDQfwZiFtvmyn8	https://www.openstreetmap.org/relation/547479	UTC-04:00	North America	21.7500000	-71.5833333	38718	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
127	Nauru	Republic of Nauru	NRU	Oceania	Micronesia	{"eng":"English","nau":"Nauru"}	{"AUD":{"name":"Australian dollar","symbol":"$"}}	Yaren	https://flagcdn.com/w320/nr.png	https://goo.gl/maps/kyAGw6XEJgjSMsTK7	https://www.openstreetmap.org/relation/571804	UTC+12:00	Oceania	-0.5333333	166.9166667	10834	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
128	Cocos (Keeling) Islands	Territory of the Cocos (Keeling) Islands	CCK	Oceania	Australia and New Zealand	{"eng":"English"}	{"AUD":{"name":"Australian dollar","symbol":"$"}}	West Island	https://flagcdn.com/w320/cc.png	https://goo.gl/maps/3eCdKVpVfMcZyKcK6	https://www.openstreetmap.org/relation/82636	UTC+06:30	Asia	12.1642000	96.8710000	544	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
129	Western Sahara	Sahrawi Arab Democratic Republic	ESH	Africa	Northern Africa	{"ber":"Berber","mey":"Hassaniya","spa":"Spanish"}	{"DZD":{"name":"Algerian dinar","symbol":"دج"},"MAD":{"name":"Moroccan dirham","symbol":"DH"},"MRU":{"name":"Mauritanian ouguiya","symbol":"UM"}}	El Aaiún	https://flagcdn.com/w320/eh.png	https://goo.gl/maps/7nU3mB69vP6zQp7A8	https://www.openstreetmap.org/relation/5441968	UTC+00:00	Africa	24.5000000	-13.0000000	510713	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
130	Dominica	Commonwealth of Dominica	DMA	Americas	Caribbean	{"eng":"English"}	{"XCD":{"name":"Eastern Caribbean dollar","symbol":"$"}}	Roseau	https://flagcdn.com/w320/dm.png	https://goo.gl/maps/HSKdHYpFC8oHHuyV7	https://www.openstreetmap.org/relation/307823	UTC-04:00	North America	15.4166667	-61.3333333	71991	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
131	Costa Rica	Republic of Costa Rica	CRI	Americas	Central America	{"spa":"Spanish"}	{"CRC":{"name":"Costa Rican colón","symbol":"₡"}}	San José	https://flagcdn.com/w320/cr.png	https://goo.gl/maps/RFiwytjvNrpfKN7k6	https://www.openstreetmap.org/relation/287667	UTC-06:00	North America	10.0000000	-84.0000000	5094114	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
132	Australia	Commonwealth of Australia	AUS	Oceania	Australia and New Zealand	{"eng":"English"}	{"AUD":{"name":"Australian dollar","symbol":"$"}}	Canberra	https://flagcdn.com/w320/au.png	https://goo.gl/maps/DcjaDa7UbhnZTndH6	https://www.openstreetmap.org/relation/80500	UTC+05:00	Oceania	-27.0000000	133.0000000	25687041	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
133	Thailand	Kingdom of Thailand	THA	Asia	South-Eastern Asia	{"tha":"Thai"}	{"THB":{"name":"Thai baht","symbol":"฿"}}	Bangkok	https://flagcdn.com/w320/th.png	https://goo.gl/maps/qeU6uqsfW4nCCwzw9	https://www.openstreetmap.org/relation/2067731	UTC+07:00	Asia	15.0000000	100.0000000	69799978	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
134	Haiti	Republic of Haiti	HTI	Americas	Caribbean	{"fra":"French","hat":"Haitian Creole"}	{"HTG":{"name":"Haitian gourde","symbol":"G"}}	Port-au-Prince	https://flagcdn.com/w320/ht.png	https://goo.gl/maps/9o13xtjuUdqFnHbn9	https://www.openstreetmap.org/relation/307829	UTC-05:00	North America	19.0000000	-72.4166667	11402533	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
135	Tuvalu	Tuvalu	TUV	Oceania	Polynesia	{"eng":"English","tvl":"Tuvaluan"}	{"AUD":{"name":"Australian dollar","symbol":"$"},"TVD":{"name":"Tuvaluan dollar","symbol":"$"}}	Funafuti	https://flagcdn.com/w320/tv.png	https://goo.gl/maps/LbuUxtkgm1dfN1Pn6	https://www.openstreetmap.org/relation/2177266	UTC+12:00	Oceania	-8.0000000	178.0000000	11792	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
136	Honduras	Republic of Honduras	HND	Americas	Central America	{"spa":"Spanish"}	{"HNL":{"name":"Honduran lempira","symbol":"L"}}	Tegucigalpa	https://flagcdn.com/w320/hn.png	https://goo.gl/maps/BbeJK8Sk2VkMHbdF8	https://www.openstreetmap.org/relation/287670	UTC-06:00	North America	15.0000000	-86.5000000	9904608	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
137	Equatorial Guinea	Republic of Equatorial Guinea	GNQ	Africa	Middle Africa	{"fra":"French","por":"Portuguese","spa":"Spanish"}	{"XAF":{"name":"Central African CFA franc","symbol":"Fr"}}	Malabo	https://flagcdn.com/w320/gq.png	https://goo.gl/maps/ucWfFd8aW1FbGMva9	https://www.openstreetmap.org/relation/192791	UTC+01:00	Africa	2.0000000	10.0000000	1402985	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
138	Saint Lucia	Saint Lucia	LCA	Americas	Caribbean	{"eng":"English"}	{"XCD":{"name":"Eastern Caribbean dollar","symbol":"$"}}	Castries	https://flagcdn.com/w320/lc.png	https://goo.gl/maps/4HhJ2jkPdSL9BPRcA	https://www.openstreetmap.org/relation/550728	UTC-04:00	North America	13.8833333	-60.9666667	183629	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
139	French Polynesia	French Polynesia	PYF	Oceania	Polynesia	{"fra":"French"}	{"XPF":{"name":"CFP franc","symbol":"₣"}}	Papeetē	https://flagcdn.com/w320/pf.png	https://goo.gl/maps/xgg6BQTRyeQg4e1m6	https://www.openstreetmap.org/relation/3412620	UTC-10:00	Oceania	17.6797000	149.4068000	280904	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
140	Belarus	Republic of Belarus	BLR	Europe	Eastern Europe	{"bel":"Belarusian","rus":"Russian"}	{"BYN":{"name":"Belarusian ruble","symbol":"Br"}}	Minsk	https://flagcdn.com/w320/by.png	https://goo.gl/maps/PJUDU3EBPSszCQcu6	https://www.openstreetmap.org/relation/59065	UTC+03:00	Europe	53.0000000	28.0000000	9398861	t	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
141	Latvia	Republic of Latvia	LVA	Europe	Northern Europe	{"lav":"Latvian"}	{"EUR":{"name":"Euro","symbol":"€"}}	Riga	https://flagcdn.com/w320/lv.png	https://goo.gl/maps/iQpUkH7ghq31ZtXe9	https://www.openstreetmap.org/relation/72594	UTC+02:00	Europe	57.0000000	25.0000000	1901548	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
142	Palau	Republic of Palau	PLW	Oceania	Micronesia	{"eng":"English","pau":"Palauan"}	{"USD":{"name":"United States dollar","symbol":"$"}}	Ngerulmud	https://flagcdn.com/w320/pw.png	https://goo.gl/maps/MVasQBbUkQP7qQDR9	https://www.openstreetmap.org/relation/571805	UTC+09:00	Oceania	7.5000000	134.5000000	18092	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
143	Guadeloupe	Guadeloupe	GLP	Americas	Caribbean	{"fra":"French"}	{"EUR":{"name":"Euro","symbol":"€"}}	Basse-Terre	https://flagcdn.com/w320/gp.png	https://goo.gl/maps/Dy9R2EufJtoWm8UN9	https://www.openstreetmap.org/relation/7109289	UTC-04:00	North America	16.2500000	-61.5833330	400132	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
144	Philippines	Republic of the Philippines	PHL	Asia	South-Eastern Asia	{"eng":"English","fil":"Filipino"}	{"PHP":{"name":"Philippine peso","symbol":"₱"}}	Manila	https://flagcdn.com/w320/ph.png	https://goo.gl/maps/k8T2fb5VMUfsWFX6A	https://www.openstreetmap.org/relation/443174	UTC+08:00	Asia	13.0000000	122.0000000	109581085	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
145	Gibraltar	Gibraltar	GIB	Europe	Southern Europe	{"eng":"English"}	{"GIP":{"name":"Gibraltar pound","symbol":"£"}}	Gibraltar	https://flagcdn.com/w320/gi.png	https://goo.gl/maps/CEoHAs1t6byCBhHFA	https://www.openstreetmap.org/relation/1278736	UTC+01:00	Europe	36.1333333	-5.3500000	33691	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
146	Denmark	Kingdom of Denmark	DNK	Europe	Northern Europe	{"dan":"Danish"}	{"DKK":{"name":"Danish krone","symbol":"kr"}}	Copenhagen	https://flagcdn.com/w320/dk.png	https://goo.gl/maps/UddGPN7hAyrtpFiT6	https://www.openstreetmap.org/relation/50046	UTC-04:00	Europe	56.0000000	10.0000000	5831404	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
147	Cameroon	Republic of Cameroon	CMR	Africa	Middle Africa	{"eng":"English","fra":"French"}	{"XAF":{"name":"Central African CFA franc","symbol":"Fr"}}	Yaoundé	https://flagcdn.com/w320/cm.png	https://goo.gl/maps/JqiipHgFboG3rBJh9	https://www.openstreetmap.org/relation/192830	UTC+01:00	Africa	6.0000000	12.0000000	26545864	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
148	Guinea	Republic of Guinea	GIN	Africa	Western Africa	{"fra":"French"}	{"GNF":{"name":"Guinean franc","symbol":"Fr"}}	Conakry	https://flagcdn.com/w320/gn.png	https://goo.gl/maps/8J5oM5sA4Ayr1ZYGA	https://www.openstreetmap.org/relation/192778	UTC	Africa	11.0000000	-10.0000000	13132792	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
149	Bahrain	Kingdom of Bahrain	BHR	Asia	Western Asia	{"ara":"Arabic"}	{"BHD":{"name":"Bahraini dinar","symbol":".د.ب"}}	Manama	https://flagcdn.com/w320/bh.png	https://goo.gl/maps/5Zue99Zc6vFBHxzJ7	https://www.openstreetmap.org/relation/378734	UTC+03:00	Asia	26.0000000	50.5500000	1701583	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
150	Suriname	Republic of Suriname	SUR	Americas	South America	{"nld":"Dutch"}	{"SRD":{"name":"Surinamese dollar","symbol":"$"}}	Paramaribo	https://flagcdn.com/w320/sr.png	https://goo.gl/maps/iy7TuQLSi4qgoBoG7	https://www.openstreetmap.org/relation/287082	UTC-03:00	South America	4.0000000	-56.0000000	586634	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
151	DR Congo	Democratic Republic of the Congo	COD	Africa	Middle Africa	{"fra":"French","kon":"Kikongo","lin":"Lingala","lua":"Tshiluba","swa":"Swahili"}	{"CDF":{"name":"Congolese franc","symbol":"FC"}}	Kinshasa	https://flagcdn.com/w320/cd.png	https://goo.gl/maps/KfhNVn6VqdZXWu8n9	https://www.openstreetmap.org/relation/192795	UTC+01:00	Africa	0.0000000	25.0000000	108407721	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
152	Somalia	Federal Republic of Somalia	SOM	Africa	Eastern Africa	{"ara":"Arabic","som":"Somali"}	{"SOS":{"name":"Somali shilling","symbol":"Sh"}}	Mogadishu	https://flagcdn.com/w320/so.png	https://goo.gl/maps/8of8q7D1a8p7R6Fc9	https://www.openstreetmap.org/relation/192799	UTC+03:00	Africa	10.0000000	49.0000000	15893219	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
153	Czechia	Czech Republic	CZE	Europe	Central Europe	{"ces":"Czech","slk":"Slovak"}	{"CZK":{"name":"Czech koruna","symbol":"Kč"}}	Prague	https://flagcdn.com/w320/cz.png	https://goo.gl/maps/47dmgeXMZyhDHyQW8	https://www.openstreetmap.org/relation/51684	UTC+01:00	Europe	49.7500000	15.5000000	10698896	t	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
154	New Caledonia	New Caledonia	NCL	Oceania	Melanesia	{"fra":"French"}	{"XPF":{"name":"CFP franc","symbol":"₣"}}	Nouméa	https://flagcdn.com/w320/nc.png	https://goo.gl/maps/cBhtCeMdob4U7FRU9	https://www.openstreetmap.org/relation/3407643	UTC+11:00	Oceania	-21.5000000	165.5000000	271960	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
222	Albania	Republic of Albania	ALB	Europe	Southeast Europe	{"sqi":"Albanian"}	{"ALL":{"name":"Albanian lek","symbol":"L"}}	Tirana	https://flagcdn.com/w320/al.png	https://goo.gl/maps/BzN9cTuj68ZA8SyZ8	https://www.openstreetmap.org/relation/53292	UTC+01:00	Europe	41.0000000	20.0000000	2837743	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
155	Vanuatu	Republic of Vanuatu	VUT	Oceania	Melanesia	{"bis":"Bislama","eng":"English","fra":"French"}	{"VUV":{"name":"Vanuatu vatu","symbol":"Vt"}}	Port Vila	https://flagcdn.com/w320/vu.png	https://goo.gl/maps/hwAjehcT7VfvP5zJ8	https://www.openstreetmap.org/relation/2177246	UTC+11:00	Oceania	-16.0000000	167.0000000	307150	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
156	Saint Helena, Ascension and Tristan da Cunha	Saint Helena, Ascension and Tristan da Cunha	SHN	Africa	Western Africa	{"eng":"English"}	{"GBP":{"name":"Pound sterling","symbol":"£"},"SHP":{"name":"Saint Helena pound","symbol":"£"}}	Jamestown	https://flagcdn.com/w320/sh.png	https://goo.gl/maps/iv4VxnPzHkjLCJuc6	https://www.openstreetmap.org/relation/4868269#map=13/-15.9657/-5.7120	UTC+00:00	Africa	-15.9500000	-5.7200000	53192	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
157	Togo	Togolese Republic	TGO	Africa	Western Africa	{"fra":"French"}	{"XOF":{"name":"West African CFA franc","symbol":"Fr"}}	Lomé	https://flagcdn.com/w320/tg.png	https://goo.gl/maps/jzAa9feXuXPrKVb89	https://www.openstreetmap.org/relation/192782	UTC	Africa	8.0000000	1.1666667	8278737	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
158	British Virgin Islands	Virgin Islands	VGB	Americas	Caribbean	{"eng":"English"}	{"USD":{"name":"United States dollar","symbol":"$"}}	Road Town	https://flagcdn.com/w320/vg.png	https://goo.gl/maps/49C9cSesNVAR9DQk8	https://www.openstreetmap.org/relation/285454	UTC-04:00	North America	18.4313830	-64.6230500	30237	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
159	Kenya	Republic of Kenya	KEN	Africa	Eastern Africa	{"eng":"English","swa":"Swahili"}	{"KES":{"name":"Kenyan shilling","symbol":"Sh"}}	Nairobi	https://flagcdn.com/w320/ke.png	https://goo.gl/maps/Ni9M7wcCxf8bJHLX8	https://www.openstreetmap.org/relation/192798	UTC+03:00	Africa	1.0000000	38.0000000	53771300	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
160	Niue	Niue	NIU	Oceania	Polynesia	{"eng":"English","niu":"Niuean"}	{"NZD":{"name":"New Zealand dollar","symbol":"$"}}	Alofi	https://flagcdn.com/w320/nu.png	https://goo.gl/maps/xFgdzs3E55Rk1y8P9	https://www.openstreetmap.org/relation/1558556	UTC-11:00	Oceania	-19.0333333	-169.8666667	1470	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
161	Heard Island and McDonald Islands	Heard Island and McDonald Islands	HMD	Antarctic	\N	{"eng":"English"}	{}	\N	https://flagcdn.com/w320/hm.png	https://goo.gl/maps/k5FBAiVaVyozuYeA7	https://www.openstreetmap.org/relation/2177227	UTC+05:00	Antarctica	53.0818000	73.5042000	\N	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
162	Rwanda	Republic of Rwanda	RWA	Africa	Eastern Africa	{"eng":"English","fra":"French","kin":"Kinyarwanda"}	{"RWF":{"name":"Rwandan franc","symbol":"Fr"}}	Kigali	https://flagcdn.com/w320/rw.png	https://goo.gl/maps/j5xb5r7CLqjYbyP86	https://www.openstreetmap.org/relation/171496	UTC+02:00	Africa	-2.0000000	30.0000000	12952209	t	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
163	Estonia	Republic of Estonia	EST	Europe	Northern Europe	{"est":"Estonian"}	{"EUR":{"name":"Euro","symbol":"€"}}	Tallinn	https://flagcdn.com/w320/ee.png	https://goo.gl/maps/6SsynwGUodL1sDvq8	https://www.openstreetmap.org/relation/79510	UTC+02:00	Europe	59.0000000	26.0000000	1331057	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
164	Romania	Romania	ROU	Europe	Southeast Europe	{"ron":"Romanian"}	{"RON":{"name":"Romanian leu","symbol":"lei"}}	Bucharest	https://flagcdn.com/w320/ro.png	https://goo.gl/maps/845hAgCf1mDkN3vr7	https://www.openstreetmap.org/relation/90689	UTC+02:00	Europe	46.0000000	25.0000000	19286123	f	2025-02-21 19:13:17.746+02	2025-02-21 19:13:17.746+02
165	Trinidad and Tobago	Republic of Trinidad and Tobago	TTO	Americas	Caribbean	{"eng":"English"}	{"TTD":{"name":"Trinidad and Tobago dollar","symbol":"$"}}	Port of Spain	https://flagcdn.com/w320/tt.png	https://goo.gl/maps/NrRfDEWoG8FGZqWY7	https://www.openstreetmap.org/relation/555717	UTC-04:00	North America	10.6918000	-61.2225000	1399491	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
166	Guyana	Co-operative Republic of Guyana	GUY	Americas	South America	{"eng":"English"}	{"GYD":{"name":"Guyanese dollar","symbol":"$"}}	Georgetown	https://flagcdn.com/w320/gy.png	https://goo.gl/maps/DFsme2xEeugUAsCx5	https://www.openstreetmap.org/relation/287083	UTC-04:00	South America	5.0000000	-59.0000000	786559	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
167	Timor-Leste	Democratic Republic of Timor-Leste	TLS	Asia	South-Eastern Asia	{"por":"Portuguese","tet":"Tetum"}	{"USD":{"name":"United States dollar","symbol":"$"}}	Dili	https://flagcdn.com/w320/tl.png	https://goo.gl/maps/sFqBC9zjgUXPR1iTA	https://www.openstreetmap.org/relation/305142	UTC+09:00	Oceania	-8.8333333	125.9166667	1318442	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
168	Vietnam	Socialist Republic of Vietnam	VNM	Asia	South-Eastern Asia	{"vie":"Vietnamese"}	{"VND":{"name":"Vietnamese đồng","symbol":"₫"}}	Hanoi	https://flagcdn.com/w320/vn.png	https://goo.gl/maps/PCpVt9WzdJ9A9nEZ9	https://www.openstreetmap.org/relation/49915	UTC+07:00	Asia	16.1666667	107.8333333	97338583	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
169	Uruguay	Oriental Republic of Uruguay	URY	Americas	South America	{"spa":"Spanish"}	{"UYU":{"name":"Uruguayan peso","symbol":"$"}}	Montevideo	https://flagcdn.com/w320/uy.png	https://goo.gl/maps/tiQ9Baekb1jQtDSD9	https://www.openstreetmap.org/relation/287072	UTC-03:00	South America	-33.0000000	-56.0000000	3473727	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
170	Vatican City	Vatican City State	VAT	Europe	Southern Europe	{"ita":"Italian","lat":"Latin"}	{"EUR":{"name":"Euro","symbol":"€"}}	Vatican City	https://flagcdn.com/w320/va.png	https://goo.gl/maps/DTKvw5Bd1QZaDZmE8	https://www.openstreetmap.org/relation/36989	UTC+01:00	Europe	41.9000000	12.4500000	451	t	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
171	Hong Kong	Hong Kong Special Administrative Region of the People's Republic of China	HKG	Asia	Eastern Asia	{"eng":"English","zho":"Chinese"}	{"HKD":{"name":"Hong Kong dollar","symbol":"$"}}	City of Victoria	https://flagcdn.com/w320/hk.png	https://goo.gl/maps/1sEnNmT47ffrC8MU8	https://www.openstreetmap.org/relation/913110	UTC+08:00	Asia	22.2670000	114.1880000	7500700	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
172	Austria	Republic of Austria	AUT	Europe	Central Europe	{"de":"German"}	{"EUR":{"name":"Euro","symbol":"€"}}	Vienna	https://flagcdn.com/w320/at.png	https://goo.gl/maps/pCWpWQhznHyRzQcu9	https://www.openstreetmap.org/relation/16239	UTC+01:00	Europe	47.3333333	13.3333333	8917205	t	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
173	Antigua and Barbuda	Antigua and Barbuda	ATG	Americas	Caribbean	{"eng":"English"}	{"XCD":{"name":"Eastern Caribbean dollar","symbol":"$"}}	Saint John's	https://flagcdn.com/w320/ag.png	https://goo.gl/maps/fnye4wGJ1RzC9jpX9	https://www.openstreetmap.org/relation/536900	UTC-04:00	North America	17.0500000	-61.8000000	97928	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
174	Turkmenistan	Turkmenistan	TKM	Asia	Central Asia	{"rus":"Russian","tuk":"Turkmen"}	{"TMT":{"name":"Turkmenistan manat","symbol":"m"}}	Ashgabat	https://flagcdn.com/w320/tm.png	https://goo.gl/maps/cgfUcaQHSWKuqeKk9	https://www.openstreetmap.org/relation/223026	UTC+05:00	Asia	40.0000000	60.0000000	6031187	t	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
175	Mozambique	Republic of Mozambique	MOZ	Africa	Eastern Africa	{"por":"Portuguese"}	{"MZN":{"name":"Mozambican metical","symbol":"MT"}}	Maputo	https://flagcdn.com/w320/mz.png	https://goo.gl/maps/xCLcY9fzU6x4Pueu5	https://www.openstreetmap.org/relation/195273	UTC+02:00	Africa	-18.2500000	35.0000000	31255435	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
176	Panama	Republic of Panama	PAN	Americas	Central America	{"spa":"Spanish"}	{"PAB":{"name":"Panamanian balboa","symbol":"B/."},"USD":{"name":"United States dollar","symbol":"$"}}	Panama City	https://flagcdn.com/w320/pa.png	https://goo.gl/maps/sEN7sKqeawa5oPNLA	https://www.openstreetmap.org/relation/287668	UTC-05:00	North America	9.0000000	-80.0000000	4314768	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
177	Micronesia	Federated States of Micronesia	FSM	Oceania	Micronesia	{"eng":"English"}	{"USD":{"name":"United States dollar","symbol":"$"}}	Palikir	https://flagcdn.com/w320/fm.png	https://goo.gl/maps/LLcnofC5LxZsJXTo8	https://www.openstreetmap.org/relation/571802	UTC+10:00	Oceania	6.9166667	158.2500000	115021	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
178	Ireland	Republic of Ireland	IRL	Europe	Northern Europe	{"eng":"English","gle":"Irish"}	{"EUR":{"name":"Euro","symbol":"€"}}	Dublin	https://flagcdn.com/w320/ie.png	https://goo.gl/maps/hxd1BKxgpchStzQC6	https://www.openstreetmap.org/relation/62273	UTC	Europe	53.0000000	-8.0000000	4994724	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
179	Curaçao	Country of Curaçao	CUW	Americas	Caribbean	{"eng":"English","nld":"Dutch","pap":"Papiamento"}	{"ANG":{"name":"Netherlands Antillean guilder","symbol":"ƒ"}}	Willemstad	https://flagcdn.com/w320/cw.png	https://goo.gl/maps/9D3hTeA3qKaRT7S16	https://www.openstreetmap.org/relation/1216719	UTC-04:00	North America	12.1166670	-68.9333330	155014	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
180	French Guiana	Guiana	GUF	Americas	South America	{"fra":"French"}	{"EUR":{"name":"Euro","symbol":"€"}}	Cayenne	https://flagcdn.com/w320/gf.png	https://goo.gl/maps/NJawFwMzG7YtCrVP7	https://www.openstreetmap.org/relation/2502058	UTC-03:00	South America	4.0000000	-53.0000000	254541	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
181	Norway	Kingdom of Norway	NOR	Europe	Northern Europe	{"nno":"Norwegian Nynorsk","nob":"Norwegian Bokmål","smi":"Sami"}	{"NOK":{"name":"Norwegian krone","symbol":"kr"}}	Oslo	https://flagcdn.com/w320/no.png	https://goo.gl/maps/htWRrphA7vNgQNdSA	https://www.openstreetmap.org/relation/2978650	UTC+01:00	Europe	62.0000000	10.0000000	5379475	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
182	Åland Islands	Åland Islands	ALA	Europe	Northern Europe	{"swe":"Swedish"}	{"EUR":{"name":"Euro","symbol":"€"}}	Mariehamn	https://flagcdn.com/w320/ax.png	https://goo.gl/maps/ewFb3vYsfUmVCoSb8	https://www.openstreetmap.org/relation/1650407	UTC+02:00	Europe	60.1166670	19.9000000	29458	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
183	Central African Republic	Central African Republic	CAF	Africa	Middle Africa	{"fra":"French","sag":"Sango"}	{"XAF":{"name":"Central African CFA franc","symbol":"Fr"}}	Bangui	https://flagcdn.com/w320/cf.png	https://goo.gl/maps/51V8dsi2rGYC9n3c9	https://www.openstreetmap.org/relation/192790	UTC+01:00	Africa	7.0000000	21.0000000	4829764	t	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
184	Burkina Faso	Burkina Faso	BFA	Africa	Western Africa	{"fra":"French"}	{"XOF":{"name":"West African CFA franc","symbol":"Fr"}}	Ouagadougou	https://flagcdn.com/w320/bf.png	https://goo.gl/maps/rKRmpcMbFher2ozb7	https://www.openstreetmap.org/relation/192783	UTC	Africa	13.0000000	-2.0000000	20903278	t	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
185	Eritrea	State of Eritrea	ERI	Africa	Eastern Africa	{"ara":"Arabic","eng":"English","tir":"Tigrinya"}	{"ERN":{"name":"Eritrean nakfa","symbol":"Nfk"}}	Asmara	https://flagcdn.com/w320/er.png	https://goo.gl/maps/HRyqUpnPwwG6jY5j6	https://www.openstreetmap.org/relation/296961	UTC+03:00	Africa	15.0000000	39.0000000	5352000	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
186	Tanzania	United Republic of Tanzania	TZA	Africa	Eastern Africa	{"eng":"English","swa":"Swahili"}	{"TZS":{"name":"Tanzanian shilling","symbol":"Sh"}}	Dodoma	https://flagcdn.com/w320/tz.png	https://goo.gl/maps/NWYMqZYXte4zGZ2Q8	https://www.openstreetmap.org/relation/195270	UTC+03:00	Africa	-6.0000000	35.0000000	59734213	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
187	South Korea	Republic of Korea	KOR	Asia	Eastern Asia	{"kor":"Korean"}	{"KRW":{"name":"South Korean won","symbol":"₩"}}	Seoul	https://flagcdn.com/w320/kr.png	https://goo.gl/maps/7ecjaJXefjAQhxjGA	https://www.openstreetmap.org/relation/307756	UTC+09:00	Asia	37.0000000	127.5000000	51780579	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
188	Jordan	Hashemite Kingdom of Jordan	JOR	Asia	Western Asia	{"ara":"Arabic"}	{"JOD":{"name":"Jordanian dinar","symbol":"د.ا"}}	Amman	https://flagcdn.com/w320/jo.png	https://goo.gl/maps/ko1dzSDKg8Gsi9A98	https://www.openstreetmap.org/relation/184818	UTC+03:00	Asia	31.0000000	36.0000000	10203140	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
189	Mauritania	Islamic Republic of Mauritania	MRT	Africa	Western Africa	{"ara":"Arabic"}	{"MRU":{"name":"Mauritanian ouguiya","symbol":"UM"}}	Nouakchott	https://flagcdn.com/w320/mr.png	https://goo.gl/maps/im2MmQ5jFjzxWBks5	https://www.openstreetmap.org/relation/192763	UTC	Africa	20.0000000	-12.0000000	4649660	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
190	Lithuania	Republic of Lithuania	LTU	Europe	Northern Europe	{"lit":"Lithuanian"}	{"EUR":{"name":"Euro","symbol":"€"}}	Vilnius	https://flagcdn.com/w320/lt.png	https://goo.gl/maps/dd1s9rrLjrK2G8yY6	https://www.openstreetmap.org/relation/72596	UTC+02:00	Europe	56.0000000	24.0000000	2794700	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
191	United States Minor Outlying Islands	United States Minor Outlying Islands	UMI	Americas	North America	{"eng":"English"}	{"USD":{"name":"United States dollar","symbol":"$"}}	Washington DC	https://flagcdn.com/w320/um.png	https://goo.gl/maps/hZKnrzgeK69dDyPF8	https://www.openstreetmap.org/relation/6430384	UTC-11:00	Oceania	19.3000000	166.6333330	300	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
192	Slovakia	Slovak Republic	SVK	Europe	Central Europe	{"slk":"Slovak"}	{"EUR":{"name":"Euro","symbol":"€"}}	Bratislava	https://flagcdn.com/w320/sk.png	https://goo.gl/maps/uNSH2wW4bLoZVYJj7	https://www.openstreetmap.org/relation/14296	UTC+01:00	Europe	48.6666667	19.5000000	5458827	t	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
193	Angola	Republic of Angola	AGO	Africa	Middle Africa	{"por":"Portuguese"}	{"AOA":{"name":"Angolan kwanza","symbol":"Kz"}}	Luanda	https://flagcdn.com/w320/ao.png	https://goo.gl/maps/q42Qbf1BmQL3fuZg9	https://www.openstreetmap.org/relation/195267	UTC+01:00	Africa	-12.5000000	18.5000000	32866268	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
194	Kazakhstan	Republic of Kazakhstan	KAZ	Asia	Central Asia	{"kaz":"Kazakh","rus":"Russian"}	{"KZT":{"name":"Kazakhstani tenge","symbol":"₸"}}	Nur-Sultan	https://flagcdn.com/w320/kz.png	https://goo.gl/maps/8VohJGu7ShuzZYyeA	https://www.openstreetmap.org/relation/214665	UTC+05:00	Asia	48.0196000	66.9237000	18754440	t	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
195	Moldova	Republic of Moldova	MDA	Europe	Eastern Europe	{"ron":"Romanian"}	{"MDL":{"name":"Moldovan leu","symbol":"L"}}	Chișinău	https://flagcdn.com/w320/md.png	https://goo.gl/maps/JjmyUuULujnDeFPf7	https://www.openstreetmap.org/relation/58974	UTC+02:00	Europe	47.0000000	29.0000000	2617820	t	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
196	Mali	Republic of Mali	MLI	Africa	Western Africa	{"fra":"French"}	{"XOF":{"name":"West African CFA franc","symbol":"Fr"}}	Bamako	https://flagcdn.com/w320/ml.png	https://goo.gl/maps/u9mYJkCB19wyuzh27	https://www.openstreetmap.org/relation/192785	UTC	Africa	17.0000000	-4.0000000	20250834	t	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
197	Falkland Islands	Falkland Islands	FLK	Americas	South America	{"eng":"English"}	{"FKP":{"name":"Falkland Islands pound","symbol":"£"}}	Stanley	https://flagcdn.com/w320/fk.png	https://goo.gl/maps/TZH1x7AGanQKifNk7	https://www.openstreetmap.org/relation/2185374	UTC-04:00	South America	-51.7500000	-59.0000000	2563	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
198	Armenia	Republic of Armenia	ARM	Asia	Western Asia	{"hye":"Armenian"}	{"AMD":{"name":"Armenian dram","symbol":"֏"}}	Yerevan	https://flagcdn.com/w320/am.png	https://goo.gl/maps/azWUtK9bUQYEyccbA	https://www.openstreetmap.org/relation/364066	UTC+04:00	Asia	40.0000000	45.0000000	2963234	t	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
199	Samoa	Independent State of Samoa	WSM	Oceania	Polynesia	{"eng":"English","smo":"Samoan"}	{"WST":{"name":"Samoan tālā","symbol":"T"}}	Apia	https://flagcdn.com/w320/ws.png	https://goo.gl/maps/CFC9fEFP9cfkYUBF9	https://www.openstreetmap.org/relation/1872673	UTC+13:00	Oceania	-13.5833333	-172.3333333	198410	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
200	Jersey	Bailiwick of Jersey	JEY	Europe	Northern Europe	{"eng":"English","fra":"French","nrf":"Jèrriais"}	{"GBP":{"name":"British pound","symbol":"£"},"JEP":{"name":"Jersey pound","symbol":"£"}}	Saint Helier	https://flagcdn.com/w320/je.png	https://goo.gl/maps/rXG8GZZtsqK92kTCA	https://www.openstreetmap.org/relation/367988	UTC+01:00	Europe	49.2500000	-2.1666667	100800	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
201	Japan	Japan	JPN	Asia	Eastern Asia	{"jpn":"Japanese"}	{"JPY":{"name":"Japanese yen","symbol":"¥"}}	Tokyo	https://flagcdn.com/w320/jp.png	https://goo.gl/maps/NGTLSCSrA8bMrvnX9	https://www.openstreetmap.org/relation/382313	UTC+09:00	Asia	36.0000000	138.0000000	125836021	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
202	Bolivia	Plurinational State of Bolivia	BOL	Americas	South America	{"aym":"Aymara","grn":"Guaraní","que":"Quechua","spa":"Spanish"}	{"BOB":{"name":"Bolivian boliviano","symbol":"Bs."}}	Sucre	https://flagcdn.com/w320/bo.png	https://goo.gl/maps/9DfnyfbxNM2g5U9b9	https://www.openstreetmap.org/relation/252645	UTC-04:00	South America	-17.0000000	-65.0000000	11673029	t	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
203	Chile	Republic of Chile	CHL	Americas	South America	{"spa":"Spanish"}	{"CLP":{"name":"Chilean peso","symbol":"$"}}	Santiago	https://flagcdn.com/w320/cl.png	https://goo.gl/maps/XboxyNHh2fAjCPNn9	https://www.openstreetmap.org/relation/167454	UTC-06:00	South America	-30.0000000	-71.0000000	19116209	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
204	United States	United States of America	USA	Americas	North America	{"eng":"English"}	{"USD":{"name":"United States dollar","symbol":"$"}}	Washington, D.C.	https://flagcdn.com/w320/us.png	https://goo.gl/maps/e8M246zY4BSjkjAv6	https://www.openstreetmap.org/relation/148838#map=2/20.6/-85.8	UTC-12:00	North America	38.0000000	-97.0000000	329484123	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
205	Saint Vincent and the Grenadines	Saint Vincent and the Grenadines	VCT	Americas	Caribbean	{"eng":"English"}	{"XCD":{"name":"Eastern Caribbean dollar","symbol":"$"}}	Kingstown	https://flagcdn.com/w320/vc.png	https://goo.gl/maps/wMbnMqjG37FMnrwf7	https://www.openstreetmap.org/relation/550725	UTC-04:00	North America	13.2500000	-61.2000000	110947	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
206	Bermuda	Bermuda	BMU	Americas	North America	{"eng":"English"}	{"BMD":{"name":"Bermudian dollar","symbol":"$"}}	Hamilton	https://flagcdn.com/w320/bm.png	https://goo.gl/maps/NLsRGNjTzDghTtAJA	https://www.openstreetmap.org/relation/1993208	UTC-04:00	North America	32.3333333	-64.7500000	63903	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
207	Seychelles	Republic of Seychelles	SYC	Africa	Eastern Africa	{"crs":"Seychellois Creole","eng":"English","fra":"French"}	{"SCR":{"name":"Seychellois rupee","symbol":"₨"}}	Victoria	https://flagcdn.com/w320/sc.png	https://goo.gl/maps/aqCcy2TKh5TV5MAX8	https://www.openstreetmap.org/relation/536765	UTC+04:00	Africa	-4.5833333	55.6666667	98462	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
208	British Indian Ocean Territory	British Indian Ocean Territory	IOT	Africa	Eastern Africa	{"eng":"English"}	{"USD":{"name":"United States dollar","symbol":"$"}}	Diego Garcia	https://flagcdn.com/w320/io.png	https://goo.gl/maps/bheNucgekVEYozoi6	https://www.openstreetmap.org/relation/1993867	UTC+06:00	Asia	-6.0000000	71.5000000	3000	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
209	Guatemala	Republic of Guatemala	GTM	Americas	Central America	{"spa":"Spanish"}	{"GTQ":{"name":"Guatemalan quetzal","symbol":"Q"}}	Guatemala City	https://flagcdn.com/w320/gt.png	https://goo.gl/maps/JoRAbem4Hxb9FYbVA	https://www.openstreetmap.org/relation/1521463	UTC-06:00	North America	15.5000000	-90.2500000	16858333	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
210	Ecuador	Republic of Ecuador	ECU	Americas	South America	{"spa":"Spanish"}	{"USD":{"name":"United States dollar","symbol":"$"}}	Quito	https://flagcdn.com/w320/ec.png	https://goo.gl/maps/TbX8hUW4gcbRPZiK7	https://www.openstreetmap.org/relation/108089	UTC-06:00	South America	-2.0000000	-77.5000000	17643060	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
211	Martinique	Martinique	MTQ	Americas	Caribbean	{"fra":"French"}	{"EUR":{"name":"Euro","symbol":"€"}}	Fort-de-France	https://flagcdn.com/w320/mq.png	https://goo.gl/maps/87ER7sDAFU7JjcvR6	https://www.openstreetmap.org/relation/2473088	UTC-04:00	North America	14.6666670	-61.0000000	378243	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
212	Tajikistan	Republic of Tajikistan	TJK	Asia	Central Asia	{"rus":"Russian","tgk":"Tajik"}	{"TJS":{"name":"Tajikistani somoni","symbol":"ЅМ"}}	Dushanbe	https://flagcdn.com/w320/tj.png	https://goo.gl/maps/8rQgW88jEXijhVb58	https://www.openstreetmap.org/relation/214626	UTC+05:00	Asia	39.0000000	71.0000000	9537642	t	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
213	Malta	Republic of Malta	MLT	Europe	Southern Europe	{"eng":"English","mlt":"Maltese"}	{"EUR":{"name":"Euro","symbol":"€"}}	Valletta	https://flagcdn.com/w320/mt.png	https://goo.gl/maps/skXCqguxDxxEKVk47	https://www.openstreetmap.org/relation/365307	UTC+01:00	Europe	35.9375000	14.3754000	525285	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
214	Gambia	Republic of the Gambia	GMB	Africa	Western Africa	{"eng":"English"}	{"GMD":{"name":"dalasi","symbol":"D"}}	Banjul	https://flagcdn.com/w320/gm.png	https://goo.gl/maps/bbGBCxxtfD2A9Z4m6	https://www.openstreetmap.org/relation/192774	UTC+00:00	Africa	13.4666667	-16.5666667	2416664	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
215	Nigeria	Federal Republic of Nigeria	NGA	Africa	Western Africa	{"eng":"English"}	{"NGN":{"name":"Nigerian naira","symbol":"₦"}}	Abuja	https://flagcdn.com/w320/ng.png	https://goo.gl/maps/LTn417qWwBPFszuV9	https://www.openstreetmap.org/relation/192787	UTC+01:00	Africa	10.0000000	8.0000000	206139587	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
216	Bahamas	Commonwealth of the Bahamas	BHS	Americas	Caribbean	{"eng":"English"}	{"BSD":{"name":"Bahamian dollar","symbol":"$"},"USD":{"name":"United States dollar","symbol":"$"}}	Nassau	https://flagcdn.com/w320/bs.png	https://goo.gl/maps/1YzRs1BZrG8p8pmVA	https://www.openstreetmap.org/relation/547469	UTC-05:00	North America	25.0343000	-77.3963000	393248	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
217	Kosovo	Republic of Kosovo	UNK	Europe	Southeast Europe	{"sqi":"Albanian","srp":"Serbian"}	{"EUR":{"name":"Euro","symbol":"€"}}	Pristina	https://flagcdn.com/w320/xk.png	https://goo.gl/maps/CSC4Yc8SWPgburuD9	https://www.openstreetmap.org/relation/2088990	UTC+01:00	Europe	42.6666670	21.1666670	1775378	t	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
218	Kuwait	State of Kuwait	KWT	Asia	Western Asia	{"ara":"Arabic"}	{"KWD":{"name":"Kuwaiti dinar","symbol":"د.ك"}}	Kuwait City	https://flagcdn.com/w320/kw.png	https://goo.gl/maps/aqr3aNQjS1BAvksJ7	https://www.openstreetmap.org/relation/305099	UTC+03:00	Asia	29.5000000	45.7500000	4270563	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
219	Maldives	Republic of the Maldives	MDV	Asia	Southern Asia	{"div":"Maldivian"}	{"MVR":{"name":"Maldivian rufiyaa","symbol":".ރ"}}	Malé	https://flagcdn.com/w320/mv.png	https://goo.gl/maps/MNAWGq9vEdbZ9vUV7	https://www.openstreetmap.org/relation/536773	UTC+05:00	Asia	3.2500000	73.0000000	540542	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
220	South Sudan	Republic of South Sudan	SSD	Africa	Middle Africa	{"eng":"English"}	{"SSP":{"name":"South Sudanese pound","symbol":"£"}}	Juba	https://flagcdn.com/w320/ss.png	https://goo.gl/maps/Zm1AYCXb9HSNF1P27	https://www.openstreetmap.org/relation/1656678	UTC+03:00	Africa	7.0000000	30.0000000	11193729	t	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
221	Iran	Islamic Republic of Iran	IRN	Asia	Southern Asia	{"fas":"Persian (Farsi)"}	{"IRR":{"name":"Iranian rial","symbol":"﷼"}}	Tehran	https://flagcdn.com/w320/ir.png	https://goo.gl/maps/dMgEGuacBPGYQnjY7	https://www.openstreetmap.org/relation/304938	UTC+03:30	Asia	32.0000000	53.0000000	83992953	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
223	Brazil	Federative Republic of Brazil	BRA	Americas	South America	{"por":"Portuguese"}	{"BRL":{"name":"Brazilian real","symbol":"R$"}}	Brasília	https://flagcdn.com/w320/br.png	https://goo.gl/maps/waCKk21HeeqFzkNC9	https://www.openstreetmap.org/relation/59470	UTC-05:00	South America	-10.0000000	-55.0000000	212559409	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
224	Serbia	Republic of Serbia	SRB	Europe	Southeast Europe	{"srp":"Serbian"}	{"RSD":{"name":"Serbian dinar","symbol":"дин."}}	Belgrade	https://flagcdn.com/w320/rs.png	https://goo.gl/maps/2Aqof7aV2Naq8YEK8	https://www.openstreetmap.org/relation/1741311	UTC+01:00	Europe	44.0000000	21.0000000	6908224	t	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
225	Belize	Belize	BLZ	Americas	Central America	{"bjz":"Belizean Creole","eng":"English","spa":"Spanish"}	{"BZD":{"name":"Belize dollar","symbol":"$"}}	Belmopan	https://flagcdn.com/w320/bz.png	https://goo.gl/maps/jdCccpdLodm1uTmo9	https://www.openstreetmap.org/relation/287827	UTC-06:00	North America	17.2500000	-88.7500000	397621	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
226	Myanmar	Republic of the Union of Myanmar	MMR	Asia	South-Eastern Asia	{"mya":"Burmese"}	{"MMK":{"name":"Burmese kyat","symbol":"Ks"}}	Naypyidaw	https://flagcdn.com/w320/mm.png	https://goo.gl/maps/4jrZyJkDERUfHyp26	https://www.openstreetmap.org/relation/50371	UTC+06:30	Asia	22.0000000	98.0000000	54409794	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
227	Bhutan	Kingdom of Bhutan	BTN	Asia	Southern Asia	{"dzo":"Dzongkha"}	{"BTN":{"name":"Bhutanese ngultrum","symbol":"Nu."},"INR":{"name":"Indian rupee","symbol":"₹"}}	Thimphu	https://flagcdn.com/w320/bt.png	https://goo.gl/maps/VEfXXBftTFLUpNgp8	https://www.openstreetmap.org/relation/184629	UTC+06:00	Asia	27.5000000	90.5000000	771612	t	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
228	Venezuela	Bolivarian Republic of Venezuela	VEN	Americas	South America	{"spa":"Spanish"}	{"VES":{"name":"Venezuelan bolívar soberano","symbol":"Bs.S."}}	Caracas	https://flagcdn.com/w320/ve.png	https://goo.gl/maps/KLCwDN8sec7z2kse9	https://www.openstreetmap.org/relation/272644	UTC-04:00	South America	8.0000000	-66.0000000	28435943	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
229	Liberia	Republic of Liberia	LBR	Africa	Western Africa	{"eng":"English"}	{"LRD":{"name":"Liberian dollar","symbol":"$"}}	Monrovia	https://flagcdn.com/w320/lr.png	https://goo.gl/maps/4VsHsc2oeGeRL3wg6	https://www.openstreetmap.org/relation/192780	UTC	Africa	6.5000000	-9.5000000	5057677	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
230	Jamaica	Jamaica	JAM	Americas	Caribbean	{"eng":"English","jam":"Jamaican Patois"}	{"JMD":{"name":"Jamaican dollar","symbol":"$"}}	Kingston	https://flagcdn.com/w320/jm.png	https://goo.gl/maps/Z8mQ6jxnRQKFwJy9A	https://www.openstreetmap.org/relation/555017	UTC-05:00	North America	18.2500000	-77.5000000	2961161	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
231	Poland	Republic of Poland	POL	Europe	Central Europe	{"pol":"Polish"}	{"PLN":{"name":"Polish złoty","symbol":"zł"}}	Warsaw	https://flagcdn.com/w320/pl.png	https://goo.gl/maps/gY9Xw4Sf4415P4949	https://www.openstreetmap.org/relation/49715	UTC+01:00	Europe	52.0000000	20.0000000	37950802	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
232	Cayman Islands	Cayman Islands	CYM	Americas	Caribbean	{"eng":"English"}	{"KYD":{"name":"Cayman Islands dollar","symbol":"$"}}	George Town	https://flagcdn.com/w320/ky.png	https://goo.gl/maps/P3ZVXX3LH63t91hL8	https://www.openstreetmap.org/relation/7269765	UTC-05:00	North America	19.3133000	-81.2546000	65720	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
233	Brunei	Nation of Brunei, Abode of Peace	BRN	Asia	South-Eastern Asia	{"msa":"Malay"}	{"BND":{"name":"Brunei dollar","symbol":"$"},"SGD":{"name":"Singapore dollar","symbol":"$"}}	Bandar Seri Begawan	https://flagcdn.com/w320/bn.png	https://goo.gl/maps/4jb4CqBXhr8vNh579	https://www.openstreetmap.org/relation/2103120	UTC+08:00	Asia	4.5000000	114.6666667	437483	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
234	Comoros	Union of the Comoros	COM	Africa	Eastern Africa	{"ara":"Arabic","fra":"French","zdj":"Comorian"}	{"KMF":{"name":"Comorian franc","symbol":"Fr"}}	Moroni	https://flagcdn.com/w320/km.png	https://goo.gl/maps/eas4GP28C1GyStnu6	https://www.openstreetmap.org/relation/535790	UTC+03:00	Africa	-12.1666667	44.2500000	869595	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
235	Guam	Guam	GUM	Oceania	Micronesia	{"cha":"Chamorro","eng":"English","spa":"Spanish"}	{"USD":{"name":"United States dollar","symbol":"$"}}	Hagåtña	https://flagcdn.com/w320/gu.png	https://goo.gl/maps/Xfnq2i279b18cH3C9	https://www.openstreetmap.org/relation/306001	UTC+10:00	Oceania	13.4666667	144.7833333	168783	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
236	Tonga	Kingdom of Tonga	TON	Oceania	Polynesia	{"eng":"English","ton":"Tongan"}	{"TOP":{"name":"Tongan paʻanga","symbol":"T$"}}	Nuku'alofa	https://flagcdn.com/w320/to.png	https://goo.gl/maps/p5YALBY2QdEzswRo7	https://www.openstreetmap.org/relation/2186665	UTC+13:00	Oceania	-20.0000000	-175.0000000	105697	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
237	Kiribati	Independent and Sovereign Republic of Kiribati	KIR	Oceania	Micronesia	{"eng":"English","gil":"Gilbertese"}	{"AUD":{"name":"Australian dollar","symbol":"$"},"KID":{"name":"Kiribati dollar","symbol":"$"}}	South Tarawa	https://flagcdn.com/w320/ki.png	https://goo.gl/maps/NBfYvrndW4skAimw9	https://www.openstreetmap.org/relation/571178	UTC+12:00	Oceania	1.4166667	173.0000000	119446	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
238	Ghana	Republic of Ghana	GHA	Africa	Western Africa	{"eng":"English"}	{"GHS":{"name":"Ghanaian cedi","symbol":"₵"}}	Accra	https://flagcdn.com/w320/gh.png	https://goo.gl/maps/Avy5RSmdsXFBaiXq8	https://www.openstreetmap.org/relation/192781	UTC	Africa	8.0000000	-2.0000000	31072945	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
239	Chad	Republic of Chad	TCD	Africa	Middle Africa	{"ara":"Arabic","fra":"French"}	{"XAF":{"name":"Central African CFA franc","symbol":"Fr"}}	N'Djamena	https://flagcdn.com/w320/td.png	https://goo.gl/maps/ziUdAZ8skuNfx5Hx7	https://www.openstreetmap.org/relation/2361304	UTC+01:00	Africa	15.0000000	19.0000000	16425859	t	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
240	Zimbabwe	Republic of Zimbabwe	ZWE	Africa	Southern Africa	{"bwg":"Chibarwe","eng":"English","kck":"Kalanga","khi":"Khoisan","ndc":"Ndau","nde":"Northern Ndebele","nya":"Chewa","sna":"Shona","sot":"Sotho","toi":"Tonga","tsn":"Tswana","tso":"Tsonga","ven":"Venda","xho":"Xhosa","zib":"Zimbabwean Sign Language"}	{"ZWL":{"name":"Zimbabwean dollar","symbol":"$"}}	Harare	https://flagcdn.com/w320/zw.png	https://goo.gl/maps/M26BqdwQctqxXS65A	https://www.openstreetmap.org/relation/195272	UTC+02:00	Africa	-20.0000000	30.0000000	14862927	t	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
241	Saint Martin	Saint Martin	MAF	Americas	Caribbean	{"fra":"French"}	{"EUR":{"name":"Euro","symbol":"€"}}	Marigot	https://flagcdn.com/w320/mf.png	https://goo.gl/maps/P9ho9QuJ9EAR28JEA	https://www.openstreetmap.org/relation/63064	UTC-04:00	North America	18.0708000	63.0501000	38659	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
242	Mongolia	Mongolia	MNG	Asia	Eastern Asia	{"mon":"Mongolian"}	{"MNT":{"name":"Mongolian tögrög","symbol":"₮"}}	Ulan Bator	https://flagcdn.com/w320/mn.png	https://goo.gl/maps/A1X7bMCKThBDNjzH6	https://www.openstreetmap.org/relation/161033	UTC+07:00	Asia	46.0000000	105.0000000	3278292	t	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
243	Portugal	Portuguese Republic	PRT	Europe	Southern Europe	{"por":"Portuguese"}	{"EUR":{"name":"Euro","symbol":"€"}}	Lisbon	https://flagcdn.com/w320/pt.png	https://goo.gl/maps/BaTBSyc4GWMmbAKB8	https://www.openstreetmap.org/relation/295480	UTC-01:00	Europe	39.5000000	-8.0000000	10305564	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
244	American Samoa	American Samoa	ASM	Oceania	Polynesia	{"eng":"English","smo":"Samoan"}	{"USD":{"name":"United States dollar","symbol":"$"}}	Pago Pago	https://flagcdn.com/w320/as.png	https://goo.gl/maps/Re9ePMjwP1sFCBFA6	https://www.openstreetmap.org/relation/2177187	UTC-11:00	Oceania	-14.3333333	-170.0000000	55197	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
245	Republic of the Congo	Republic of the Congo	COG	Africa	Middle Africa	{"fra":"French","kon":"Kikongo","lin":"Lingala"}	{"XAF":{"name":"Central African CFA franc","symbol":"Fr"}}	Brazzaville	https://flagcdn.com/w320/cg.png	https://goo.gl/maps/Phf5dDDKdfCtuBTb6	https://www.openstreetmap.org/relation/192794	UTC+01:00	Africa	-1.0000000	15.0000000	5657000	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
246	Belgium	Kingdom of Belgium	BEL	Europe	Western Europe	{"deu":"German","fra":"French","nld":"Dutch"}	{"EUR":{"name":"Euro","symbol":"€"}}	Brussels	https://flagcdn.com/w320/be.png	https://goo.gl/maps/UQQzat85TCtPRXAL8	https://www.openstreetmap.org/relation/52411	UTC+01:00	Europe	50.8333333	4.0000000	11555997	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
247	Israel	State of Israel	ISR	Asia	Western Asia	{"ara":"Arabic","heb":"Hebrew"}	{"ILS":{"name":"Israeli new shekel","symbol":"₪"}}	Jerusalem	https://flagcdn.com/w320/il.png	https://goo.gl/maps/6UY1AH8XeafVwdC97	https://www.openstreetmap.org/relation/1473946	UTC+02:00	Asia	31.4700000	35.1300000	9216900	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
248	New Zealand	New Zealand	NZL	Oceania	Australia and New Zealand	{"eng":"English","mri":"Māori","nzs":"New Zealand Sign Language"}	{"NZD":{"name":"New Zealand dollar","symbol":"$"}}	Wellington	https://flagcdn.com/w320/nz.png	https://goo.gl/maps/xXiDQo65dwdpw9iu8	https://www.openstreetmap.org/relation/556706#map=5/-46.710/172.046	UTC-11:00	Oceania	-41.0000000	174.0000000	5084300	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
249	Nicaragua	Republic of Nicaragua	NIC	Americas	Central America	{"spa":"Spanish"}	{"NIO":{"name":"Nicaraguan córdoba","symbol":"C$"}}	Managua	https://flagcdn.com/w320/ni.png	https://goo.gl/maps/P77LaEVkKJKXneRC6	https://www.openstreetmap.org/relation/287666	UTC-06:00	North America	13.0000000	-85.0000000	6624554	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
250	Anguilla	Anguilla	AIA	Americas	Caribbean	{"eng":"English"}	{"XCD":{"name":"Eastern Caribbean dollar","symbol":"$"}}	The Valley	https://flagcdn.com/w320/ai.png	https://goo.gl/maps/3KgLnEyN7amdno2p9	https://www.openstreetmap.org/relation/2177161	UTC-04:00	North America	18.2500000	-63.1666667	13452	f	2025-02-21 19:13:17.747+02	2025-02-21 19:13:17.747+02
\.


--
-- TOC entry 5011 (class 0 OID 0)
-- Dependencies: 230
-- Name: Appointments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Appointments_id_seq"', 3, true);


--
-- TOC entry 5012 (class 0 OID 0)
-- Dependencies: 220
-- Name: Departments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Departments_id_seq"', 39, true);


--
-- TOC entry 5013 (class 0 OID 0)
-- Dependencies: 224
-- Name: Missions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Missions_id_seq"', 3, true);


--
-- TOC entry 5014 (class 0 OID 0)
-- Dependencies: 232
-- Name: Notifications_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Notifications_id_seq"', 47, true);


--
-- TOC entry 5015 (class 0 OID 0)
-- Dependencies: 226
-- Name: ProfileCategories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."ProfileCategories_id_seq"', 4, true);


--
-- TOC entry 5016 (class 0 OID 0)
-- Dependencies: 228
-- Name: ProfileDetails_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."ProfileDetails_id_seq"', 3, true);


--
-- TOC entry 5017 (class 0 OID 0)
-- Dependencies: 222
-- Name: Users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Users_id_seq"', 42, true);


--
-- TOC entry 5018 (class 0 OID 0)
-- Dependencies: 218
-- Name: countries_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.countries_id_seq', 250, true);


--
-- TOC entry 4824 (class 2606 OID 131168)
-- Name: Appointments Appointments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Appointments"
    ADD CONSTRAINT "Appointments_pkey" PRIMARY KEY (id);


--
-- TOC entry 4808 (class 2606 OID 131096)
-- Name: Departments Departments_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Departments"
    ADD CONSTRAINT "Departments_name_key" UNIQUE (name);


--
-- TOC entry 4810 (class 2606 OID 131094)
-- Name: Departments Departments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Departments"
    ADD CONSTRAINT "Departments_pkey" PRIMARY KEY (id);


--
-- TOC entry 4818 (class 2606 OID 131125)
-- Name: Missions Missions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Missions"
    ADD CONSTRAINT "Missions_pkey" PRIMARY KEY (id);


--
-- TOC entry 4826 (class 2606 OID 131193)
-- Name: Notifications Notifications_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Notifications"
    ADD CONSTRAINT "Notifications_pkey" PRIMARY KEY (id);


--
-- TOC entry 4820 (class 2606 OID 131142)
-- Name: ProfileCategories ProfileCategories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ProfileCategories"
    ADD CONSTRAINT "ProfileCategories_pkey" PRIMARY KEY (id);


--
-- TOC entry 4822 (class 2606 OID 131151)
-- Name: ProfileDetails ProfileDetails_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ProfileDetails"
    ADD CONSTRAINT "ProfileDetails_pkey" PRIMARY KEY (id);


--
-- TOC entry 4802 (class 2606 OID 57457)
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- TOC entry 4812 (class 2606 OID 131109)
-- Name: Users Users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key" UNIQUE (email);


--
-- TOC entry 4814 (class 2606 OID 131111)
-- Name: Users Users_phone_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_phone_key" UNIQUE (phone);


--
-- TOC entry 4816 (class 2606 OID 131107)
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


--
-- TOC entry 4804 (class 2606 OID 131083)
-- Name: countries countries_code_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.countries
    ADD CONSTRAINT countries_code_key UNIQUE (code);


--
-- TOC entry 4806 (class 2606 OID 131081)
-- Name: countries countries_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.countries
    ADD CONSTRAINT countries_pkey PRIMARY KEY (id);


--
-- TOC entry 4832 (class 2606 OID 131179)
-- Name: Appointments Appointments_assignedBY_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Appointments"
    ADD CONSTRAINT "Appointments_assignedBY_fkey" FOREIGN KEY ("assignedBY") REFERENCES public."Users"(id) ON DELETE CASCADE;


--
-- TOC entry 4833 (class 2606 OID 131169)
-- Name: Appointments Appointments_missionID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Appointments"
    ADD CONSTRAINT "Appointments_missionID_fkey" FOREIGN KEY ("missionID") REFERENCES public."Missions"(id) ON DELETE CASCADE;


--
-- TOC entry 4834 (class 2606 OID 131174)
-- Name: Appointments Appointments_userID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Appointments"
    ADD CONSTRAINT "Appointments_userID_fkey" FOREIGN KEY ("userID") REFERENCES public."Users"(id) ON DELETE CASCADE;


--
-- TOC entry 4828 (class 2606 OID 131126)
-- Name: Missions Missions_CountryID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Missions"
    ADD CONSTRAINT "Missions_CountryID_fkey" FOREIGN KEY ("CountryID") REFERENCES public.countries(id) ON DELETE CASCADE;


--
-- TOC entry 4829 (class 2606 OID 131131)
-- Name: Missions Missions_createdBY_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Missions"
    ADD CONSTRAINT "Missions_createdBY_fkey" FOREIGN KEY ("createdBY") REFERENCES public."Users"(id) ON DELETE CASCADE;


--
-- TOC entry 4835 (class 2606 OID 131194)
-- Name: Notifications Notifications_userID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Notifications"
    ADD CONSTRAINT "Notifications_userID_fkey" FOREIGN KEY ("userID") REFERENCES public."Users"(id) ON DELETE CASCADE;


--
-- TOC entry 4830 (class 2606 OID 131157)
-- Name: ProfileDetails ProfileDetails_categoryID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ProfileDetails"
    ADD CONSTRAINT "ProfileDetails_categoryID_fkey" FOREIGN KEY ("categoryID") REFERENCES public."ProfileCategories"(id) ON DELETE CASCADE;


--
-- TOC entry 4831 (class 2606 OID 131152)
-- Name: ProfileDetails ProfileDetails_userID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ProfileDetails"
    ADD CONSTRAINT "ProfileDetails_userID_fkey" FOREIGN KEY ("userID") REFERENCES public."Users"(id) ON DELETE CASCADE;


--
-- TOC entry 4827 (class 2606 OID 131112)
-- Name: Users Users_departmentId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES public."Departments"(id) ON UPDATE CASCADE ON DELETE SET NULL;


-- Completed on 2025-02-22 16:28:34

--
-- PostgreSQL database dump complete
--

