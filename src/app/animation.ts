import {
  trigger, animateChild, group,
  transition, animate, style, query, keyframes
} from '@angular/animations';


// slideInAnimation
export const slideInAnimation =
trigger('routeAnimations', [
  transition('* <=> *', [
    // initial state of new route
    query(':enter',
      style({
        position: 'absolute',
        width: '100%',
        transform: 'translateX(-100%)'
      }),
      {optional: true}),

    // move page off screen right on leave
    query(':leave',
      animate('500ms ease',
        style({
          position: 'absolute',
          width: '100%',
          transform: 'translateX(100%)'
        })
      ),
    {optional: true}
    ),

    // move page in screen from left to right
    query(':enter',
      animate('500ms ease',
        style({
          opacity: 1,
          transform: 'translateX(0%)'
        })
      ),
    {optional: true}),
  ])
]);

// stepper
export const stepper =
  trigger('routeAnimations', [
    transition('* <=> *', [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
        }),
      ]),
      group([
        query(':enter', [
          animate('2000ms ease', keyframes([
            style({ transform: 'scale(0) translateX(100%)', offset: 0 }),
            style({ transform: 'scale(0.5) translateX(25%)', offset: 0.3 }),
            style({ transform: 'scale(1) translateX(0%)', offset: 1 }),
          ])),
        ]),
        query(':leave', [
          animate('2000ms ease', keyframes([
            style({ transform: 'scale(1)', offset: 0 }),
            style({ transform: 'scale(0.5) translateX(-25%) rotate(0)', offset: 0.35 }),
            style({ opacity: 0, transform: 'translateX(-50%) rotate(-180deg) scale(6)', offset: 1 }),
          ])),
        ])
      ]),
    ])

]);
