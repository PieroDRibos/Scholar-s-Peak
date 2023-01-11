import requests, re, sys
#import mysql.connector as mariadb
from datetime import datetime
from urllib.request import urlopen,Request
from bs4 import BeautifulSoup as soup

#mariadb_connection = mariadb.connect(user='omea', password='', database='citations')
#cursor = mariadb_connection.cursor()

scholar = sys.argv[1]

url = 'https://scholar.google.gr/citations?hl=el&user='+scholar+'#d=gsc_md_hist'
req = Request(url, headers={'User-Agent': 'Mozilla/5.0'})
uClient = urlopen(req)
page_html = uClient.read()
uClient.close()
page_soup = soup(page_html, "html.parser")
containers = page_soup
# print(containers)

m = re.search('<div class="gsc_md_hist_b">(.+?)</div>',str(containers),re.DOTALL)
# print(m)
if not m:
	print("Could not find the histogram!")
	sys.exit(1)
hist = m.group(1)

years = re.findall('px">(\d+)</span>',hist)

if not years:
	print("Could not find any years!")
	sys.exit(1)

# print(years)
count = len(years)
#print count
# maxpx = 8 + (count-1)*32

px = 8
pxs = {}
for y in reversed(years):
    pxs[px] = y
    px += 32

#<a href="javascript:void(0)" class="gsc_g_a" style="right:648px;top:140px;height:20px;z-index:21"><span class="gsc_g_al">1</span></a>

parts = hist.split('<a class="gsc_g_a" href="javascript:void(0)"')
parts.pop(0)

citations = {}

for part in parts:

    m = re.search('right:(\d+)px.+?>(\d*)</span>',part)
    if not m:
        print("Could not find the px value and citations")
        sys.exit(1)
        
    px = int(m.group(1))
    c = m.group(2)

    year = pxs[px]

    citations[year]=c
    
currentYear = datetime.now().year

if str(currentYear) not in years:
	years.append(str(currentYear))
	citations[currentYear]=0
if str(currentYear-1) not in years:
	years.append(str(currentYear-1))
	citations[currentYear-1]=0

for y in sorted (years, reverse=True):
	if y in citations:
		c = citations[y]
	else:
		c = 0
	print('%s:%s' % (y,c))
	sql = "INSERT INTO citations (gsid,cyear,counter) VALUES (%s, %s, %s) ON DUPLICATE KEY UPDATE counter=%s"
	val = (sys.argv[1],y,c,c)
	#cursor.execute(sql, val)	
	#mariadb_connection.commit()
	
m = re.search('</a></td><td class="gsc_rsb_std">(\d+)</td><td class="gsc_rsb_std">(\d+)</td></tr><tr><td class="gsc_rsb_sc1"><a',str(containers),re.DOTALL)
if not m:
    print("Could not find the gsc_rsb_std!")
    sys.exit(1)
total = m.group(1)
total5 = m.group(2)

print("Sum of citations:"+total)
print("Sum of citations5:"+total5)

m = re.search('h-index</a></td><td class="gsc_rsb_std">(\d+)</td><td class="gsc_rsb_std">(\d+)</td>',str(containers),re.DOTALL)
hindex = m.group(1)
hindex5 = m.group(2)
print("h-index:"+hindex)
print("h-index5:"+hindex5)
sql = "UPDATE dep SET hindex=%s, citations=%s, hindex5=%s, citations5=%s WHERE gsid=%s"
val = (hindex,total,hindex5,total5,sys.argv[1])
#cursor.execute(sql, val)	
#mariadb_connection.commit()
#mariadb_connection.close
