angular.module('starter.controllers',[])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $location, $state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.getDateTime = new Date();
  $scope.dd = $scope.getDateTime.getDate();
  $scope.mm =$scope.getDateTime.getMonth()+1; //January is 0!
  $scope.yyyy = $scope.getDateTime.getFullYear();



  $ionicModal.fromTemplateUrl('templates/about.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
  // Triggered in the login modal to close it
  $scope.closeAbout = function() {
    $scope.modal.hide();
  };
  // Open the login modal
  $scope.about = function() {
    $scope.modal.show();
  };

 
  $ionicModal.fromTemplateUrl('templates/about.html', {
    scope: $scope
  }).then(function(modal) {
  $scope.modal9 = modal;
});




  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };
  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

 
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
  $scope.modal99 = modal;
});
  


  $scope.history=[];
  //$localStorage.message =history;
  window.localStorage.setItem("history", JSON.stringify($scope.history));

  $scope.appliances = {page:"Power Usage and Estimate",cfltubes: "0", chairlight: "0", computer: "0", fans: "0", halogen: "0", incadescentlamps: "0", lcdprojector: "0", spotlight: "0", tubelight: "0", tubes: "0"};

  $ionicModal.fromTemplateUrl('templates/showcalculation.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal2 = modal;
  });



  $scope.calculate = function(){
  $scope.modal2.show();
  console.log('Calculating', $scope.appliances);
  $scope.result = parseInt($scope.appliances.tubelight)*36 + parseInt($scope.appliances.spotlight)*80 + parseInt($scope.appliances.halogen)*500 + parseInt($scope.appliances.cfltubes)*11 + parseInt($scope.appliances.incadescentlamps)*400 + parseInt($scope.appliances.tubes)*9 + parseInt($scope.appliances.fans)*70+ parseInt($scope.appliances.lcdprojector)*300 + parseInt($scope.appliances.computer)*350 + parseInt($scope.appliances.chairlight)*3;
  $scope.result2 = $scope.result*6.91;
  $scope.timestamp =$scope.dd+"-"+$scope.mm+"-"+$scope.yyyy;
  // $scope.history=$localStorage.message;
  // $scope.history.push({page:$scope.appliances,timestamp:$scope.timestamp});
  // $localStorage.message=history;
  //updated
  $scope.history = JSON.parse(window.localStorage.getItem("history"));
  console.log('original history=',$scope.history);
  $scope.history.push({page:$scope.appliances,timestamp:$scope.timestamp,result:$scope.result2});
  console.log(' updated history+ original history=',$scope.history);
  window.localStorage.setItem("history", JSON.stringify($scope.history));
  //upated over
  };


  

  $scope.closeCalculation = function() {
    $scope.modal2.hide();
    $scope.modal3.hide();
    $scope.modal4.hide();
    $scope.modal5.hide();
    $scope.modal6.hide();
    $scope.modal7.hide();
    $scope.modal8.hide();
  };























  $scope.acappliances = {page:"AC calculation",cfltubes: "0", chairlight: "0", computer: "0", fans: "0", halogen: "0", incadescentlamps: "0", lcdprojector: "0", spotlight: "0", tubelight: "0", tubes: "0", length: "0", breadth: "0", height:"0", occupant: "0"};

  $scope.accalculation = function(){
  $location.path("#/app/accalculation2");
  };


  $scope.accalculation2 = function() {
  //DOES NOT EXIST ANYMORE
  };

  $ionicModal.fromTemplateUrl('templates/showaccalculation.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal3 = modal;
  });

  $scope.accalculation3 = function() {
  $scope.modal3.show();
  console.log('Calculating', $scope.appliances);
  $scope.result = parseInt($scope.acappliances.tubelight)*36 + parseInt($scope.acappliances.spotlight)*80 + parseInt($scope.acappliances.halogen)*500 + parseInt($scope.acappliances.cfltubes)*11 + parseInt($scope.acappliances.incadescentlamps)*400 + parseInt($scope.acappliances.tubes)*9 + parseInt($scope.acappliances.fans)*70+ parseInt($scope.acappliances.lcdprojector)*300 + parseInt($scope.acappliances.computer)*350 + parseInt($scope.acappliances.chairlight)*3;
  //ALL THE VARIABLES THAT ARE REQUIRED FOR AC CALCULATION THAT ARE NOT TAKEN FROM USER ARE DEFINED HERE, ALL THE CONSTANTS BASICALLY
  $scope.insidetemp = 25;
  $scope.outsidetemp = 35;
  $scope.absolutehumidity = 0.028;
  $scope.insidehumidity = 0.01;
  //STANDARD ASHRAE HANDBOOK CONSTANTS
  $scope.activity = 80;
  $scope.latentmetabolicrateofcommonman = 30;
  $scope.airrequirementperhead = 10;
  $scope.freshaircalculation = 0.3;
  //OTHER CONSTANTS
  $scope.rhinsideroom = 55;
  $scope.solargainwall = 0.7;
  $scope.solargainwindows = 5.6;
  $scope.solarisolution = 150;
  $scope.fsforwindows = 0.51; 
  $scope.volume = parseFloat($scope.acappliances.length)*parseFloat($scope.acappliances.breadth)*parseFloat($scope.acappliances.height);
  $scope.area = parseFloat($scope.acappliances.length)*parseFloat($scope.acappliances.breadth);
  $scope.airrequirement = parseFloat($scope.airrequirementperhead)*parseFloat($scope.acappliances.occupant);
  $scope.latentmetabolicrate = parseFloat($scope.latentmetabolicrateofcommonman)*parseFloat($scope.acappliances.occupant);
  $scope.totalactivity = parseFloat($scope.activity)*parseFloat($scope.acappliances.occupant);
  $scope.a = parseFloat($scope.freshaircalculation)*parseFloat($scope.airrequirement);
  $scope.b = (parseFloat($scope.outsidetemp)-parseFloat($scope.insidetemp))/1000;
  $scope.fraircalcload = $scope.a*$scope.b*1206;
  $scope.d = parseFloat($scope.absolutehumidity)-parseFloat($scope.insidehumidity);
  $scope.ldonsys = parseFloat($scope.a)*parseFloat(2482.7)*parseFloat($scope.d);
  $scope.uwall = 0.7;
  $scope.p = parseFloat($scope.acappliances.length)*parseFloat($scope.acappliances.breadth);
  $scope.q = parseFloat($scope.acappliances.length)*parseFloat($scope.acappliances.height);
  $scope.r = parseFloat($scope.acappliances.breadth)*parseFloat($scope.acappliances.height);
  $scope.diff = $scope.p+(2*$scope.q)+(2*$scope.r);
  $scope.tempdiff = $scope.outsidetemp-$scope.insidetemp;
  $scope.solarheatgain =$scope.uwall*$scope.diff*$scope.tempdiff;
  $scope.totalheatload = $scope.latentmetabolicrate+$scope.totalactivity+$scope.fraircalcload+$scope.ldonsys+$scope.result+$scope.solarheatgain;
  $scope.kwtotalheatload = $scope.totalheatload/1000;
  $scope.capacityofac = $scope.kwtotalheatload/3.5;
  $scope.excesscapacity = $scope.capacityofac*1.1;

  $scope.timestamp =$scope.dd+"-"+$scope.mm+"-"+$scope.yyyy;
  $scope.result = $scope.totalheatload;

  $scope.history = JSON.parse(window.localStorage.getItem("history"));
  console.log('original history=',$scope.history);
  $scope.history.push({page:$scope.acappliances,timestamp:$scope.timestamp,result:$scope.totalheatload});
  console.log(' updated history+ original history=',$scope.history);
  window.localStorage.setItem("history", JSON.stringify($scope.history));
  };























  $scope.lightappliances = {page:"Light Requirement",height:"0",lightceiling:"0",workingheight:"0",length:"0",breadth:"0"};

  $ionicModal.fromTemplateUrl('templates/showlightcalculation.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal4 = modal;
  });

  $scope.lightcalculation = function() {
    $scope.modal4.show();
    console.log('Calculating', $scope.appliances);

    //ROOM INDEX RI
    $scope.hm = parseFloat($scope.lightappliances.height)- parseFloat($scope.lightappliances.lightceiling)- parseFloat($scope.lightappliances.workingheight);
    $scope.ri = (parseFloat($scope.lightappliances.length)*(0.307692)*parseFloat($scope.lightappliances.breadth)*(0.307692))/((parseFloat(1)*(0.307692))+(parseFloat($scope.lightappliances.breadth)*(0.307692)))*($scope.hm);
    //UTILIZATION FACTOR AND STANDARD REQUIREMENT

    $scope.utifactor = 0.34;
    $scope.standardrequ = 40;
    //FOR CFL-15
    //NUMBER OF LAMPS PER LUMINAIRE 2
    //CFL LUMEN 800
    $scope.lmperlum = 2;
    $scope.cfl15lumen = 800;
    $scope.cfl20lumen = 1100;
    $scope.cfl26lumen = 1750;

    $scope.lightninglossfactor = 0.9;
    $scope.temp15 = $scope.lmperlum*$scope.cfl15lumen*$scope.lightninglossfactor*$scope.utifactor;
    $scope.cfl15pc = parseInt($scope.lightappliances.length*$scope.lightappliances.breadth*($scope.standardrequ/$scope.temp15));
    $scope.pwr15 = $scope.cfl15pc*30;
    //CFL20LUMEN
    $scope.temp20 = $scope.lmperlum*$scope.cfl20lumen*$scope.lightninglossfactor*$scope.utifactor;
    $scope.cfl20pc = parseInt($scope.lightappliances.length*$scope.lightappliances.breadth*($scope.standardrequ/$scope.temp20));
    $scope.pwr20 = $scope.cfl20pc*40;


    //CFL26LUMEN
    $scope.temp26 = $scope.lmperlum*$scope.cfl26lumen*$scope.lightninglossfactor*$scope.utifactor;
    $scope.cfl26pc = parseInt($scope.lightappliances.length*$scope.lightappliances.breadth*($scope.standardrequ/$scope.temp26));
    $scope.pwr26 = $scope.cfl26pc*52;

    $scope.timestamp =$scope.dd+"-"+$scope.mm+"-"+$scope.yyyy;
    $scope.result = {cfl15:$scope.pwr15, cfl20:$scope.pwr20, pwr26:$scope.pwr26};

  $scope.history = JSON.parse(window.localStorage.getItem("history"));
  console.log('original history=',$scope.history);
  $scope.history.push({page:$scope.lightappliances,timestamp:$scope.timestamp,result:$scope.pwr26});
  console.log(' updated history+ original history=',$scope.history);
  window.localStorage.setItem("history", JSON.stringify($scope.history));
  };


  
  

  $scope.fanappliances = {page:"Ventilation Requirement",height:"0",length:"0",width:"0",occupants:"0"};

  $ionicModal.fromTemplateUrl('templates/showfancalculation.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal5 = modal;
  });

  $scope.fancalculation = function() {
    $scope.modal5.show();
    console.log('Calculating', $scope.appliances);

	$scope.avg_person=5;
	$scope.conversion_fac_cfm=0.471947;
	$scope.bajajfan=2000;
	$scope.heavy_smoke=20;
	$scope.build_gen_poll=0.7;
	
  $scope.len = parseFloat($scope.fanappliances.length)*(12/39);
	$scope.wid = parseFloat($scope.fanappliances.width)*(12/39);
	$scope.hei = parseFloat($scope.fanappliances.height)*(12/39);
	$scope.volume = $scope.len*$scope.wid*$scope.hei;
	$scope.area = $scope.len*$scope.wid;
	$scope.airreq = parseFloat($scope.fanappliances.occupants)*$scope.avg_person;
	$scope.n_air_changes=$scope.airreq/$scope.volume;
	$scope.blower_fan_req=$scope.airreq/($scope.bajajfan*$scope.conversion_fac_cfm);
	
	
	$scope.human_pollution=parseFloat($scope.fanappliances.occupants)*$scope.heavy_smoke;
	$scope.poll_build=$scope.area*$scope.build_gen_poll;
	$scope.g=$scope.human_pollution+$scope.poll_build;

  $scope.log=Math.log(5);
  $scope.diff=5.98-($scope.log);
  $scope.value=Math.pow($scope.diff,4);
  $scope.ci=112/$scope.value;


  $scope.v=(10*$scope.g)/($scope.ci-0.2);

  $scope.n_air=($scope.v)/($scope.volume);

  $scope.timestamp =$scope.dd+"-"+$scope.mm+"-"+$scope.yyyy;
  $scope.result=$scope.n_air;

  $scope.history = JSON.parse(window.localStorage.getItem("history"));
  console.log('original history=',$scope.history);
  $scope.history.push({page:$scope.fanappliances,timestamp:$scope.timestamp,result:"0"});
  console.log(' updated history+ original history=',$scope.history);
  window.localStorage.setItem("history", JSON.stringify($scope.history));
  };


