import React from 'react';

const Blog = () => {
    return (
        <section className="dark:bg-gray-200 dark:text-gray-800" data-aos="fade-up" data-aos-duration="800">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-center text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                <div className="space-y-4 mt-10">
                    <details className="w-full border-2 rounded-lg">
                        <summary className="px-4 py-4 text-lg font-semibold text-black focus:outline-none focus-visible:ring-violet-400">What are the different ways to manage a state in a React application?</summary>
                        <p className="px-4 pt-4 ml-4 -mt-3 dark:text-gray-900">There are four main types of state to properly manage in React apps:
                        </p>
                        <ul className='list-disc ml-12'>
                            <li className='mt-2'>Local (UI) state – Local state is data we manage in one or another component.</li>
                            <li className='mt-2'>Global (UI) state – Global state is data we manage across multiple components.</li>
                            <li className='mt-2'>Server state – Data that comes from an external server that must be integrated with our UI state.</li>
                            <li className='mt-2'>URL state – Data that exists on our URLs, including the pathname and query parameters.</li>
                        </ul>
                    </details>

                    <details className="w-full border-2 rounded-lg">
                        <summary className="px-4 py-4 text-lg font-semibold text-black focus:outline-none focus-visible:ring-violet-400">How does prototypical inheritance work?</summary>
                        <p className="px-4 pt-4 ml-4 -mt-3 dark:text-gray-900">The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [Prototype] of an object, we use Object. getPrototypeOf and Object. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype
                        </p>
                    </details>

                    <details className="w-full border-2 rounded-lg">
                        <summary className="px-4 py-4 text-lg font-semibold text-black focus:outline-none focus-visible:ring-violet-400">What is a unit test? Why should we write unit tests?</summary>
                        <p className="px-4 pt-4 ml-4 -mt-3 dark:text-gray-900">Unit testing is a type of software testing where individual units or software components are tested. The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                        </p>
                    </details>

                    <details className="w-full border-2 rounded-lg">
                        <summary className="px-4 py-4 text-lg font-semibold text-black focus:outline-none focus-visible:ring-violet-400">React vs. Angular vs. Vue?</summary>
                        <div className="px-4 pt-4 ml-4 -mt-3 dark:text-gray-900">
                            <h2 className='my-6 text-lg font-semibold'>Architecture</h2>
                            <p>
                                Speaking of architecture, Angular.js is a full-fledged MVC framework that provides you with all the possibilities for out-of-the-box programming:
                            </p>

                            <ul className='list-disc ml-5 mt-2 mb-5'>
                                <li>Templates based on HTML;</li>
                                <li>Dependency injection;</li>
                                <li>Encapsulation of CSS components;</li>
                                <li>Ajax requests;</li>
                                <li>Routing</li>
                                <li>Components testing utilities</li>
                            </ul>

                            <p className='mt-2'>React.js is a library that just offers the view, leaving the developer to decide how to construct the Model and Controller. The following features are provided:</p>

                            <ul className='list-disc ml-5 mt-2 mb-5'>
                                <li>As an add-on to JavaScript, the JSX language</li>
                                <li>No introduction of dependencies;</li>
                                <li>Ajax requests;</li>
                            </ul>

                            <p>
                                Vue.js is primarily concerned with the ViewModel layer of the MVVM architecture. It uses two-way data bindings to attach the View and the Model.
                            </p>


                            <h2 className='text-lg font-semibold my-8'>Data Binding</h2>
                            <p>Angular.js uses the two-way binding. The state of the model is changed first, and then the modification of the interface element is reflected. The interface element changes as the model’s state changes, which is why two-way data binding is used.</p>

                            <p className='my-3'>React.js has one-way binding. First, the state of the model is updated, and then it reflects the change of the interface element. If you change the interface element, the state of the model stays the same.</p>

                            <p className="my-3">As on Angular, the data binding on Vue.js is two-way. Vue.js synchronizes the entire model with the DOM mechanically. This implies that all Vue.js templates are fundamentally legal, parsable HTML with a few extra features. Remember this because Vue templates are fundamentally different from string-based templates.</p>

                            <h2 className='text-lg font-semibold mt-8'>Ease of learning</h2>

                            <p className='my-5'>In the case of React.js, you need to learn JSX first, which is not a problem since it’s quite simple. Then you need to go through the routing library (react-router v4, for example) and then the state management libraries (Redux or MobX).</p>

                            <p className='my-5'>In the case of Angular, there are way more steps to make and information to learn. From basic terms (directives, modules, decorators, components, services, dependency inputs, pipes, and templates), this is followed by topics as change detection, zones, AoT compilation, and Rx.js.</p>

                            <p className='my-5'>And in the case of Vue.js, the fundamental features may be implemented in the first web applications in the least amount of time. Vue is simpler to understand than Angular or React since it is more adaptable. Furthermore, Vue’s functionality, such as the use of components, overlaps with that of Angular and React. Vue.js’s simplicity and adaptability, on the other hand, have a drawback: it enables poor code that is tough to debug and test.</p>

                            <h2 className='my-7 text-lg font-semibold'>Which One Is Better?</h2>
                            <p className='my-5'>
                                Angular.js offers a very clear structure and lots of features. It allows development teams to move quickly to implementation without the need to define structures or look for additional libraries. However, it is often too overloaded for small projects and brings unnecessary ballast.
                            </p>

                            <p className='my-5'>
                                React is recommended for projects with front-end-heavy results. Since there are no clear structures, close cooperation between the development team is vital. React has a stronger server-side rendering support, making the library more SEO-friendly.
                            </p>

                            <p className='my-5'>
                                Vue may be used for a wide range of applications. It may give a great solution for virtually every project type due to its interoperability with other JavaScript frameworks and its ability to add more complicated logic to current programs.
                            </p>
                        </div>
                    </details>

                </div>
            </div>
        </section>
    );
};

export default Blog;