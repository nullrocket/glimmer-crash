import Route from '@ember/routing/route';
import {later} from '@ember/runloop';
export default Route.extend({
  count:0,
  actions:{
    didTransition(){

      later(this,()=>{
        this.incrementProperty('count');
      if(this.get('count')< 100) {
        this.transitionTo('route1');
      }
    },50);

    }
  }
});
