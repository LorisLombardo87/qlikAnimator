define([
        'jquery',
        /*'underscore',*/
        'qlik',
        './properties',
        './initialproperties',
        './lib/js/extensionUtils',
        'text!./lib/css/style.css',
        'text!./lib/external/scoped-bootstrap.css',
        'text!./lib/partials/template.html',
],
function ($, /*_,*/ qlik, props, initProps, extensionUtils, cssContent, bootstrapCss, template) {
    'use strict';

    extensionUtils.addStyleToHeader(cssContent);
    extensionUtils.addStyleToHeader(bootstrapCss);


    // console.log('Initializing - remove me');

    return {

        definition: props,

        initialProperties: initProps,

        snapshot: { canTakeSnapshot: true },

        resize : function( /*$element, layout*/ ) {
            //do nothing
        },

		//clearSelectedValues : function($element) {
		//
		//},


        // Angular Support (uncomment to use)
        template: template,

        // Angular Controller
        controller: ['$scope','$timeout', function ($scope, $timeout) {

            //console.log('[qlik animator]',$scope.layout);

            var cycleTime = null;
            var stateName = '$';

            $scope.step = -1;
            $scope.stepValue = '';

    		$scope.play = function () {

                //console.log('[qlik animator - start cycle]',cycleTime);

                cycleTime = $scope.layout.props.time;
                stateName = $scope.layout.qStateName?$scope.layout.qStateName:'$';

                $scope.list = $.extend(true, [], $scope.layout.qHyperCube.qDataPages[0].qMatrix);
                $scope.field = $scope.layout.qHyperCube.qDimensionInfo[0].qGroupFieldDefs[0];

                $scope.step = -1;
                $scope.stepValue = '';

                playStep();
            }

            function playStep() {
                
                $scope.step++;

                if($scope.step<($scope.list.length)){

                    $scope.stepValue = $scope.list[$scope.step][0];

                    // console.log('[qlik animator - play step]', $scope.step);
                    // console.log('[qlik animator - selecting]', $scope.stepValue);

                    qlik.currApp(this).field($scope.field, stateName).clear();
                    qlik.currApp(this).field($scope.field, stateName).select([$scope.stepValue.qElemNumber], true, true);

                    $timeout(function(){playStep()}, cycleTime);
                }
                else if($scope.step==($scope.list.length)){
                    
                    $timeout(function(){
                        $scope.step = -1;
                        // console.log('clear');
                        qlik.currApp(this).field($scope.field).clear();
                    },  cycleTime);
                }
            }
        }],


        paint: function ( $element /*, layout*/ ) {

            /*
            console.groupCollapsed('Basic Objects');
            console.info('$element:');
            // console.log($element);
            console.info('layout:');
            // console.log(layout);
            console.groupEnd();
            */

            // $element.empty();
            // var $helloWorld = $(document.createElement('div'));
            // $helloWorld.addClass('hello-world');
            // $helloWorld.html('Hello World from the extension "Qlik Animator"');
            // $element.append($helloWorld);

        }
    };

});
