# Data-Dynamics
Data Dynamics

# Plan

# Data Fetching Module
Data Fetching:
- For new value of coins we will use googlesheet having add on of cryptofinance.
- For Market/Trading Data Analysis we will use https://coinmarketcap.com/ (having trade
and exchange details). API is provided by this platform. We will integrate this API with
our program to fetch data and analyze that.
- For analysis of Social Data (about People) / Media Data (About Data), we will use
https://cointelegraph.com/ , https://www.coindesk.com/ .These website are providing
tweets/blogs. Need to find social data about people who are involved in these activities.
So, we will fetch data from tweets & blogs. Apply python code to extracts people
demographical information and their interests.
- Trading information is available in terms of blocks. To understand Blockchain Data we
will integrate APIs of https://etherscan.io/ , https://bloxy.info/. Websites to understand
the meta-data of trading information obtained by above websites.
- For extracting various types of preconditions that can apply for searching from our
program, we will thoroughly analyze above websites and then provide different types of
filters to the user of our program.

# Prediction Module
Forecasting Transactions:
- For forecasting transaction, we will scrap data from sources given above. Then apply Machine
Learning to create model. To measure its accuracy we will use data of https://coinmetrics.io/
(which is ready made tool and provide us visualization of previous historical data).
- This model will be able to predict future change in prices and blockchain data.


# Update 1
we downloaded data from coinmarketapi and apply analysis on it to get preconditions.

- coinmarket_api.js is code through which we get data of blockchain currencies and transactions.
- coinmarketapi.xlsx file is inform that will help to visualize the data actually.
- implemented Twitter Api to fetch Data about different currencies. twitterApiCall.js
- added result of api call for btc. So using this api we will extract data and apply analysis on all currencies.
- implemented Facebook API to fetch data from it. But they restricted to provide access to query on basis of keyword. still we are attaching effort to fetch data. i tried to add code of facebook-node-sdk with this git. But i think it is not allowed to do so. link is https://github.com/node-facebook/facebook-node-sdk

# Update 2
- Downloaded data from twitter using API and social media websites about currencies (present in folder results)
- Write python code to extract usefull data from these responses.
- Applied analysis on that data (present in file named "data.xls")
  * Location of people tweeting about currencies (for getting interest of people)
  * Followers of people tweeting about currencies (for credability)
