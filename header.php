<?php	/* 	 * div that plugs in the header region for every page 	 */	function showLogonInfo(){		// no user logged on		if(!isset($_SESSION['email'])) {			echo "<td width='30%'><div class='welcome'><a class='welcome' href = 'signin.php'>Sign In</a></div></td>";		}		else {			echo "<td width='30%'><div class= 'welcome'>Welcome ".$_SESSION['name'];			echo "<a href='server/signoff.php'> Sign off</a></div>";                        echo "<div class='headermenu'><a href='default.php'> Home</a>";                        echo "<a  href='myCourse.php'> Course</a></div></td>";					}	}		?>		<div class="toptable">	<table align="center" class = "header"  width="85%" cellpadding="10px">		<tr class= "header-top">				<td  width="10%" >				<img width ="80px" height="80px" src="./image/sju.jpg"/> 			</td>                        <td width="60%"><div class ="sitetitle">Studio Based Leaning System</div></td>						<?php showLogonInfo() ?> 					</tr>			</table></div><div class = "orange-bar"></div>