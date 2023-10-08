import { Link } from "react-router-dom";


const Blogs = () => {
    return (
        <div className="p-10">
            <div className="mb-10 bg-slate-200 p-10 rounded-xl ">
                <h2 className="text-xl font-bold text-slate-600 mb-5">React Canaries: Enabling Incremental Feature Rollout Outside Meta</h2>
                <p className="ml-8">We’d like to offer the React community an option to adopt individual new features as soon as their design is close to final, before they’re released in a stable version—similar to how Meta has long used bleeding-edge versions of React internally. We are introducing a new officially supported Canary release channel. It lets curated setups like frameworks decouple adoption of individual React features from the React release schedule.tl;dr We’re introducing an officially supported Canary release channel for React. Since it’s officially supported, if any regressions land, we’ll treat them with a similar urgency to bugs in stable releases.
Canaries let you start using individual new React features before they land in the semver-stable releases.
Unlike the Experimental channel, React Canaries only include features that we reasonably believe to be ready for adoption. We encourage frameworks to consider bundling pinned Canary React releases.
We will announce breaking changes and new features on our blog as they land in Canary releases.
As always, React continues to follow semver for every Stable release.</p>
            </div>

            <div className="mb-10 bg-slate-200 p-10 rounded-xl ">
                <h2 className="text-xl font-bold text-slate-600 mb-5">How React features are usually developed</h2>
                <p className="ml-8">Typically, every React feature has gone through the same stages:

We develop an initial version and prefix it with experimental_ or unstable_. The feature is only available in the experimental release channel. At this point, the feature is expected to change significantly.
We find a team at Meta willing to help us test this feature and provide feedback on it. This leads to a round of changes. As the feature becomes more stable, we work with more teams at Meta to try it out.
Eventually, we feel confident in the design. We remove the prefix from the API name, and make the feature available on the main branch by default, which most Meta products use. At this point, any team at Meta can use this feature.
As we build confidence in the direction, we also post an RFC for the new feature. At this point we know the design works for a broad set of cases, but we might make some last minute adjustments.
When we are close to cutting an open source release, we write documentation for the feature and finally release the feature in a stable React release.
This playbook works well for most features we’ve released so far. However, there can be a significant gap between when the feature is generally ready to use (step 3) and when it is released in open source (step 5).

We’d like to offer the React community an option to follow the same approach as Meta, and adopt individual new features earlier (as they become available) without having to wait for the next release cycle of React.

As always, all React features will eventually make it into a Stable release.</p>
            </div>

            <div className="mb-10 bg-slate-200 p-10 rounded-xl ">
                <h2 className="text-xl font-bold text-slate-600 mb-5">Can we just do more minor releases? </h2>
                <p className="ml-8">Generally, we do use minor releases for introducing new features.

However, this isn’t always possible. Sometimes, new features are interconnected with other new features which have not yet been fully completed and that we’re still actively iterating on. We can’t release them separately because their implementations are related. We can’t version them separately because they affect the same packages (for example, react and react-dom). And we need to keep the ability to iterate on the pieces that aren’t ready without a flurry of major version releases, which semver would require us to do.

At Meta, we’ve solved this problem by building React from the main branch, and manually updating it to a specific pinned commit every week. This is also the approach that React Native releases have been following for the last several years. Every stable release of React Native is pinned to a specific commit from the main branch of the React repository. This lets React Native include important bugfixes and incrementally adopt new React features at the framework level without getting coupled to the global React release schedule.

We would like to make this workflow available to other frameworks and curated setups. For example, it lets a framework on top of React include a React-related breaking change before this breaking change gets included into a stable React release. This is particularly useful because some breaking changes only affect framework integrations. This lets a framework release such a change in its own minor version without breaking semver.

Rolling releases with the Canaries channel will allow us to have a tighter feedback loop and ensure that new features get comprehensive testing in the community. This workflow is closer to how TC39, the JavaScript standards committee, handles changes in numbered stages. New React features may be available in frameworks built on React before they are in a React stable release, just as new JavaScript features ship in browsers before they are officially ratified as part of the specification.</p>
            </div>
            <div>
                <Link to="/">
                    <button className="btn btn-primary w-full">Back to Homepage</button>
                </Link>
                
            </div>
        </div>
    );
};

export default Blogs;