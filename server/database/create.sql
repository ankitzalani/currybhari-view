DROP TABLE IF EXISTS PRODUCT;
CREATE TABLE PRODUCT
(
  ID SERIAL Primary Key,  
  NAME varchar(100),
  DESCRIPTION varchar(100),
  CATEGORY varchar(100),
  STATUS varchar(100),
  BRAND varchar(100),
  INFO varchar(100),
  UID varchar(100),
  FEATURES varchar(1000),
  KEY_FEATURES varchar(500),
  ACTIVE bit,
  BRAND_ID integer REFERENCES BRAND (ID)
);

DROP TABLE IF EXISTS BRAND;
CREATE TABLE BRAND
(
  ID serial primary Key,
  NAME varchar(100),
  INFO varchar(100),
  PARENT varchar(100),
  IMAGE varchar(5000),
  UID varchar(100),
  BRAND bigint
);

DROP TABLE IF EXISTS CART;
CREATE TABLE CART
(
  ID serial primary Key,
  NAME varchar(200),
  INFO varchar(200),
  USER_ID integer REFERENCES USERS (ID)
);

DROP TABLE IF EXISTS CATEGORY;
CREATE TABLE CATEGORY
(
  ID serial primary Key,
  NAME varchar(200),
  INFO varchar(200),
  PARENT_CATEGORY bigint,
  IMAGE varchar(5000),
  UID varchar(200),
  CATEGORY bigint,
  SUB_CATEGORIES varchar(300),
  PRODUCT_ID integer REFERENCES PRODUCT (ID)
);


DROP TABLE IF EXISTS COUNTRY;
CREATE TABLE COUNTRY
(
  ID serial primary Key,
  NAME varchar(200),
  DIAL_CODE varchar(300),
  CODE varchar(300)
);

DROP TABLE IF EXISTS COUPAN;
CREATE TABLE COUPAN
(
  ID serial primary Key,
  CODE varchar(200),
  AMOUNT Numeric(20,4),
  TYPE varchar(200),
  INFO varchar(200),
  MINIMUM_CART_VALUE int,
  PRODUCT_ID integer REFERENCES PRODUCT (ID)
);


DROP TABLE IF EXISTS DASHBOARD;
CREATE TABLE DASHBOARD
(
  ID serial primary Key,
  NAME varchar(300),
  INFO varchar(300)
);


DROP TABLE IF EXISTS FEATURESCHEMA;
CREATE TABLE FEATURESCHEMA
(
  ID serial primary Key,
  key varchar(200),
  VAL varchar(200),
  INFO varchar(200),
  PRODUCT_ID integer REFERENCES PRODUCT (ID)
);

DROP TABLE IF EXISTS Invoice;
CREATE TABLE Invoice
(
  ID serial primary Key,
  NAME VARCHAR(300),
  INFO VARCHAR(300),
  PRODUCT_ID integer REFERENCES PRODUCT (ID),
  USER_ID integer REFERENCES USERS (ID)
);


DROP TABLE IF EXISTS ORDERS;
CREATE TABLE ORDERS
(
  ID serial primary Key,
  ORDER_NO varchar(500),
  NAME varchar(500),
  INFO varchar(500),
  UID varchar(500),
  EMAIL varchar(500),
  ADDRESS varchar(500),
  CITY varchar(500),
  PHONE varchar(500),
  PAYMENT varchar(500),
  ACTIVE bit,
  UPDATED date,
  ORDER_DATE date,
  STATUS varchar(200),
  ITEMS varchar(3000),
  PRODUCT_ID integer REFERENCES PRODUCT (ID),
  USER_ID integer REFERENCES USERS (ID)
);

DROP TABLE IF EXISTS PAYMENT;
CREATE TABLE PAYMENT
(
  ID serial primary Key,
  NAME varchar(300),
  EMAIL varchar(300),
  OPTIONS varchar(300),
  ACTIVE bit,
  ORDER_ID integer REFERENCES ORDERS (ID)
);


DROP TABLE IF EXISTS SETTINGS;
CREATE TABLE SETTINGS
(
  ID serial primary Key,
  MIN_ORDER_VALUE numeric(18,4),
  SHIPING_CHARGE numeric(18,4)
);


DROP TABLE IF EXISTS SHOP;
CREATE TABLE SHOP
(
  ID serial primary Key,
  NAME varchar(200),
  INFO varchar(200),
  ACTIVE bit,
  PRODUCT_ID integer REFERENCES PRODUCT (ID)
);


DROP TABLE IF EXISTS THING;
CREATE TABLE THING
(
  ID serial primary Key,
  NAME varchar(200),
  INFO varchar(200),
  ACTIVE bit
);

DROP TABLE IF EXISTS USERS;
CREATE TABLE USERS
(
  ID serial primary Key,
  NAME varchar(200),
  EMAIL varchar(300),
  ROLE varchar(300),
  HASHED_PASSWORD varchar(300),
  PROVIDER varchar(200),
  FACEBOOK varchar(200),
  TWITTER varchar(200),
  GOOGLE varchar(200),
  GITHUB varchar(200)
);
