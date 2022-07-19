export default function Experience() {
    const classnames = "bg-gray-900 bg-opacity-30 flex flex-col lg:flex-row p-5 backdrop-blur-xl rounded-lg items-center justify-between"
    return (
        <>
            {/* Chief Information Officer */}
            <div className={classnames}>
                <div className="basis-4/5">
                    <h3 className='font-bold'>
                        Chief Information Officer (CIO) and AI Engineer
                    </h3>
                    <p className='italic mt-2'>
                        Manentia Ai
                    </p>
                    <ul className="list-disc m-5">
                        <li>Developing CT scans and X-Ray data pipelines and model architectures for automatic abnormalities detection</li>
                        <li>Managing medical imaging data munging and preprocessing tasks</li>
                        <li>Handling <span className="italic">manentia.ai</span> website content and design</li>
                    </ul>
                </div>
                <div className="basis-1/5 text-center">Apr 2022 - Present<br />Gandhinagar, Gujarat, India</div>
            </div>


            {/* MRI Image Processor */}
            <div className={classnames}>
                <div className="basis-4/5">
                    <h3 className='font-bold'>
                        MRI Image Processor
                    </h3>
                    <p className='italic mt-2'>
                        Radiodiagnosis and Imaging Department, PGIMER
                    </p>
                    <ul className="list-disc m-5">
                        <li>
                            Worked on Diffusion Kurtosis Imaging (DKI) image preprocessing,
                            registration, and analysis on a research grant named MRSI and
                            DKI Evaluation of HIV-1 Clade C Infection in the Whole Brain in
                            collaboration with the University of Miami School of Medicine and
                            awarded/supported/administered by Fogarty International Center, U.S.
                            National Institutes of Health (NIH).

                        </li>
                        <li>
                            <a href="https://github.com/VirkSaab/DTIP"
                                target="_blank"
                                className='hover:underline'>
                                Worked on Diffusion Tensor Imaging (DTI) image processing and data analysis of Infantile Tremor Syndrome (ITS) in north India.
                                <svg
                                    className='inline pl-1 text-white fill-current'
                                    fill="#000000"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 30 30"
                                    width="20px"
                                    height="20px">
                                    <path d="M 25.980469 2.9902344 A 1.0001 1.0001 0 0 0 25.869141 3 L 20 3 A 1.0001 1.0001 0 1 0 20 5 L 23.585938 5 L 13.292969 15.292969 A 1.0001 1.0001 0 1 0 14.707031 16.707031 L 25 6.4140625 L 25 10 A 1.0001 1.0001 0 1 0 27 10 L 27 4.1269531 A 1.0001 1.0001 0 0 0 25.980469 2.9902344 z M 6 7 C 4.9069372 7 4 7.9069372 4 9 L 4 24 C 4 25.093063 4.9069372 26 6 26 L 21 26 C 22.093063 26 23 25.093063 23 24 L 23 14 L 23 11.421875 L 21 13.421875 L 21 16 L 21 24 L 6 24 L 6 9 L 14 9 L 16 9 L 16.578125 9 L 18.578125 7 L 16 7 L 14 7 L 6 7 z" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="basis-1/5 text-center">Jul 2021 - Mar 2022<br />Chandigarh, India</div>
            </div>


            {/* Machine Learning Research Assistant */}
            <div className={classnames}>
                <div className="basis-4/5">
                    <h3 className='font-bold'>
                        Machine Learning Research Assistant
                    </h3>
                    <p className='italic mt-2'>
                        CBIL Lab, Indian Institute of Technology (IIT) Ropar
                    </p>
                    <ul className="list-disc m-5">
                        <li>Worked on Visual Question-Answering and Generation (VQAG) for medical imaging in collaboration with the Inception Institute of Artificial Intelligence (IIAI).</li>
                        <li>Worked on risk prediction for Postpartum Depression (PPD) in collaboration with Uppsala University Hospital, Uppsala, Sweden.</li>
                        <li>Designed, Developed, and Implemented a lightweight convolutional neural network architecture using mixed asymmetric kernels.</li>
                        <li>Organized, collected, and cleaned ~1.5TB unlabeled CT scans dataset for semi-supervised training.</li>
                        <li>Worked on a multi-modal classification of Alzheimer’s using MRI and PET scans.</li>
                    </ul>
                </div>
                <div className="basis-1/5 text-center">Mar 2019 - Mar 2022<br />Rupnagar, Punjab, India</div>
            </div>


            {/* Computer Vision and Deep Learning Research Intern */}
            <div className={classnames}>
                <div className="basis-4/5">
                    <h3 className='font-bold'>
                        Computer Vision and Deep Learning Research Intern
                    </h3>
                    <p className='italic mt-2'>
                        LASII group, Indian Institute of Technology (IIT) Ropar
                    </p>
                    <ul className="list-disc m-5">
                        <li>Developed Computer Vision-based automatic collage maker Android app in collaboration with Samsung India.</li>
                        <li>Developed Garuda: A Deep Learning-based background danger detection while taking selfies Android app.
                            [
                            <a className="italic underline" href="https://sites.google.com/iitrpr.ac.in/garuda">demo​, </a>
                            <a className="italic underline" href="https://timesofindia.indiatimes.com/city/chandigarh/application-to-prevent-selfie-deaths/articleshow/66563387.cms">Times of India (TOI), </a>
                            <a className="italic underline" href="https://www.gadgetsnow.com/tech-news/iit-ropar-develops-app-to-prevent-selfie-deaths/articleshow/66565825.cms">Gadgets Now</a>
                            ]
                        </li>
                    </ul>
                </div>
                <div className="basis-1/5 text-center">Aug 2018 - Feb 2019<br />Rupnagar, Punjab, India</div>
            </div>


            {/* Artificial Intelligence / Machine Learning Innovation Fellow */}
            <div className={classnames}>
                <div className="basis-4/5">
                    <h3 className='font-bold'>
                        Artificial Intelligence / Machine Learning Innovation Fellow
                    </h3>
                    <p className='italic mt-2'>
                        Savera.ai startup (Sungineers Energy Private Limited)
                    </p>
                    <ul className="list-disc m-5">
                        <li>
                            <a href="https://github.com/SaveraLLC/Indian-rooftops-detection"
                                target="_blank"
                                className='hover:underline'>
                                Developed Indian building’s rooftop segmentation model with satellite images
                                <svg
                                    className='inline pl-1 text-white fill-current'
                                    fill="#000000"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 30 30"
                                    width="20px"
                                    height="20px">
                                    <path d="M 25.980469 2.9902344 A 1.0001 1.0001 0 0 0 25.869141 3 L 20 3 A 1.0001 1.0001 0 1 0 20 5 L 23.585938 5 L 13.292969 15.292969 A 1.0001 1.0001 0 1 0 14.707031 16.707031 L 25 6.4140625 L 25 10 A 1.0001 1.0001 0 1 0 27 10 L 27 4.1269531 A 1.0001 1.0001 0 0 0 25.980469 2.9902344 z M 6 7 C 4.9069372 7 4 7.9069372 4 9 L 4 24 C 4 25.093063 4.9069372 26 6 26 L 21 26 C 22.093063 26 23 25.093063 23 24 L 23 14 L 23 11.421875 L 21 13.421875 L 21 16 L 21 24 L 6 24 L 6 9 L 14 9 L 16 9 L 16.578125 9 L 18.578125 7 L 16 7 L 14 7 L 6 7 z" />
                                </svg>
                            </a>
                        </li>
                        <li>Presented data cleaning, preprocessing, training, and postprocessing
                            end-to-end pipeline for building’s rooftop detection and segmentation.

                        </li>
                    </ul>
                </div>
                <div className="basis-1/5 text-center">July 2018 - Dec 2018<br />Work from home</div>
            </div>


            {/* Artificial Intelligence Research Fellow */}
            <div className={classnames}>
                <div className="basis-4/5">
                    <h3 className='font-bold'>
                        Artificial Intelligence Research Fellow
                    </h3>
                    <p className='italic mt-2'>
                        Axis India Machine Learning Lab
                    </p>
                    <ul className="list-disc m-5">
                        <li>Studied Computer Vision, Machine Learning, Deep Learning, and Reinforcement Learning fundamentals</li>
                        <li>Implemented face recognition and verification using deep learning and transfer learning.</li>
                    </ul>
                </div>
                <div className="basis-1/5 text-center">Aug 2017 - May 2018<br />Jaipur, Rajasthan, India</div>
            </div>


            {/* Big Data and Hadoop Undergraduate Intern */}
            <div className={classnames}>
                <div className="basis-4/5">
                    <h3 className='font-bold'>
                        Big Data and Hadoop Undergraduate Intern
                    </h3>
                    <p className='italic mt-2'>
                        Headstart Education | IBM Bussiness Partner
                    </p>
                    <ul className="list-disc m-5">
                        <li>
                            <a href="https://github.com/VirkSaab/Twitter-Sentiment-Analysis"
                                target="_blank"
                                className='hover:underline'>
                                Developed real-time Twitter sentiment analysis using Big Data and Hadoop
                                <svg
                                    className='inline pl-1 text-white fill-current'
                                    fill="#000000"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 30 30"
                                    width="20px"
                                    height="20px">
                                    <path d="M 25.980469 2.9902344 A 1.0001 1.0001 0 0 0 25.869141 3 L 20 3 A 1.0001 1.0001 0 1 0 20 5 L 23.585938 5 L 13.292969 15.292969 A 1.0001 1.0001 0 1 0 14.707031 16.707031 L 25 6.4140625 L 25 10 A 1.0001 1.0001 0 1 0 27 10 L 27 4.1269531 A 1.0001 1.0001 0 0 0 25.980469 2.9902344 z M 6 7 C 4.9069372 7 4 7.9069372 4 9 L 4 24 C 4 25.093063 4.9069372 26 6 26 L 21 26 C 22.093063 26 23 25.093063 23 24 L 23 14 L 23 11.421875 L 21 13.421875 L 21 16 L 21 24 L 6 24 L 6 9 L 14 9 L 16 9 L 16.578125 9 L 18.578125 7 L 16 7 L 14 7 L 6 7 z" />
                                </svg>
                            </a>
                        </li>
                        <li>Learned Hadoop ecosystem technologies such as HDFS, Pig, Hive, MapReduce, and Flume.</li>
                    </ul>
                </div>
                <div className="basis-1/5 text-center">Feb 2017 - July 2017<br />New Delhi, India</div>
            </div>

        </>
    )
}