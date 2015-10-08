function ExpCal()
{
	var ExpLeft;
	var LevelMax;
	var InpLevel, InpExp, InpPrompt, InpRarity;
	var InpFeed5, InpFeed20, InpFeed100;
	var InpFeed5x, InpFeed20x, InpFeed100x;
		
	var ExpTable = [];
	ExpTable[2] = [0, 33, 34, 59, 83, 114, 152, 189, 231, 276, 323, 373, 426, 479, 537, 597, 655, 721, 785, 852, 921, 990, 1065, 1138, 1212, 1291, 1371, 1449, 1533, 1613, 1702, 1786, 1874, 1965, 2054, 2146, 2240, 2335, 2429, 2530, 2625, 2725, 2827, 2929, 3034, 3136, 3244, 3351, 3458, 3568, 3678, 3788, 3903, 4016, 4132, 4217, 4364, 4482, 4602, 4720];
	ExpTable[4] = [0, 34, 37, 62, 92, 129, 168, 211, 258, 308, 363, 416, 478, 537, 601, 671, 736, 807, 881, 958, 1034, 1113, 1194, 1279, 1363, 1450, 1539, 1628, 1723, 1815, 1911, 2007, 2109, 2207, 2308, 2415, 2517, 2625, 2731, 2843, 2952, 3064, 3178, 3295, 3409, 3527, 3648, 3768, 3888, 4011, 4135, 4263, 4388, 4516, 4645, 4776, 4907, 5041, 5176, 5308];
	ExpTable[5] = [0, 34, 41, 65, 101, 141, 186, 233, 285, 341, 400, 463, 527, 596, 668, 741, 818, 897, 976, 1061, 1149, 1233, 1327, 1418, 1512, 1610, 1709, 1808, 1910, 2017, 2121, 2230, 2339, 2452, 2564, 2679, 2796, 2913, 3036, 3156, 3278, 3404, 3529, 3658, 3788, 3917, 4051, 4184, 4320, 4454, 4594, 4735, 4873, 5017, 5160, 5305, 5451, 5599, 5748, 5897, 6049, 6201, 6357, 6513, 6667, 6825, 6984, 7145, 7307, 7469];
	ExpTable[6] = [0, 34, 41, 69, 105, 146, 191, 242, 296, 353, 417, 479, 548, 622, 691, 771, 851, 929, 1018, 1102, 1192, 1284, 1379, 1475, 1572, 1673, 1777, 1880, 1986, 2096, 2205, 2319, 2433, 2549, 2667, 2785, 2907, 3030, 3155, 3282, 3409, 3540, 3671, 3804, 3937, 4074, 4211, 4351, 4491, 4634, 4776, 4992, 5069, 5217, 5365, 5518, 5668, 5822, 5977, 6133, 6290, 6450, 6608, 6772, 6935, 7098, 7263, 7429, 7559, 7767];
	
	InpLevel = document.getElementById("InpLevel").value;
	InpExp = document.getElementById("InpExp").value;
	
	InpFeed5 = document.getElementById("InpFeed5").value;
	InpFeed20 = document.getElementById("InpFeed20").value;
	InpFeed100 = document.getElementById("InpFeed100").value;
	InpFeed5x = document.getElementById("InpFeed5x").value;
	InpFeed20x = document.getElementById("InpFeed20x").value;
	InpFeed100x = document.getElementById("InpFeed100x").value;
	
	if (document.getElementById("InpRar2").checked)
	{
  	InpRarity = document.getElementById("InpRar2").value;
	}
	else if (document.getElementById("InpRar3").checked)
	{
  	InpRarity = document.getElementById("InpRar3").value;
	}
	else if (document.getElementById("InpRar4").checked)
	{
  	InpRarity = document.getElementById("InpRar4").value;
	}
	else if (document.getElementById("InpRar5").checked)
	{
  	InpRarity = document.getElementById("InpRar5").value;
	}
	else if (document.getElementById("InpRar6").checked)
	{
  	InpRarity = document.getElementById("InpRar6").value;
	}
	
	if (document.getElementById("InpPro0").checked)
	{
  	InpPrompt = document.getElementById("InpPro0").value;
	}
	else if (document.getElementById("InpPro1").checked)
	{
  	InpPrompt = document.getElementById("InpPro1").value;
	}


	if ( InpPrompt == 0)
		LevelMax = 0;
	else if ( InpPrompt == 1 )
		LevelMax = 10;
						
	var TableInd = 2;
	if ( InpRarity == 2 || InpRarity == 3)
	{
		LevelMax = LevelMax + 50;
	}
	else if (InpRarity == 4)
	{
		LevelMax = LevelMax + 50;
		TableInd = 4;
	}
	else if (InpRarity == 5)
	{
		LevelMax = LevelMax + 60;
		TableInd = 5;
	}
	else if (InpRarity == 6)
	{
		LevelMax = LevelMax + 60;
		TableInd = 6;
	}
	
	if ( InpLevel > LevelMax)
	{
		document.getElementById("output").innerHTML = "Lv数値が正しくありません";
	}
	else
	{
		if ( InpExp > ExpTable[TableInd][InpLevel])
		{
			document.getElementById("output").innerHTML = "経験値数値が正しくありません";
		}
		else
		{
			var i = InpLevel;
			ExpLeft = 0;
			while (i < LevelMax)
			{
				ExpLeft = ExpLeft + ExpTable[TableInd][i];
				i++;
			}
			
			ExpLeft += InpExp - ExpTable[TableInd][InpLevel];
			ExpLeft -= InpFeed5*1080 + InpFeed20*2700 + InpFeed100*7200;
			ExpLeft -= InpFeed5x*720 + InpFeed20x*1800 + InpFeed100x*4800;
			FeedCal(ExpLeft);
		}
	}
}