/**************************Heat and Cool***************************/


    $scope.hcappliances = {page:" Heating or cooling load ",height:"0",length:"0",width:"0",occupants:"0"};

  $ionicModal.fromTemplateUrl('templates/showheatcoolcalculation.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal6 = modal;
  });

  $scope.hccalculation = function() {
    $scope.modal6.show();
    console.log('Calculating', $scope.appliances);

    $scope.hclen = parseFloat($scope.hcappliances.length)*(12/39);
	$scope.hcwid = parseFloat($scope.hcappliances.width)*(12/39);
	$scope.hchei = parseFloat($scope.hcappliances.height)*(12/39);

	$scope.volume = $scope.hclen*$scope.hcwid*$scope.hchei;
	$scope.area = $scope.hclen*$scope.hcwid;	
  $scope.metabolic_rate_common_man=120;

  $scope.load_occu=parseFloat($scope.hcappliances.occupants)*$scope.metabolic_rate_common_man;
  $scope.power_rank=250; //only for MH
  $scope.light_load=parseFloat($scope.hcappliances.number_light)*$scope.power_rank;

  $scope.out_temp=35;
  $scope.in_temp=25;
  // 0.3 Fresh air Circulation is 
/*  Absolute Humidty outside    0.013
  Inside Humidity   0.0075
*/
  
  $scope.air_calc=((parseFloat($scope.hcappliances.air_req))*0.3*(1.226*1058)*($scope.out_temp-$scope.in_temp))/1000;
  
  $scope.latent_load=(0.3*(parseFloat($scope.hcappliances.air_req))*(1.226*2257)*(0.013-0.0075)*1000)/1000;
  
  $scope.total_heat=($scope.load_occu)+($scope.light_load)+($scope.air_calc)+($scope.latent_load);
  $scope.timestamp =$scope.dd+"-"+$scope.mm+"-"+$scope.yyyy;
  $scope.result=$scope.total_heat;
  $scope.history = JSON.parse(window.localStorage.getItem("history"));
  console.log('original history=',$scope.history);
  $scope.history.push({page:$scope.hcappliances,timestamp:$scope.timestamp,result:"0"});
  console.log(' updated history+ original history=',$scope.history);
  window.localStorage.setItem("history", JSON.stringify($scope.history));
  };






