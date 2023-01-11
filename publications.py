import requests, re, sys
#import mysql.connector as mariadb
from datetime import date
from datetime import datetime
from urllib.request import urlopen,Request
from bs4 import BeautifulSoup as soup
import time

todays_date = date.today() 
curyear=todays_date.year

#mariadb_connection = mariadb.connect(user='omea', password='', database='citations')
#cursor = mariadb_connection.cursor()

headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'}

pubs = {}

scholar = sys.argv[1]

for y in range(curyear-40, curyear+1):
	pubs[y]=0
	
total=0
total2=0
for x in range(0, 2000, 100):
	url = 'https://scholar.google.gr/citations?hl=el&user='+scholar+'&cstart='+str(x)+'&pagesize=100'
	# response = requests.get(url, headers=headers)
	response = {}
	req = Request(url, headers={'User-Agent': 'Mozilla/5.0'})
	uClient = urlopen(req)
	page_html = uClient.read()
	uClient.close()
	page_soup = soup(page_html, "html.parser")
	containers = page_soup


	m = len(re.findall('class="gsc_a_at"',str(containers)))
	if (m == 0):
		break
	total += m
	years = re.findall('<span class="gsc_a_h gsc_a_hc gs_ibl">(\d+)</span>',str(containers))
	for y in years:
		try:
			pubs[int(y)]+=1
		except KeyError:
			print("Unknown key")	
		total2+=1

	

total5=0
for i in pubs:
	if (pubs[i] != 0):
		print('%s:%s' % (i,pubs[i]))	 
		sql = "INSERT INTO publications (gsid,cyear,counter) VALUES (%s, %s, %s) ON DUPLICATE KEY UPDATE counter=%s"
		val = (scholar,i,pubs[i],pubs[i])
		#cursor.execute(sql, val)	
		#mariadb_connection.commit()
		if (int(i) >= int(curyear)-5):
			total5+=pubs[i]
		

print("Sum of publications:"+str(total))
print("Sum of publications5:"+str(total5))

none = total-total2
if (none>0):
	sql = "INSERT INTO publications (gsid,cyear,counter) VALUES (%s, %s, %s) ON DUPLICATE KEY UPDATE counter=%s"
	val = (scholar,-1,none,none)
	#cursor.execute(sql, val)	
	#mariadb_connection.commit()

sql = "UPDATE dep SET publications=%s, publications5=%s WHERE gsid=%s"
val = (total,total5,scholar)
#cursor.execute(sql, val)	
#mariadb_connection.commit()

#mariadb_connection.close	