function FeedCal(ExpLeft)
{
	var RepTimes, i;
	var cnt5, cnt20, cnt100;
	var ExpT, cnt, overflow;
	var OutputText = "";
	
	OutputText = "<p>最大Lvまでの経験値：";
	OutputText += parseInt(ExpLeft);
		
	OutputText += "</p><p>最大Lvまでにあと必要な同属性素材の目安</p>" +
	"<table class=\"mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp\">" +
  "<thead>" +
  "  <tr>" +
  "    <th>100才</th>" +
  "    <th>20才</th>" +
  "    <th>5才</th>" +
  "    <th>總數</th>" +
  "    <th>溢出経験値</th>" +
  "  </tr>" +
  "</thead>" +
  "<tbody>";
	
	RepTimes = ExpLeft / 7200;
	i = 0;
	
	while (i <= RepTimes && i < 8 )
	{
		cnt100 = Math.floor(ExpLeft / 7200);
		cnt100 = cnt100 - i;
		cnt20 = Math.floor(( ExpLeft - cnt100*7200 ) / 2700);
		cnt5 = Math.floor(( ExpLeft - cnt100*7200 - cnt20*2700 ) / 1080) + 1;
		
		ExpT = ( cnt100*7200 + cnt20*2700 + cnt5*1080 );	
		overflow = ExpT - ExpLeft;
		
		if ( overflow >= 1080 )
		{
			cnt5 = cnt5 - 1;
			ExpT = ( cnt100*7200 + cnt20*2700 + cnt5*1080 );
			overflow = ExpT - ExpLeft;
		}
				
		if ( cnt5 == 3 && overflow >= 540)
		{
			cnt20 = cnt20 + 1;
			cnt5 = cnt5 - 3;
			ExpT = ( cnt100*7200 + cnt20*2700 + cnt5*1080 );
			overflow = ExpT - ExpLeft;
		}
			
		cnt = ( cnt100 + cnt20 + cnt5 );

		OutputText += "<tr>" +
		"<td>" + parseInt(cnt100) + "</td>" +
		"<td>" + parseInt(cnt20) + "</td>" +
		"<td>" + parseInt(cnt5) + "</td>" +
		"<td>" + parseInt(cnt) + "</td>" +
		"<td>" + parseInt(overflow) + "</td>" +
		"</tr>";
		
		i++;
	}
	OutputText += "</tbody></table></p>";
	
	document.getElementById("output").innerHTML = OutputText;
	componentHandler.upgradeDom();
}