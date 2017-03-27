import DiscourseURL from 'discourse/lib/url';

export default {
  name: 'url-redirects',
  after: 'inject-objects',

  initialize(container) {

    const currentUser = container.lookup('current-user:main');

    // URL rewrites (usually due to refactoring)
    DiscourseURL.rewrite(/^\/category\//, "/c/");
    DiscourseURL.rewrite(/^\/group\//, "/groups/");
    DiscourseURL.rewrite(/\/private-messages\/$/, "/messages/");
    DiscourseURL.rewrite(/\/users\//, "/u/");

    if (currentUser) {
      const username = currentUser.get('username');
      DiscourseURL.rewrite(new RegExp(`^/users/${username}/?$`, "i"), `/users/${username}/activity`);
      DiscourseURL.rewrite(new RegExp(`^/u/${username}/?$`, "i"), `/u/${username}/activity`);
    }

    DiscourseURL.rewrite(/^\/users\/([^\/]+)\/?$/, "/users/$1/activity");
    DiscourseURL.rewrite(/^\/u\/([^\/]+)\/?$/, "/u/$1/activity");
  }
};
