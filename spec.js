var em = require('em.js'),
    as = em('appstack'),
    asc = em('./lib/as-contrib.js'),
    m = as.Matchers;

em('./specs/asc.js')(m,asc);