/******************************************************/
  
/*****************************************************/
  $scope.sgappliances = {page:"Solar Gain",wwwheight:"0",wwwlength:"0",wwtwheight:"0",wwtwlength:"0"};

  $ionicModal.fromTemplateUrl('templates/showsgcalculation.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal7 = modal;
  });

  $scope.sgcalculation = function() {
    $scope.modal7.show();
    console.log('Calculating', $scope.appliances);

	$scope.walls_exclude_window_length = parseFloat($scope.sgappliances.wwwlength)-parseFloat($scope.sgappliances.wwtwlength);
  $scope.walls_exclude_window_height = parseFloat($scope.sgappliances.wwwheight)-parseFloat($scope.sgappliances.wwtwheight);

  
  $scope.wewlm=($scope.walls_exclude_window_length)*0.307692;
  $scope.wewhm=($scope.walls_exclude_window_height)*0.307692;
  
  $scope.wewarea=($scope.wewlm)*($scope.wewhm);
  
  $scope.wwwlen = parseFloat($scope.sgappliances.wwwlength)*(0.307692);
  $scope.wwwhei = parseFloat($scope.sgappliances.wwwheight)*(0.307692);
  
  $scope.wwtwlen = parseFloat($scope.sgappliances.wwtwlength)*(0.307692);
  $scope.wwtwhei = parseFloat($scope.sgappliances.wwtwheight)*(0.307692);
  
  $scope.wwwarea = $scope.wwwlen * $scope.wwwhei;

  $scope.wwtwarea = $scope.wwtwlen * $scope.wwtwhei;
  
  $scope.solar_insolation=150;
  $scope.u_for_windows=5.6;
  
  $scope.solar_load=$scope.solar_insolation*$scope.u_for_windows*$scope.wwtwarea;
  
  $scope.u_wall=0.7;
  $scope.out_temp=35;
  $scope.in_temp=25;
  
  $scope.solar_load_ex_windows=$scope.u_wall*$scope.wewarea*($scope.out_temp-$scope.in_temp);
  
  $scope.addition_of_both=$scope.solar_load+$scope.solar_load_ex_windows;
  $scope.in_kw=$scope.addition_of_both/1000;
  $scope.in_tr=$scope.in_kw/3.5;
  $scope.result=$scope.in_kw;

  
  $scope.timestamp =$scope.dd+"-"+$scope.mm+"-"+$scope.yyyy;

	$scope.history = JSON.parse(window.localStorage.getItem("history"));
  console.log('original history=',$scope.history);
  $scope.history.push({page:$scope.sgappliances,timestamp:$scope.timestamp,result:"0"});
  console.log(' updated history+ original history=',$scope.history);
  window.localStorage.setItem("history", JSON.stringify($scope.history));
	};

 
  /***************************************************/
