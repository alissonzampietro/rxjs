import { of, map } from 'rxjs';
import { Interval } from './operators';

const obs$ = of(1, 2, 3);

obs$.pipe(map((x) => x * x))
    .subscribe((v) => console.log(`value: ${v}`));


obs$.pipe(map((x) => x * 3))
    .subscribe((v) => console.log(`value: ${v}`));


Interval();

// Logs:
// value: 1
// value: 4
// value: 9