DROP TABLE IF EXISTS Prducts;
CREATE TABLE PRODUCT
(
  P_ID SERIAL Primary Key,  
  NAME varchar(100),
  DESCRIPTION varchar(100),
  CATEGORY varchar(100),
  P_STATUS varchar(100),
  BRRAND varchar(100),
  INFO varchar(100),
  UID varchar(100),
  FEATURES varchar(1000),
  kEYFEATURES varchar(500),
  ACTIVE bit
);



DROP TABLE IF EXISTS Brand;
CREATE TABLE Brand
(
  B_ID serial primary Key,
  NAME varchar(100),
  INFO varchar(100),
  PARENT varchar(100),
  IMAGE varchar(50000),
  UID varchar(100),
  BRAND bigint
);

DROP TABLE IF EXISTS Cart;
CREATE TABLE Cart
(
  CRT_ID serial primary Key,
  NAME varchar(200),
  INFO varchar(200)
);

DROP TABLE IF EXISTS Category;
CREATE TABLE Category
(
  CT_ID serial primary Key,
  NAME varchar(200),
  INFO varchar(200),
  PARENTCATEGORY bigint,
  IMAGE varchar(5000),
  UID varchar(200),
  Category bigint,
  SUB_CATEGORIES varchar(300)
);


DROP TABLE IF EXISTS Country;
CREATE TABLE Country
(
  CNTY_ID serial primary Key,
  NAME varchar(200),
  DIAL_CODE varchar(300),
  CODE varchar(300)
);

DROP TABLE IF EXISTS Coupon;
CREATE TABLE Coupon
(
  CPN_ID serial primary Key,
  CODE varchar(200),
  AMOUNT Numeric(20,4),
  TYPE varchar(200),
  INFO varchar(200),
  MINIMUMCARTVALUE int
);


DROP TABLE IF EXISTS Dashboard;
CREATE TABLE Dashboard
(
  DBR_ID serial primary Key,
  NAME varchar(300),
  INFO varchar(300)
);


DROP TABLE IF EXISTS FeatureSchema;
CREATE TABLE FeatureSchema
(
  FS_ID serial primary Key,
  F_key varchar(200),
  VAL varchar(200),
  INFO varchar(200)
);

DROP TABLE IF EXISTS Invoice;
CREATE TABLE Invoice
(
  I_ID serial primary Key,
  NAME VARCHAR(300),
  INFO VARCHAR(300)
);


DROP TABLE IF EXISTS Orders;
CREATE TABLE Orders
(
  ORD_ID serial primary Key,
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
  O_STATUS varchar(200),
  ITEMS varchar(3000)
);

DROP TABLE IF EXISTS Payment;
CREATE TABLE Payment
(
  PMT_ID serial primary Key,
  NAME varchar(300),
  EMAIL varchar(300),
  OPTIONS varchar(300),
  ACTIVE bit
);


DROP TABLE IF EXISTS Settings;
CREATE TABLE Settings
(
  S_ID serial primary Key,
  MIN_ORDER_VALUE numeric(18,4),
  SHIPING_CHARGE numeric(18,4)
);


DROP TABLE IF EXISTS Shop;
CREATE TABLE Shop
(
  SHP_ID serial primary Key,
  NAME varchar(200),
  INFO varchar(200),
  ACTIVE bit
);


DROP TABLE IF EXISTS Thing;
CREATE TABLE Thing
(
  TH_ID serial primary Key,
  NAME varchar(200),
  INFO varchar(200),
  ACTIVE bit
);

DROP TABLE IF EXISTS Users;
CREATE TABLE Users
(
  UID serial primary Key,
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