/*****************************************************/
  $scope.lsappliances = {page:"Lighting System",length:"0",width:"0",height:"0",lightceiling:"0",workingheight:"0"};

  $ionicModal.fromTemplateUrl('templates/showlscalculation.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal8 = modal;
  });

  $scope.lscalculation = function() {
    $scope.modal8.show();
    console.log('Calculating', $scope.appliances);

		$scope.lenm=parseFloat($scope.lsappliances.length)*(0.307692);
    $scope.heim=parseFloat($scope.lsappliances.height)*(0.307692);
    $scope.widthm=parseFloat($scope.lsappliances.width)*(0.307692);
    
    $scope.hm=($scope.heim)-((parseFloat($scope.lsappliances.lightceiling))-(parseFloat($scope.lsappliances.workingheight)));
  
    $scope.ri =(($scope.lenm)*($scope.widthm))/(($scope.lenm)+($scope.widthm))*$scope.hm;
  $scope.diff = parseFloat($scope.lsappliances.length)-parseFloat($scope.lsappliances.width);
  
  /*Metal Halide  14100
  Lighting loss factor  0.9
  CFL 1100

  LED 800

  */
  $scope.ch=$scope.lsappliances.choice;
  if(($scope.ch)=='1')
  { $scope.no_of_lights=(80*(($scope.lenm)*($scope.widthm)))/(($scope.lsappliances.utifact)*14100*0.9);}
  if(($scope.ch)=='2')
  { $scope.no_of_lights=(240*(($scope.lenm)*($scope.widthm)))/(($scope.lsappliances.utifact)*1100*0.9);}
  if(($scope.ch)=='3')
  { $scope.no_of_lights=(80*(($scope.lenm)*($scope.widthm)))/(($scope.lsappliances.utifact)*800*0.9);}
  
  $scope.result=$scope.no_of_lights;
$scope.timestamp =$scope.dd+"-"+$scope.mm+"-"+$scope.yyyy;
  $scope.history = JSON.parse(window.localStorage.getItem("history"));
  console.log('original history=',$scope.history);
  $scope.history.push({page:$scope.lsappliances,timestamp:$scope.timestamp,result:"0"});
  console.log(' updated history+ original history=',$scope.history);
  window.localStorage.setItem("history", JSON.stringify($scope.history));
	
	};


  /***************************************************/  

});