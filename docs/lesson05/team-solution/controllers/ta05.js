/************************************
 * Team Activity 05 Controller. 
 * All of your logic is handled here
 ************************************/

exports.postCreateCookie = (req, res, next) => {
    console.log('Cookie creation!');
};

exports.postStyle = (req, res, next) => {
    req.session.style = req.body.css_style;
    res.redirect('/teamActivities/05'); // For now, you need to redirect to view the changes without manually refreshing.
};


exports.postCounter= (req, res, next) => {
    req.session.counter += Number(req.body.constant); // Need to convert it from string to integer.
    res.redirect('/teamActivities/05');
};

exports.resetSession= (req, res, next) => {
    if (req.body.reset === 'true') {
        req.session.destroy(() => {
            res.redirect('/teamActivities/05'); // Redirect must be passed through the callback   
        })
    } else {
        /// We don't destroy the session otherwise...
        res.redirect('/teamActivities/05');
    }
};

exports.getIndex = (req, res, next) => {
    // It's a good idea to initialize session variables to some sort of default value
    if (req.session.counter === undefined) {
        req.session.counter = 0;
    }
    if (!req.session.style === undefined) {
        req.session.counter = 0;
    }
    res.render('pages/teamActivities/ta05', { 
        title: 'Team Activity 05', 
        path: '/ta05',
        style: req.session.style,
        counter: req.session.counter
    });
};