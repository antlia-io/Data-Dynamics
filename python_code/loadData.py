# -*- coding: utf-8 -*-
"""
Created on Sat Feb 15 22:49:12 2020

@author: Zeeshan
"""

import json;
import os;
import xlwt;
from xlwt import Workbook;

freq_sets_file="data.xls";
wb = Workbook();
sheet1 = wb.add_sheet('Sheet 1') ;

sheet1.write(0, 0, 'Currency') 
sheet1.write(0, 1, 'Screen Name') 
sheet1.write(0, 2, 'Location') 
sheet1.write(0, 3, 'Favorites') 
sheet1.write(0, 4, 'Follower Count')

folder = '../results/';
entries = os.listdir(folder);
#final_arr = []
i=0
for file_name in entries:
    f=open(folder+file_name, "r");
    if f.mode == 'r':
        json_data = f.read()
        parsed_json = (json.loads(json_data))
        for x in parsed_json['statuses']:
            i+=1;
#            print(x['user']['screen_name'],' | ',x['user']['location'],' | ',x['user']['favourites_count'],' | ',x['user']['followers_count'])
#            tmp = x['user']['screen_name'],x['user']['location'],x['user']['favourites_count'],x['user']['followers_count'];
#            final_arr.append(tmp)
#with open(freq_sets_file, 'w') as file:
#    file.write(json.dumps(final_arr))
#file.close()
            sheet1.write(i, 0, file_name) 
            sheet1.write(i, 1, x['user']['screen_name']) 
            sheet1.write(i, 2, x['user']['location']) 
            sheet1.write(i, 3, x['user']['favourites_count']) 
            sheet1.write(i, 4, x['user']['followers_count'])
  
wb.save(freq_sets_file);