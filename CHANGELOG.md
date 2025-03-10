# Changelog for AWS SDK for JavaScript
<!--LATEST=2.566.0-->
<!--ENTRYINSERT-->

## 2.566.0
* feature: SavingsPlans: This is the first release of Savings Plans, a new flexible pricing model that offers low prices on Amazon EC2 and AWS Fargate usage.

## 2.565.0
* feature: CodeBuild: Add support for Build Number, Secrets Manager and Exported Environment Variables.
* feature: CostExplorer: This launch provides customers with access to Savings Plans management APIs.
* feature: EFS: EFS customers can select a lifecycle policy that automatically moves files that have not been accessed for 7 days into the EFS Infrequent Access (EFS IA) storage class. EFS IA provides price/performance that is cost-optimized for files that are not accessed every day.
* feature: SavingsPlans: This is the first release of Savings Plans, a new flexible pricing model that offers low prices on Amazon EC2 and AWS Fargate usage.
* feature: Signer: This release adds support for tagging code-signing profiles in AWS Signer.

## 2.564.0
* feature: CodeStarNotifications: This release adds a notification manager for events in repositories, build projects, deployments, and pipelines. You can now configure rules and receive notifications about events that occur for resources. Each notification includes a status message as well as a link to the resource (repository, build project, deployment application, or pipeline) whose event generated the notification.
* feature: Config: Allow shortcutting in customBackoff based on error

## 2.563.0
* feature: RoboMaker: RoboMaker Fleet Management launch a feature to verify your robot is ready to download and install the new robot application using a download condition file, which is a script run on the robot prior to downloading the new deployment. 

## 2.562.0
* feature: CloudTrail: This release adds two new APIs, GetTrail and ListTrails, and support for adding tags when you create a trail by using a new TagsList parameter on CreateTrail operations.
* feature: DMS: This release contains task timeline attributes in replication task statistics. This release also adds a note to the documentation for the CdcStartPosition task request parameter. This note describes how to enable the use of native CDC start points for a PostgreSQL source by setting the new slotName extra connection attribute on the source endpoint to the name of an existing logical replication slot.
* feature: Pinpoint: This release of the Amazon Pinpoint API introduces support for using and managing journeys, and querying analytics data for journeys.

## 2.561.0
* feature: Amplify: This release of AWS Amplify Console introduces support for Web Previews. This feature allows user to create ephemeral branch deployments from pull request submissions made to a connected repository.  A pull-request preview deploys every pull request made to your Git repository to a unique preview URL.
* feature: S3: S3 Inventory now supports a new field 'IntelligentTieringAccessTier' that reports the access tier (frequent or infrequent) of objects stored in Intelligent-Tiering storage class.

## 2.560.0
* feature: ElastiCache: Amazon ElastiCache for Redis 5.0.5 now allows you to modify authentication tokens by setting and rotating new tokens. You can now modify active tokens while in use, or add brand-new tokens to existing encryption-in-transit enabled clusters that were previously setup without authentication tokens. This is a two-step process that allows you to set and rotate the token without interrupting client requests.

## 2.559.0
* feature: AppStream: Adds support for providing domain names that can embed streaming sessions
* feature: Cloud9: Added CREATING and CREATE_FAILED environment lifecycle statuses.  
* feature: Connect: enable cors to make connect service available in default browser built
* feature: X-ray, Connect, IotAnalytics: updated SERVICES.md for 3 services, x-ray, connect, IotAnalytics

## 2.558.0
* feature: S3: Adding support in SelectObjectContent for scanning a portion of an object specified by a scan range.

## 2.557.0
* feature: ECR: This release of Amazon Elastic Container Registry Service (Amazon ECR) introduces support for image scanning. This identifies the software vulnerabilities in the container image based on the Common Vulnerabilities and Exposures (CVE) database.
* feature: ElastiCache: Amazon ElastiCache adds support for migrating Redis workloads hosted on Amazon EC2 into ElastiCache by syncing the data between the source Redis cluster and target ElastiCache for Redis cluster in real time. For more information, see https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/migrate-to-elasticache.html.
* feature: Transfer: This release adds logical directories support to your AWS SFTP server endpoint, so you can now create logical directory structures mapped to Amazon Simple Storage Service (Amazon S3) bucket paths for users created and stored within the service. Amazon S3 bucket names and paths can now be hidden from AWS SFTP users, providing an additional level of privacy to meet security requirements. You can lock down your SFTP users' access to designated folders (commonly referred to as 'chroot'), and simplify complex folder structures for data distribution through SFTP without replicating files across multiple users.

## 2.556.0
* feature: AppMesh: This release adds support for the gRPC and HTTP/2 protocols.
* feature: Chime: * This release introduces Voice Connector PDX region and defaults previously created Voice Connectors to IAD. You can create Voice Connector Groups and add region specific Voice Connectors to direct telephony traffic across AWS regions in case of regional failures. With this release you can add phone numbers to Voice Connector Groups and can bulk move phone numbers between Voice Connectors, between Voice Connector and Voice Connector Groups and between Voice Connector Groups. Voice Connector now supports additional settings to enable SIP Log capture. This is in addition to the launch of Voice Connector Cloud Watch metrics in this release. This release also supports assigning outbound calling name (CNAM) to AWS account and individual phone numbers assigned to Voice Connectors. * Voice Connector now supports a setting to enable real time audio streaming delivered via Kinesis Audio streams. Please note that recording Amazon Chime Voice Connector calls with this feature maybe be subject to laws or regulations regarding the recording of telephone calls and other electronic communications. AWS Customer and their end users' have the responsibility to comply with all applicable laws regarding the recording, including properly notifying all participants in a recorded session or to a recorded communication that the session or communication is being recorded and obtain their consent.
* feature: EC2: This release updates CreateFpgaImage to support tagging FPGA images on creation
* feature: GameLift: Amazon GameLift offers expanded hardware options for game hosting: Custom game builds can use the Amazon Linux 2 operating system, and fleets for both custom builds and Realtime servers can now use C5, M5, and R5 instance types.
* feature: SageMaker: Adds support for the new family of Elastic Inference Accelerators (eia2) for SageMaker Hosting and Notebook Services

## 2.555.0
* feature: Connect: This release adds 4 new APIs ListQueues, ListPhoneNumbers, ListContactFlows, and ListHoursOfOperations, which can be used to programmatically list Queues, PhoneNumbers, ContactFlows, and HoursOfOperations configured for an Amazon Connect instance respectively. You can learn more about the new APIs here: https://docs.aws.amazon.com/connect/latest/APIReference/Welcome.html.
* feature: Polly: Amazon Polly adds new female voices: US Spanish - Lupe and Brazilian Portuguese - Camila; both voices are available in Standard and Neural engine.

## 2.554.0
* feature: IoTEvents: Add support for new serial evaluation method for events in a detector model.
* feature: OpsWorksCM: AWS OpsWorks for Chef Automate (OWCA) now allows customers to use a custom domain and respective certificate, for their AWS OpsWorks For Chef Automate servers. Customers can now provide a CustomDomain, CustomCertificate and CustomPrivateKey in CreateServer API to configure their Chef Automate servers with a custom domain and certificate.

## 2.553.0
* feature: CloudWatch: New Period parameter added to MetricDataQuery structure.

## 2.552.0
* feature: Batch: Adding support for Compute Environment Allocation Strategies 
* feature: RDS: Amazon RDS now supports Amazon RDS on VMware with the introduction of APIs related to Custom Availability Zones and Media installation.

## 2.551.0
* feature: IoTAnalytics: enable cors to make IoTAnalytics available in default browser build
* feature: Kafka: AWS MSK has added support for adding brokers to a cluster.
* feature: MarketplaceCommerceAnalytics: add 2 more values for the supporting sections - age of past due funds + uncollected funds breakdown
* feature: RoboMaker: This release adds support for ROS2 Dashing as a beta feature

## 2.550.0
* feature: KinesisVideoArchivedMedia: Add ON_DISCONTINUITY mode to the GetHLSStreamingSessionURL API

## 2.549.0
* bugfix: Request Signing: This change allows requests to a service to be signed if the api.json doesn't specify a signatureVersion or authtype, but the configuration has a signatureVersion specified. Prior to this change, the logic to create a signer would use signatureVersion specified in the config, but the code would never reach it if api.json signatureVersion or authtype weren't defined.
* feature: Personalize: AWS Personalize: Adds ability to create a solution version using FULL or UPDATE training mode
* feature: Retry: retry all 429 status code exceptions

## 2.548.0
* feature: Greengrass: Greengrass OTA service supports Raspbian/Armv6l platforms.

## 2.547.0
* feature: EC2: New EC2 M5n, M5dn, R5n, R5dn instances with 100 Gbps network performance and Elastic Fabric Adapter (EFA) for ultra low latency; New A1.metal bare metal instance powered by AWS Graviton Processors
* feature: FMS: Firewall Manager now supports Amazon VPC security groups, making it easier to configure and manage security groups across multiple accounts from a single place.
* feature: IoTAnalytics: Add `completionTime` to API call ListDatasetContents.
* feature: LexRuntime: Amazon Lex now supports Session API checkpoints

## 2.546.0
* feature: ElastiCache: Amazon ElastiCache now allows you to apply available service updates on demand to your Memcached and Redis Cache Clusters. Features included: (1) Access to the list of applicable service updates and their priorities. (2) Service update monitoring and regular status updates. (3) Recommended apply-by-dates for scheduling the service updates. (4) Ability to stop and later re-apply updates. For more information, see https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/Self-Service-Updates.html and https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Self-Service-Updates.html
* feature: MediaConvert: AWS Elemental MediaConvert SDK has added support for Dolby Atmos encoding, up to 36 outputs, accelerated transcoding with frame capture and preferred acceleration feature.

## 2.545.0
* feature: DataSync: Add Sync options to enable/disable TaskQueueing
* feature: Firehose: With this release, you can use Amazon Kinesis Firehose delivery streams to deliver streaming data to Amazon Elasticsearch Service version 7.x clusters. For technical documentation, look for CreateDeliveryStream operation in Amazon Kinesis Firehose API reference.

## 2.544.0
* feature: CORS: Add Xray to default browser SDK distribution
* feature: DirectConnect: This release adds a service provider field for physical connection creation and provides a list of available partner providers for each Direct Connect location.
* feature: Firehose: Amazon Kinesis Data Firehose now allows delivering data to Elasticsearch clusters set up in a different AWS account than the Firehose AWS account. For technical documentation, look for ElasticsearchDestinationConfiguration in the Amazon Kinesis Firehose API reference.
* feature: Glue: AWS Glue now provides ability to use custom certificates for JDBC Connections.
* feature: Pinpoint: This release of the Amazon Pinpoint API introduces support for using and managing message templates.
* feature: PinpointEmail: This release of the Amazon Pinpoint Email API introduces support for using and managing message templates.
* feature: Snowball: AWS Snowball Edge now allows you to perform an offline update to the software of your Snowball Edge device when your device is not connected to the internet. Previously, updating your Snowball Edge's software required that the device be connected to the internet or be sent back to AWS. Now, you can keep your Snowball Edge software up to date even if your device(s) cannot connect to the internet, or are required to run in an air-gapped environment. To complete offline updates, download the software update from a client machine with connection to the internet using the AWS Command Line Interface (CLI). Then, have the Snowball Edge device download and install the software update using the Snowball Edge device API. For more information about offline updates, visit the Snowball Edge documentation page.

## 2.543.0
* feature: CognitoIdentityServiceProvider: This release adds ClientMetadata input parameter to multiple Cognito User Pools operations, making this parameter available to the customer configured lambda triggers as applicable. 
* feature: MediaPackage: New Harvest Job APIs to export segment-accurate content windows from MediaPackage Origin Endpoints to S3. See https://docs.aws.amazon.com/mediapackage/latest/ug/harvest-jobs.html for more info

## 2.542.0
* feature: EC2: This release allows customers to purchase regional EC2 RIs on a future date.
* feature: ES: Amazon Elasticsearch Service now supports configuring additional options for domain endpoint, such as whether to require HTTPS for all traffic.

## 2.541.0
* feature: Lightsail: This release adds support for the automatic snapshots add-on for instances and block storage disks.

## 2.540.0
* feature: DocDB: This release provides support for describe and modify CA certificates.

## 2.539.0
* feature: MQ: Amazon MQ now includes the ability to scale your brokers by changing the host instance type. See the hostInstanceType property of UpdateBrokerInput (https://docs.aws.amazon.com/amazon-mq/latest/api-reference/brokers-broker-id.html#brokers-broker-id-model-updatebrokerinput), and pendingHostInstanceType property of DescribeBrokerOutput (https://docs.aws.amazon.com/amazon-mq/latest/api-reference/brokers-broker-id.html#brokers-broker-id-model-describebrokeroutput).
* feature: RDS: This release adds support for creating a Read Replica with Active Directory domain information. This release updates RDS API to indicate whether an OrderableDBInstanceOption supports Kerberos Authentication.
* feature: WAF: Lowering the threshold for Rate Based rule from 2000 to 100.

## 2.538.0
* feature: Amplify: This release adds access logs APIs and artifact APIs for AWS Amplify Console.
* feature: ECS: This release of Amazon Elastic Container Service (Amazon ECS) removes FirelensConfiguration from the DescribeTask output during the FireLens public preview.

## 2.537.0
* feature: SSM: This release updates the AWS Systems Manager Parameter Store PutParameter and LabelParameterVersion APIs to return the "Tier" of parameter created/updated and the "parameter version" labeled respectively. 

## 2.536.0
* feature: DMS: This release adds a new DeleteConnection API to delete the connection between a replication instance and an endpoint. It also adds an optional S3 setting to specify the precision of any TIMESTAMP column values written to an S3 object file in .parquet format.
* feature: ForecastService: CORS support enabled on ForecastService and ForecastQueryService
* feature: GlobalAccelerator: API Update for AWS Global Accelerator to support for DNS aliasing.
* feature: SageMaker: Enable G4D and R5 instances in SageMaker Hosting Services

## 2.535.0
* feature: ComprehendMedical: Use Amazon Comprehend Medical to analyze medical text stored in the specified Amazon S3 bucket. Use the console to create and manage batch analysis jobs, or use the batch APIs to detect both medical entities and protected health information (PHI). The batch APIs start, stop, list, and retrieve information about batch analysis jobs. This release also includes DetectEntitiesV2 operation which returns the Acuity and Direction entities as attributes instead of types.
* feature: DataSync: Added S3StorageClass, OverwriteMode sync option, and ONLY_FILES_TRANSFERRED setting for the VerifyMode sync option.
* feature: TranscribeService: With this update Amazon Transcribe enables you to provide an AWS KMS key to encrypt your transcription output.

## 2.534.0
* feature: RDSDataService: RDS Data API now supports Amazon Aurora Serverless PostgreSQL databases.
* feature: Redshift: Adds API operation DescribeNodeConfigurationOptions and associated data structures.

## 2.533.0
* feature: EC2: G4 instances are Amazon EC2 instances based on NVIDIA T4 GPUs and are designed to provide cost-effective machine learning inference for applications, like image classification, object detection, recommender systems, automated speech recognition, and language translation. G4 instances are also a cost-effective platform for building and running graphics-intensive applications, such as remote graphics workstations, video transcoding, photo-realistic design, and game streaming in the cloud. To get started with G4 instances visit https://aws.amazon.com/ec2/instance-types/g4.
* feature: Greengrass: Greengrass OTA service now returns the updated software version in the PlatformSoftwareVersion parameter of a CreateSoftwareUpdateJob response
* feature: RDS: Add a new LeaseID output field to DescribeReservedDBInstances, which shows the unique identifier for the lease associated with the reserved DB instance. AWS Support might request the lease ID for an issue related to a reserved DB instance.
* feature: WorkSpaces: Adds the WorkSpaces restore feature

## 2.532.0
* feature: ECS: This release of Amazon Elastic Container Service (Amazon ECS) introduces support for container image manifest digests. This enables you to identify all tasks launched using a container image pulled from ECR in order to correlate what was built with where it is running.
* feature: Glue: AWS Glue DevEndpoints now supports GlueVersion, enabling you to choose Apache Spark 2.4.3 (in addition to Apache Spark 2.2.1). In addition to supporting the latest version of Spark, you will also have the ability to choose between Python 2 and Python 3.
* feature: MediaConnect: When you grant an entitlement, you can now specify the percentage of the entitlement data transfer that you want the subscriber to be responsible for.

## 2.531.0
* bugfix: Dependency: Pin the dependency to the latest
* feature: APIGateway: Amazon API Gateway simplifies accessing PRIVATE APIs by allowing you to associate one or more Amazon Virtual Private Cloud (VPC) Endpoints to a private API. API Gateway will create and manage DNS alias records necessary for easily invoking the private APIs. With this feature, you can leverage private APIs in web applications hosted within your VPCs.
* feature: RAM: AWS RAM provides a new ListPendingInvitationResources API action that lists the resources in a resource share that is shared with you but that the invitation is still pending for
* feature: WAFRegional: Lowering the threshold for Rate Based rule from 2000 to 100.

## 2.530.0
* feature: Athena: This release adds DataManifestLocation field indicating the location and file name of the data manifest file. Users can get a list of files that the Athena query wrote or intended to write from the manifest file.
* feature: Personalize: [Personalize] Adds trainingHours to solutionVersion properties.

## 2.529.0
* feature: EKS: This release lets customers add tags to an Amazon EKS cluster. These tags can be used to control access to the EKS API for managing the cluster using IAM. The Amazon EKS TagResource API allows customers to associate tags with their cluster. Customers can list tags for a cluster using the ListTagsForResource API and remove tags from a cluster with the UntagResource API. Note: tags are specific to the EKS cluster resource, they do not propagate to other AWS resources used by the cluster.
* feature: MediaConvert: AWS Elemental MediaConvert SDK has added support for multi-DRM SPEKE with CMAF outputs, MP3 ingest, and options for improved video quality.

## 2.528.0
* feature: EC2: Fix for FleetActivityStatus and FleetStateCode enum
* feature: MediaLive: AWS Elemental MediaLive now supports High Efficiency Video Coding (HEVC) for standard-definition (SD), high-definition (HD), and ultra-high-definition (UHD) encoding with HDR support.Encoding with HEVC offers a number of advantages. While UHD video requires an advanced codec beyond H.264 (AVC), high frame rate (HFR) or High Dynamic Range (HDR) content in HD also benefit from HEVC's advancements. In addition, benefits can be achieved with HD and SD content even if HDR and HFR are not needed.
* feature: WorkMailMessageFlow: This release allows customers to access email messages as they flow to and from Amazon WorkMail.

## 2.527.0
* feature: ConfigService: Adding input validation for the OrganizationConfigRuleName string.
* feature: EC2: This release adds support for new data fields and log format in VPC flow logs.
* feature: MediaConnect: This release adds support for the RIST protocol on sources and outputs.
* feature: RDS: This release allows customers to specify a custom parameter group when creating a Read Replica, for DB engines which support this feature.
* feature: StepFunctions: Fixing letter case in Map history event details to be small case

## 2.526.0
* feature: StorageGateway: The CloudWatchLogGroupARN parameter of the UpdateGatewayInformation API allows for configuring the gateway to use a CloudWatch log-group where Storage Gateway health events will be logged. 

## 2.525.0
* bugfix: RDS: Make async RDS.Signer.getAuthToken call pass underlying credential errors to callback
* feature: AppMesh: This release adds support for http retry policies.
* feature: AppStream: IamRoleArn support in CreateFleet, UpdateFleet, CreateImageBuilder APIs
* feature: Credentials: Added chaining support in TokenFileWebIdentityCredentials
* feature: EC2: This release expands Site-to-Site VPN tunnel options to allow customers to restrict security algorithms and configure timer settings for VPN connections. Customers can specify these new options while creating new VPN connections, or they can modify the tunnel options on existing connections using a new API.
* feature: Endpoints: Sts client now supports sending requests to regional endpoints. You can opt in by setting stsRegionalEndpoints client config or AWS_STS_REGIONAL_ENDPOINTS environment or sts_regional_endpoints config file entry to 'regional'
* feature: MarketplaceCommerceAnalytics: Add FDP+FPS (monthly_revenue_field_demonstration_usage + monthly_revenue_flexible_payment_schedule)  to Marketplace Commerce Analytics Service
* feature: QLDB: (New Service) Amazon QLDB is a fully managed ledger database that provides a transparent, immutable, and cryptographically verifiable transaction log owned by a central trusted authority. Amazon QLDB is a new class of serverless database that eliminates the need to engage in the complex development effort of building your own ledger-like applications and it automatically scales to support the demands of your application. Introduces Amazon QLDB API operations needed for managing Amazon QLDB ledgers. This includes the ability to manage Amazon QLDB ledgers, cryptographically verify documents, and export the journal in a ledger.
* feature: QLDBSession: (New Service) Amazon QLDB is a fully managed ledger database that provides a transparent, immutable, and cryptographically verifiable transaction log owned by a central trusted authority. Amazon QLDB is a new class of serverless database that eliminates the need to engage in the complex development effort of building your own ledger-like applications and it automatically scales to support the demands of your application. Introduces Amazon QLDB API operations needed for interacting with data in Amazon QLDB ledgers.
* feature: RoboMaker: Support for Connectivity to Simulation. When you need to interact with the applications in your simulation job, you can connect to your robot application or simulation application with port forwarding. When you configure port forwarding, traffic will be forwarded from the simulation job port to the application port. Port forwarding makes it easy to connect with tools such as ROS Bridge and other tools. This can be useful when you want to debug or run custom tools to interact with your applications. 

## 2.524.0
* feature: ConfigService: AWS Config now includes the option for marking RemediationConfigurations as automatic, removing the need to call the StartRemediationExecution API. Manual control over resource execution rate is also included, and RemediationConfigurations are now ARN addressable. Exceptions to exclude account resources from being remediated can be configured with the new PutRemediationExceptions, DescribeRemediationExceptions, and DeleteRemediationExceptions APIs.

## 2.523.0
* feature: EKS: Amazon EKS DescribeCluster API returns a new OIDC issuer field that can be used to create OIDC identity provider for IAM for Service Accounts feature.
* feature: StepFunctions: Added support for new history events
* feature: TranscribeService: MediaFormat is now optional for StartTranscriptionJob API.

## 2.522.0
* feature: ECS: This release of Amazon Elastic Container Service (Amazon ECS) introduces support for attaching Amazon Elastic Inference accelerators to your containers. This enables you to run deep learning inference workloads with hardware acceleration in a more efficient way.
* feature: GameLift: You can now make use of PKI resources to provide more secure connections between your game clients and servers.  To learn more, please refer to the public Amazon GameLift documentation.

## 2.521.0
* bugfix: Credentials: fix stsConfig typing on chainable_temporary_credentials
* feature: ApiGatewayManagementApi: You can use getConnection to return information about the connection (when it is connected, IP address, etc) and deleteConnection to disconnect the given connection
* feature: ECS: This release of Amazon Elastic Container Service (Amazon ECS) introduces support for modifying the cluster settings for existing clusters, which enables you to toggle whether Container Insights is enabled or not. Support is also introduced for custom log routing using the ECS FireLens integration.
* feature: MQ: Adds support for updating security groups selection of an Amazon MQ broker.

## 2.520.0
* feature: ApplicationAutoScaling: With the current release, you can suspend and later resume any of the following scaling actions in Application Auto Scaling: scheduled scaling actions, dynamic scaling in actions, dynamic scaling out actions.
* feature: CodePipeline: Introducing pipeline execution trigger details in ListPipelineExecutions API.
* feature: ECS: This release of Amazon Elastic Container Service (Amazon ECS) introduces support for including Docker container IDs in the API response when describing and stopping tasks. This enables customers to easily map containers to the tasks they are associated with.
* feature: ElastiCache: Amazon ElastiCache for Redis now supports encryption at rest using customer managed customer master keys (CMKs) in AWS Key Management Service (KMS). Amazon ElastiCache now supports cluster names upto 40 characters for replicationGoups and upto 50 characters for cacheClusters.
* feature: Lambda: Adds a "MaximumBatchingWindowInSeconds" parameter to event source mapping api's. Usable by Dynamodb and Kinesis event sources.
* feature: S3: add support for AWS.S3.getSignedUrlPromise which returns a promise for S3 presigned url

## 2.519.0
* feature: GlobalAccelerator: API Update for AWS Global Accelerator Client IP Preservation
* feature: MediaConvert: This release adds the ability to send a job to an on-demand queue while simulating the performance of a job sent to a reserved queue. Use this setting to estimate the number of reserved transcoding slots (RTS) you need for a reserved queue.
* feature: SQS: Added support for message system attributes, which currently lets you send AWS X-Ray trace IDs through Amazon SQS.

## 2.518.0
* bugfix: Credentials: Update environment variable names in TokenFileWebIdentityCredentials
* feature: SSM: This feature adds "default tier" to the AWS Systems Manager Parameter Store for parameter creation and update. AWS customers can now set the "default tier" to one of the following values: Standard (default), Advanced or Intelligent-Tiering.  This allows customers to create advanced parameters or parameters in corresponding tiers with one setting rather than code change to specify parameter tiers.
* feature: SecurityHub: This release resolves an issue with the DescribeHub action, changes the MasterId and InvitationId parameters for AcceptInvitation to Required, and changes the AccountIds parameter for DeleteInvitations and DeclineInvitations to Required.

## 2.517.0
* feature: Credentials: Added TokenFileWebIdentityCredentials
* feature: EC2: This release of EC2 VM Import Export adds support for exporting Amazon Machine Image(AMI)s to a VM file
* feature: MediaPackageVod: Adds optional Constant Initialization Vector (IV) to HLS Encryption for MediaPackage VOD.
* feature: TranscribeService: Amazon Transcribe - support transcriptions from audio sources in Russian (ru-RU) and Chinese (zh-CN).

## 2.516.0
* feature: DataSync: This release adds support for SMB location type.
* feature: RDS: This release allows users to enable RDS Data API while creating Aurora Serverless databases. 

## 2.515.0
* feature: ElastiCache: ElastiCache extends support for Scale down for Redis Cluster-mode enabled and disabled replication groups 
* feature: ForecastQueryService: Amazon Forecast is a fully managed machine learning service that makes it easy for customers to generate accurate forecasts using their historical time-series data
* feature: ForecastService: Amazon Forecast is a fully managed machine learning service that makes it easy for customers to generate accurate forecasts using their historical time-series data
* feature: PersonalizeRuntime: Increased limits on number of items recommended and reranked: The maximum number of results returned from getRecommendations API has been increased to 200. The maximum number of items which can be reranked via getPersonalizedRanking API has been increased to 200.
* feature: SQS: This release provides a way to add metadata tags to a queue when it is created. You can use tags to organize and identify your Amazon SQS queues for cost allocation.
* feature: SageMaker: Amazon SageMaker now supports Amazon EFS and Amazon FSx for Lustre file systems as data sources for training machine learning models. Amazon SageMaker now supports running training jobs on ml.p3dn.24xlarge instance type. This instance type is offered as a limited private preview for certain SageMaker customers. If you are interested in joining the private preview, please reach out to the SageMaker Product Management team via AWS Support."

## 2.514.0
* feature: AlexaForBusiness: Adding support for optional locale input in CreateProfile and UpdateProfile APIs
* feature: AppStream: Includes API updates to support streaming through VPC endpoints for image builders and stacks.
* feature: ChainableTemporaryCredentials: Support for specifying STS client config when creating ChainableTemporaryCredentials to override endpoint or region.
* feature: SageMaker: Amazon SageMaker introduces Managed Spot Training. Increases the maximum number of metric definitions to 40 for SageMaker Training and Hyperparameter Tuning Jobs. SageMaker Neo adds support for Acer aiSage and Qualcomm QCS605 and QCS603. 
* feature: Transfer: New field in response of TestIdentityProvider

## 2.513.0
* feature: AppMesh: Fix for HttpMethod enum
* feature: CUR: New IAM permission required for editing AWS Cost and Usage Reports - Starting today, you can allow or deny IAM users permission to edit Cost & Usage Reports through the API and the Billing and Cost Management console. To allow users to edit Cost & Usage Reports, ensure that they have 'cur: ModifyReportDefinition' permission. Refer to the technical documentation (https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_cur_ModifyReportDefinition.html) for additional details.

## 2.512.0
* feature: ECS: This release of Amazon Elastic Container Service (Amazon ECS) introduces support for controlling the usage of swap space on a per-container basis for Linux containers.
* feature: EMR: Amazon EMR  has introduced an account level configuration called Block Public Access that allows you to block clusters with ports open to traffic from public IP sources (i.e. 0.0.0.0/0 for IPv4 and ::/0 for IPv6) from launching.  Individual ports or port ranges can be added as exceptions to allow public access.
* feature: RoboMaker: Two feature release: 1. AWS RoboMaker introduces log-based simulation. Log-based simulation allows you to play back pre-recorded log data such as sensor streams for testing robotic functions like localization, mapping, and object detection. Use the AWS RoboMaker SDK to test your robotic applications.  2.  AWS RoboMaker allow customer to setup a robot deployment timeout when CreateDeploymentJob.

## 2.511.0
* feature: AppMesh: This release adds support for http header based routing and route prioritization.
* feature: Athena: This release adds support for querying S3 Requester Pays buckets. Users can enable this feature through their Workgroup settings.
* feature: CodeCommit: This release adds an API, BatchGetCommits, that allows retrieval of metadata for multiple commits in an AWS CodeCommit repository.
* feature: EC2: This release adds an option to use private certificates from AWS Certificate Manager (ACM) to authenticate a Site-to-Site VPN connection's tunnel endpoints and customer gateway device. 
* feature: Glue: GetJobBookmarks API is withdrawn.
* feature: StorageGateway: CreateSnapshotFromVolumeRecoveryPoint API supports new parameter: Tags (to be attached to the created resource)

## 2.510.0
* feature: EC2: This release adds a new API called SendDiagnosticInterrupt, which allows you to send diagnostic interrupts to your EC2 instance.

## 2.509.0
* feature: AppSync: Adds a configuration option for AppSync GraphQL APIs

## 2.508.0
* feature: Rekognition: Adding new Emotion, Fear

## 2.507.0
* feature: GuardDuty: New "evidence" field in the finding model to provide evidence information explaining why the finding has been triggered. Currently only threat-intelligence findings have this field. Some documentation updates.
* feature: Iot: This release adds Quality of Service (QoS) support for AWS IoT rules engine republish action.
* feature: LexRuntime: Manage Amazon Lex session state using APIs on the client
* feature: MediaConvert: AWS Elemental MediaConvert has added support for multi-DRM SPEKE with CMAF outputs, MP3 ingest, and options for improved video quality. 
* feature: Redshift: Add expectedNextSnapshotScheduleTime and expectedNextSnapshotScheduleTimeStatus to redshift cluster object.

## 2.506.0
* feature: CodeBuild: CodeBuild adds CloudFormation support for SourceCredential
* feature: Glue: You can now use AWS Glue to find matching records across dataset even without identifiers to join on by using the new FindMatches ML Transform. Find related products, places, suppliers, customers, and more by teaching a custom machine learning transformation that you can use to identify matching matching records as part of your analysis, data cleaning, or master data management project by adding the FindMatches transformation to your Glue ETL Jobs. If your problem is more along the lines of deduplication, you can use the FindMatches in much the same way to identify customers who have signed up more than ones, products that have accidentally been added to your product catalog more than once, and so forth. Using the FindMatches MLTransform, you can teach a Transform your definition of a duplicate through examples, and it will use machine learning to identify other potential duplicates in your dataset. As with data integration, you can then use your new Transform in your deduplication projects by adding the FindMatches transformation to your Glue ETL Jobs. This release also contains additional APIs that support AWS Lake Formation.
* feature: LakeFormation: Lake Formation: (New Service) AWS Lake Formation is a fully managed service that makes it easier for customers to build, secure and manage data lakes.  AWS Lake Formation simplifies and automates many of the complex manual steps usually required to create data lakes including collecting, cleaning and cataloging data and securely making that data available for analytics and machine learning.
* feature: OpsWorksCM: This release adds support for Chef Automate 2 specific engine attributes.

## 2.505.0
* feature: ApplicationInsights: CloudWatch Application Insights for .NET and SQL Server now provides integration with AWS Systems Manager OpsCenter. This integration allows you to view and resolve problems and operational issues detected for selected applications.

## 2.504.0
* feature: DataSync: Support VPC endpoints.
* feature: EC2: Amazon EC2 now supports a new Spot allocation strategy "Capacity-optimized" that fulfills your request using Spot Instance pools that are optimally chosen based on the available Spot capacity.
* feature: Iot: In this release, AWS IoT Device Defender introduces audit mitigation actions that can be applied to audit findings to help mitigate security issues.

## 2.503.0
* feature: MediaConvert: MediaConvert adds support for specifying priority (-50 to 50) on jobs submitted to on demand or reserved queues
* feature: Polly: Amazon Polly adds support for Neural text-to-speech engine.
* feature: Route53: Amazon Route 53 now supports the Middle East (Bahrain) Region (me-south-1) for latency records, geoproximity records, and private DNS for Amazon VPCs in that region.

## 2.502.0
* feature: CodeCommit: This release supports better exception handling for merges.

## 2.501.0
* feature: Batch: AWS Batch now supports SDK auto-pagination and Job-level docker devices.
* feature: CloudWatchLogs: Allow for specifying multiple log groups in an Insights query, and deprecate storedByte field for LogStreams and interleaved field for FilterLogEventsRequest.
* feature: CostExplorer: Adds support for resource optimization recommendations.
* feature: EC2: You can now create EC2 Capacity Reservations using Availability Zone ID or Availability Zone name. You can view usage of Amazon EC2 Capacity Reservations per AWS account.
* feature: Glue: This release provides GetJobBookmark and GetJobBookmarks APIs. These APIs enable users to look at specific versions or all versions of the JobBookmark for a specific job. This release also enables resetting the job bookmark to a specific run via an enhancement of the ResetJobBookmark API.
* feature: Greengrass: Greengrass OTA service supports openwrt/aarch64 and openwrt/armv7l platforms.
* feature: MediaConnect: This release adds support for the Zixi pull protocol on outputs.

## 2.500.0
* feature: ECR: This release adds support for immutable image tags.
* feature: MediaConvert: AWS Elemental MediaConvert has added several features including support for: audio normalization using ITU BS.1770-3, 1770-4 algorithms, extension of job progress indicators, input cropping rectangle & output position rectangle filters per input, and dual SCC caption mapping to additional codecs and containers. 
* feature: MediaLive: AWS Elemental MediaLive is adding Input Clipping, Immediate Mode Input Switching, and Dynamic Inputs.

## 2.499.0
* feature: EC2: This release introduces support for split tunnel with AWS Client VPN, and also adds support for opt-in Regions in DescribeRegions API. In addition, customers can now also tag Launch Templates on creation.
* feature: Glue: This release provides GlueVersion option for Job APIs and WorkerType option for DevEndpoint APIs. Job APIs enable users to pick specific GlueVersion for a specific job and pin the job to a specific runtime environment. DevEndpoint APIs enable users to pick different WorkerType for memory intensive workload.
* feature: Pinpoint: This release adds support for programmatic access to many of the same campaign metrics that are displayed on the Amazon Pinpoint console. You can now use the Amazon Pinpoint API to monitor and assess performance data for campaigns, and integrate metrics data with other reporting tools. We update the metrics data continuously, resulting in a data latency timeframe that is limited to approximately two hours.
* feature: STS: New STS GetAccessKeyInfo API operation that returns the account identifier for the specified access key ID.

## 2.498.0
* feature: SSM: You can now use Maintenance Windows to select a resource group as the target. By selecting a resource group as the target of a Maintenance Window, customers can perform routine tasks across different resources such as Amazon Elastic Compute Cloud (AmazonEC2) instances, Amazon Elastic Block Store (Amazon EBS) volumes, and Amazon Simple Storage Service(Amazon S3) buckets within the same recurring time window.
* feature: SecretsManager: This release increases the maximum allowed size of SecretString or SecretBinary from 7KB to 10KB in the CreateSecret, UpdateSecret, PutSecretValue and GetSecretValue APIs. This release also increases the maximum allowed size of ResourcePolicy from 4KB to 20KB in the GetResourcePolicy and PutResourcePolicy APIs.

## 2.497.0
* feature: MQ: Adds support for AWS Key Management Service (KMS) to offer server-side encryption. You can now select your own customer managed CMK, or use an AWS managed CMK in your KMS  account.
* feature: Shield: Adding new VectorType (HTTP_Reflection) and related top contributor types to describe WordPress Pingback DDoS attacks.

## 2.496.0
* feature: IoTEvents: Adds support for IoT Events, Lambda, SQS and Kinesis Firehose actions.

## 2.495.0
* feature: Comprehend: Amazon Comprehend now supports multiple entities for custom entity recognition
* feature: ECS: This release of Amazon Elastic Container Service (Amazon ECS) introduces support for cluster settings. Cluster settings specify whether CloudWatch Container Insights is enabled or disabled for the cluster.

## 2.494.0
* feature: ConfigService: This release adds more granularity to the status of an OrganizationConfigRule by adding a new status. It also adds an exception when organization access is denied.
* feature: DMS: S3 endpoint settings update: 1) Option to append operation column to full-load files. 2) Option to add a commit timestamp column to full-load and cdc files. Updated DescribeAccountAttributes to include UniqueAccountIdentifier.

## 2.493.0
* feature: ApiGatewayV2: Bug fix (Add tags field to Update Stage , Api and DomainName Responses )
* feature: ES: Amazon Elasticsearch Service now supports M5, C5, and R5 instance types.
* feature: IAM: Removed exception that was indicated but never thrown for IAM GetAccessKeyLastUsed API
* feature: RoboMaker: Added Melodic as a supported Robot Software Suite Version

## 2.492.0
* feature: CloudWatchEvents: Adds APIs for partner event sources, partner event buses, and custom event buses. These new features are managed in the EventBridge service.
* feature: EventBridge: Amazon EventBridge is a serverless event bus service that makes it easy to connect your applications with data from a variety of sources, including AWS services, partner applications, and your own applications.

## 2.491.0
* feature: QuickSight: Amazon QuickSight now supports embedding dashboards for all non-federated QuickSight users. This includes IAM users, AD users and users from the QuickSight user pool. The get-dashboard-embed-url API accepts QUICKSIGHT as identity type with a user ARN to authenticate the embeddable dashboard viewer as a non-federated user.
* feature: ServiceCatalog: This release adds support for Parameters in ExecuteProvisionedProductServiceAction and adds functionality to get the default parameter values for a Self-Service Action execution against a Provisioned Product via DescribeServiceActionExecutionParameters

## 2.490.0
* feature: Amplify: This release adds webhook APIs and manual deployment APIs for AWS Amplify Console.
* feature: CloudWatch: This release adds three new APIs (PutAnomalyDetector, DeleteAnomalyDetector, and DescribeAnomalyDetectors) to support the new feature, CloudWatch Anomaly Detection. In addition, PutMetricAlarm and DescribeAlarms APIs are updated to support management of Anomaly Detection based alarms.
* feature: ConfigService: AWS Config now supports a new set of APIs to manage AWS Config rules across your organization in AWS Organizations. Using this capability, you can centrally create, update, and delete AWS Config rules across all accounts in your organization. This capability is particularly useful if you have a need to deploy a common set of AWS Config rules across all accounts. You can also specify accounts where AWS Config rules should not be created. In addition, you can use these APIs from the master account in AWS Organizations to enforce governance by ensuring that the underlying AWS Config rules are not modifiable by your organization member accounts.These APIs work for both managed and custom AWS Config rules. For more information, see Enabling AWS Config Rules Across all Accounts in Your Organization in the AWS Config Developer Guide.The new APIs are available in all commercial AWS Regions where AWS Config and AWS Organizations are supported. For the full list of supported Regions, see AWS Regions and Endpoints in the AWS General Reference. To learn more about AWS Config, visit the AWS Config webpage. To learn more about AWS Organizations, visit the AWS Organizations webpage.
* feature: EFS: EFS customers can now enable Lifecycle Management for all file systems. You can also now select from one of four Lifecycle Management policies (14, 30, 60 and 90 days), to automatically move files that have not been accessed for the period of time defined by the policy, from the EFS Standard storage class to the EFS Infrequent Access (IA) storage class. EFS IA provides price/performance that is cost-optimized for files that are not accessed every day.
* feature: GameLift: GameLift FlexMatch now supports matchmaking of up to 200 players per game session, and FlexMatch can now automatically backfill your game sessions whenever there is an open slot.
* feature: KinesisVideo: Add "GET_DASH_STREAMING_SESSION_URL" as an API name to the GetDataEndpoint API.
* feature: KinesisVideoArchivedMedia: Adds support for the GetDASHStreamingSessionURL API. Also adds support for the Live Replay playback mode of the GetHLSStreamingSessionURL API.
* feature: WAF: Updated SDK APIs to add tags to WAF Resources: WebACL, Rule, Rulegroup and RateBasedRule. Tags can also be added during creation of these resources.
* feature: WAFRegional: Updated SDK APIs to add tags to WAF Resources: WebACL, Rule, Rulegroup and RateBasedRule. Tags can also be added during creation of these resources.

## 2.489.0
* feature: CostExplorer: This release introduces a new operation called GetUsageForecast, which allows you to programmatically access AWS Cost Explorer's forecasting engine on usage data (running hours, data transfer, etc).

## 2.488.0
* feature: EC2: AssignPrivateIpAddresses response includes two new fields: AssignedPrivateIpAddresses, NetworkInterfaceId
* feature: RDS: This release supports Cross-Account Cloning for Amazon Aurora clusters.
* feature: S3: Add S3 x-amz-server-side-encryption-context support.
* feature: SWF: This release adds APIs that allow adding and removing tags to a SWF domain, and viewing tags for a domain. It also enables adding tags when creating a domain.

## 2.487.0
* feature: MediaStore: This release adds support for tagging, untagging, and listing tags for AWS Elemental MediaStore containers.

## 2.486.0
* feature: DocDB: This release provides support for cluster delete protection and the ability to stop and start clusters.
* feature: EC2: This release adds support for specifying a maximum hourly price for all On-Demand and Spot instances in both Spot Fleet and EC2 Fleet.
* feature: Organizations: Specifying the tag key and tag value is required for tagging requests.
* feature: RDS: This release adds support for RDS DB Cluster major version upgrade 

## 2.485.0
* feature: AlexaForBusiness: This release allows developers and customers to add SIP addresses and international phone numbers to contacts.
* feature: EC2: You can now launch 8xlarge and 16xlarge instance sizes on the general purpose M5 and memory optimized R5 instance types.
* feature: Redshift: ClusterAvailabilityStatus: The availability status of the cluster for queries. Possible values are the following: Available, Unavailable, Maintenance, Modifying, Failed.
* feature: WorkSpaces: Minor API fixes for WorkSpaces.

## 2.484.0
* feature: DirectConnect: Tags will now be included in the API responses of all supported resources (Virtual interfaces, Connections, Interconnects and LAGs). You can also add tags while creating these resources.
* feature: EC2InstanceConnect: Amazon EC2 Instance Connect is a simple and secure way to connect to your instances using Secure Shell (SSH). With EC2 Instance Connect, you can control SSH access to your instances using AWS Identity and Access Management (IAM) policies as well as audit connection requests with AWS CloudTrail events. In addition, you can leverage your existing SSH keys or further enhance your security posture by generating one-time use SSH keys each time an authorized user connects.
* feature: WorkSpaces: Added support for the WorkSpaces restore feature and copying WorkSpaces Images across AWS Regions.

## 2.483.0
* feature: ApiGatewayV2: You can now perform tag operations on ApiGatewayV2 Resources (typically associated with WebSocket APIs)
* feature: CodeCommit: This release supports better exception handling for merges.

## 2.482.0
* feature: EC2: Starting today, you can use Traffic Mirroring  to copy network traffic from an elastic network interface of Amazon EC2 instances and then send it to out-of-band security and monitoring appliances for content inspection, threat monitoring, and troubleshooting. These appliances can be deployed as individual instances, or as a fleet of instances behind a Network Load Balancer with a User Datagram Protocol (UDP) listener. Traffic Mirroring supports filters and packet truncation, so that you only extract the traffic of interest to monitor by using monitoring tools of your choice.

## 2.481.0
* feature: APIGateway: Customers can pick different security policies (TLS version + cipher suite) for custom domains in API Gateway
* feature: ApiGatewayV2: Customers can get information about security policies set on custom domain resources in API Gateway
* feature: ApplicationInsights: CloudWatch Application Insights detects errors and exceptions from logs, including .NET custom application logs, SQL Server logs, IIS logs, and more, and uses a combination of built-in rules and machine learning, such as dynamic baselining, to identify common problems. You can then easily drill into specific issues with CloudWatch Automatic Dashboards that are dynamically generated. These dashboards contain the most recent alarms, a summary of relevant metrics, and log snippets to help you identify root cause.
* feature: ClientSideMonitoring: add a host config to client-side monitoring configuration, defaults to be '127.0.0.1'
* feature: ELBv2: This release adds support for UDP on Network Load Balancers
* feature: FSx: Starting today, you can join your Amazon FSx for Windows File Server file systems to your organization's self-managed Microsoft Active Directory while creating the file system. You can also perform in-place updates of file systems to keep your Active Directory configuration up to date.
* feature: ResourceGroupsTaggingAPI: Updated service APIs and documentation.
* feature: SSM: AWS Systems Manager now supports deleting a specific version of a SSM Document.
* feature: SecurityHub: This release includes a new Tags parameter for the EnableSecurityHub operation, and the following new operations: DescribeHub, CreateActionTarget, DeleteActionTarget, DescribeActionTargets, UpdateActionTarget, TagResource, UntagResource, and ListTagsforResource. It removes the operation ListProductSubscribers, and makes Title and Description required attributes of AwsSecurityFinding.
* feature: ServiceQuotas: Service Quotas enables you to view and manage your quotas for AWS services from a central location.

## 2.480.0
* feature: IAM: We are making it easier for you to manage your permission guardrails i.e. service control policies by enabling you to retrieve the last timestamp when an AWS service was accessed within an account or AWS Organizations entity.
* feature: MediaPackage: Added two new origin endpoint fields for configuring which SCTE-35 messages are treated as advertisements.

## 2.479.0
* feature: ACMPCA: ACM Private CA is launching Root CAs and hierarchy management, a new feature that expands the scope of ACM Private CA from supporting only subordinate issuing CAs, to now include a full CA hierarchy that includes root CAs - the cryptographic root of trust for an organization.
* feature: Glue: Starting today, you can now use workflows in AWS Glue to author directed acyclic graphs (DAGs) of Glue triggers, crawlers and jobs. Workflows enable orchestration of your ETL workloads by building dependencies between Glue entities (triggers, crawlers and jobs).  You can visually track status of the different nodes in the workflows on the console making it easier to monitor progress and troubleshoot issues. Also, you can share parameters across entities in the workflow.
* feature: Health: API improvements for the AWS Health service.
* feature: IoTEventsData: "The colon character ':' is now permitted in Detector Model 'key' parameter values.
* feature: RDS: This release adds support for RDS storage autoscaling

## 2.478.0
* feature: EC2: You can now launch new 12xlarge, 24xlarge, and metal instance sizes on the Amazon EC2 compute optimized C5 instance types featuring 2nd Gen Intel Xeon Scalable Processors.
* feature: ResourceGroupsTaggingAPI: You can use tag policies to help standardize on tags across your organization's resources.

## 2.477.0
* feature: Neptune: This release adds a feature to configure Amazon Neptune to publish audit logs to Amazon CloudWatch Logs.
* feature: RoboMaker: Add the ServiceUnavailableException (503) into CreateSimulationJob API.
* feature: ServiceCatalog: Restrict concurrent calls by a single customer account for CreatePortfolioShare and DeletePortfolioShare when sharing/unsharing to an Organization.

## 2.476.0
* feature: AppStream: Added 2 new values(WINDOWS_SERVER_2016, WINDOWS_SERVER_2019) for PlatformType enum.
* feature: CloudFront: A new datatype in the CloudFront API, AliasICPRecordal, provides the ICP recordal status for CNAMEs associated with distributions. AWS services in China customers must file for an Internet Content Provider (ICP) recordal if they want to serve content publicly on an alternate domain name, also known as a CNAME, that they have added to CloudFront. The status value is returned in the CloudFront response; you cannot configure it yourself. The status is set to APPROVED for all CNAMEs (aliases) in regions outside of China.
* feature: EC2: Correction to enumerations in EC2 client.

## 2.475.0
* feature: AppMesh: This release adds support for AWS Cloud Map as a service discovery method for virtual nodes.
* feature: EC2: G4 instances are Amazon EC2 instances based on NVIDIA T4 GPUs and are designed to provide cost-effective machine learning inference for applications, like image classification, object detection, recommender systems, automated speech recognition, and language translation. G4 instances are also a cost-effective platform for building and running graphics-intensive applications, such as remote graphics workstations, video transcoding, photo-realistic design, and game streaming in the cloud. To get started with G4 instances visit https://aws.amazon.com/ec2/instance-types/g4.
* feature: ElastiCache: This release is to add support for reader endpoint for cluster-mode disabled Amazon ElastiCache for Redis clusters.
* feature: GuardDuty: Support for tagging functionality in Create and Get operations for Detector, IP Set, Threat Intel Set, and Finding Filter resources and 3 new tagging APIs: ListTagsForResource, TagResource, and UntagResource.

## 2.474.0
* feature: ServiceCatalog: This release adds a new field named Guidance to update provisioning artifact, this field can be set by the administrator to provide guidance to end users about which provisioning artifacts to use.

## 2.473.0
* bugfix: Credentials: Refresh cached ini credentials from disk
* feature: SageMaker: The default TaskTimeLimitInSeconds of labeling job is increased to 8 hours. Batch Transform introduces a new DataProcessing field which supports input and output filtering and data joining. Training job increases the max allowed input channels from 8 to 20.

## 2.472.0
* feature: CodeBuild: AWS CodeBuild adds support for source version on project level.
* feature: CodeCommit: This release adds two merge strategies for merging pull requests: squash and three-way. It also adds functionality for resolving merge conflicts, testing merge outcomes, and for merging branches using one of the three supported merge strategies.
* feature: Personalize: Amazon Personalize is a machine learning service that makes it easy for developers to create individualized recommendations for customers using their applications.
* feature: PersonalizeEvents: Introducing Amazon Personalize  - a machine learning service that makes it easy for developers to create individualized recommendations for customers using their applications.
* feature: PersonalizeRuntime: Amazon Personalize is a machine learning service that makes it easy for developers to create individualized recommendations for customers using their applications.

## 2.471.0
* feature: EC2: Adds DNS entries and NLB ARNs to describe-vpc-endpoint-connections API response. Adds owner ID to describe-vpc-endpoints and create-vpc-endpoint API responses.

## 2.470.0
* feature: ECS: This release of Amazon Elastic Container Service (Amazon ECS) introduces support for launching container instances using supported Amazon EC2 instance types that have increased elastic network interface density. Using these instance types and opting in to the awsvpcTrunking account setting provides increased elastic network interface (ENI) density on newly launched container instances which allows you to place more tasks on each container instance.
* feature: GuardDuty: Improve FindingCriteria Condition field names, support long-typed conditions and deprecate old Condition field names.
* feature: MediaConnect: This release adds support for encrypting entitlements using Secure Packager and Encoder Key Exchange (SPEKE).
* feature: Organizations: You can tag and untag accounts in your organization and view tags on an account in your organization.
* feature: SES: You can now specify whether the Amazon Simple Email Service must deliver email over a connection that is encrypted using Transport Layer Security (TLS).
* feature: SSM: OpsCenter is a new Systems Manager capability that allows you to view, diagnose, and remediate, operational issues, aka OpsItems, related to various AWS resources by bringing together contextually relevant investigation information. New APIs to create, update, describe, and get OpsItems as well as OpsItems summary API. 

## 2.469.0
* feature: Glue: Support specifying python version for Python shell jobs. A new parameter PythonVersion is added to the JobCommand data type.

## 2.468.0
* feature: EC2: This release adds support for Host Recovery feature which automatically restarts instances on to a new replacement host if failures are detected on Dedicated Host.
* feature: ElastiCache: Amazon ElastiCache now allows you to apply available service updates on demand. Features included: (1) Access to the list of applicable service updates and their priorities. (2) Service update monitoring and regular status updates. (3) Recommended apply-by-dates for scheduling the service updates, which is critical if your cluster is in ElastiCache-supported compliance programs. (4) Ability to stop and later re-apply updates. For more information, see https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Self-Service-Updates.html
* feature: StorageGateway: AWS Storage Gateway now supports AWS PrivateLink, enabling you to administer and use gateways without needing to use public IP addresses or a NAT/Internet Gateway, while avoiding traffic from going over the internet.

## 2.467.0
* bugfix: Buffer: remove deprecated new Buffer() constructor in Node.js
* feature: EC2: Amazon EC2 I3en instances are the new storage-optimized instances offering up to 60 TB NVMe SSD instance storage and up to 100 Gbps of network bandwidth.

## 2.466.0
* feature: CodeCommit: This release adds APIs that allow adding and removing tags to a repository, and viewing tags for a repository. It also enables adding tags when creating a repository.
* feature: IoTAnalytics: IoT Analytics adds the option to use your own S3 bucket to store channel and data store resources. Previously, only service-managed storage was used.
* feature: IoTEvents: The AWS IoT Events service allows customers to monitor their IoT devices and sensors to detect failures or changes in operation and to trigger actions when these events occur
* feature: IoTEventsData: The AWS IoT Events service allows customers to monitor their IoT devices and sensors to detect failures or changes in operation and to trigger actions when these events occur
* feature: Kafka: Updated APIs for Amazon MSK to enable new features such as encryption in transit, client authentication, and scaling storage.
* feature: PinpointEmail: You can now specify whether the Amazon Pinpoint Email service must deliver email over a connection that is encrypted using Transport Layer Security (TLS).
* feature: RDS: This release adds support for Activity Streams for database clusters.
* feature: RDSDataService: The RDS Data API is generally available for the MySQL-compatible edition of Amazon Aurora Serverless in the US East (N. Virginia and Ohio), US West (Oregon), EU (Ireland), and Asia Pacific (Tokyo) regions. This service enables you to easily access Aurora Serverless clusters with web services-based applications including AWS Lambda and AWS AppSync. The new APIs included in this SDK release are ExecuteStatement, BatchExecuteStatement, BeginTransaction, CommitTransaction, and RollbackTransaction. The ExecuteSql API is deprecated; instead use ExecuteStatement which provides additional functionality including transaction support.
* feature: ServiceCatalog: Service Catalog ListStackInstancesForProvisionedProduct API enables customers to get details of a provisioned product with type "CFN_STACKSET". By passing the provisioned product id, the API will list account, region and status of each stack instances that are associated with this provisioned product.

## 2.465.0
* feature: DLM: Customers can now simultaneously take snapshots of multiple EBS volumes attached to an EC2 instance. With this new capability, snapshots guarantee crash-consistency across multiple volumes by preserving the order of IO operations. This new feature is fully integrated with Amazon Data Lifecycle Manager (DLM) allowing customers to automatically manage snapshots by creating lifecycle policies. 
* feature: EC2: Customers can now simultaneously take snapshots of multiple EBS volumes attached to an EC2 instance. With this new capability, snapshots guarantee crash-consistency across multiple volumes by preserving the order of IO operations. This new feature is fully integrated with Amazon Data Lifecycle Manager (DLM) allowing customers to automatically manage snapshots by creating lifecycle policies. 
* feature: IoTThingsGraph: Initial release.
* feature: SecurityHub: This update adds the ListProductSubscribers API, DescribeProducts API, removes CONTAINS as a comparison value for the StringFilter, and only allows use of EQUALS instead of CONTAINS in MapFilter.  

## 2.464.0
* feature: Chime: This release adds the ability to search and order toll free phone numbers for Voice Connectors.
* feature: GroundStation: AWS Ground Station is a fully managed service that enables you to control satellite communications, downlink and process satellite data, and scale your satellite operations efficiently and cost-effectively without having to build or manage your own ground station infrastructure.
* feature: PinpointEmail: This release adds support for programmatic access to Deliverability dashboard subscriptions and the deliverability data provided by the Deliverability dashboard for domains and IP addresses. The data includes placement metrics for campaigns that use subscribed domains to send email.
* feature: RDS: Add a new output field Status to DBEngineVersion which shows the status of the engine version (either available or deprecated). Add a new parameter IncludeAll to DescribeDBEngineVersions to make it possible to return both available and deprecated engine versions. These changes enable a user to create a Read Replica of an DB instance on a deprecated engine version.
* feature: RoboMaker: Added support for an additional robot software suite (Gazebo 9) and for cancelling deployment jobs.
* feature: StorageGateway: Introduce AssignTapePool operation to allow customers to migrate tapes between pools.
* feature: TranscribeService: Amazon Transcribe - support transcriptions from audio sources in Modern Standard Arabic (ar-SA).

## 2.463.0
* feature: CodeDeploy: AWS CodeDeploy now supports tagging for the application and deployment group resources.
* feature: Core: set environmental variable AWS_NODEJS_CONNECTION_REUSE_ENABLED to 1 to make SDK reuse connections by default if users don't supply custom agents.
* feature: MediaStoreData: MediaStore - This release adds support for chunked transfer of objects, which reduces latency by making an object available for downloading while it is still being uploaded.

## 2.462.0
* bugfix: Documentation: Update badges in README.md
* feature: EC2: New APIs to enable EBS encryption by default feature. Once EBS encryption by default is enabled in a region within the account, all new EBS volumes and snapshot copies are always encrypted

## 2.461.0
* feature: APIGateway: This release adds support for tagging of Amazon API Gateway resources.
* feature: Budgets: Added new datatype PlannedBudgetLimits to Budget model, and updated examples for AWS Budgets API for UpdateBudget, CreateBudget, DescribeBudget, and DescribeBudgets
* feature: DeviceFarm: This release introduces support for tagging, tag-based access control, and resource-based access control.
* feature: EC2: This release adds idempotency support for associate, create route and authorization APIs for AWS Client VPN Endpoints.
* feature: EFS: AWS EFS documentation updated to reflect the minimum required value for ProvisionedThroughputInMibps is 1 from the previously documented 0. The service has always required a minimum value of 1, therefor service behavior is not changed. 
* feature: ServiceCatalog: Service Catalog UpdateProvisionedProductProperties API enables customers to manage provisioned product ownership. Administrators can now update the user associated to a provisioned product to another user within the same account allowing the new user to describe, update, terminate and execute service actions in that Service Catalog resource. New owner will also be able to list and describe all past records executed for that provisioned product.
* feature: WorkLink: Amazon WorkLink is a fully managed, cloud-based service that enables secure, one-click access to internal websites and web apps from mobile phones. This release introduces new APIs to associate and manage website authorization providers with Amazon WorkLink fleets.
* feature: s3: Validate the `Expiration` parameter for `s3.getSignedUrl()` is number

## 2.460.0
* feature: AlexaForBusiness: This release contains API changes to allow customers to create and manage Network Profiles for their Shared devices
* feature: DataSync: Documentation update and refine pagination token on Datasync List API's

## 2.459.0
* feature: Kafka: Updated APIs for the Managed Streaming for Kafka service that let customers create clusters with custom Kafka configuration. 
* feature: MediaPackageVod: AWS Elemental MediaPackage now supports Video-on-Demand (VOD) workflows.  These new features allow you to easily deliver a vast library of source video Assets stored in your own S3 buckets using a small set of simple to set up Packaging Configurations and Packaging Groups.

## 2.458.0
* feature: AppStream: Includes APIs for managing subscriptions to AppStream 2.0 usage reports and configuring idle disconnect timeouts on AppStream 2.0 fleets.

## 2.457.0
* enhancement: Documentation: Added steps to generate documentation changes in CONTRIBUTION.md
* feature: MediaLive: Added channel state waiters to MediaLive.
* feature: S3: This release updates the Amazon S3 PUT Bucket replication API to include a new optional field named token, which allows you to add a replication configuration to an S3 bucket that has Object Lock enabled.

## 2.456.0
* feature: CodePipeline: This feature includes new APIs to add, edit, remove and view tags for pipeline, custom action type and webhook resources. You can also add tags while creating these resources.
* feature: EC2: Adding tagging support for VPC Endpoints and VPC Endpoint Services.
* feature: MediaPackage: Adds optional configuration for DASH SegmentTemplateFormat to refer to segments by Number with Duration, rather than Number or Time with SegmentTimeline.
* feature: TranscribeService: Amazon Transcribe - support transcriptions from audio sources in Indian English (en-IN) and Hindi (hi-IN).

## 2.455.0
* feature: Chime: Amazon Chime private bots GA release.
* feature: Comprehend: With this release AWS Comprehend now supports Virtual Private Cloud for Asynchronous Batch Processing jobs
* feature: EC2: Pagination support for ec2.DescribeSubnets, ec2.DescribeDhcpOptions 
* feature: StorageGateway: Add Tags parameter to CreateSnapshot and UpdateSnapshotSchedule APIs, used for creating tags on create for one off snapshots and scheduled snapshots.

## 2.454.0
* feature: DataSync: AWS DataSync now enables exclude and include filters to control what files and directories will be copied as part of a task execution.
* feature: IoTAnalytics: ContentDeliveryRule to support sending dataset to S3 and glue
* feature: Lambda: AWS Lambda now supports Node.js v10
* feature: core: Add support for requiresLength trait for streaming payload and send chunked transfer encode when allowed

## 2.453.0
* feature: Glue: AWS Glue now supports specifying existing catalog tables for a crawler to examine as a data source. A new parameter CatalogTargets is added to the CrawlerTargets data type. 
* feature: STS: AWS Security Token Service (STS) now supports passing IAM Managed Policy ARNs as session policies when you programmatically create temporary sessions for a role or federated user. The Managed Policy ARNs can be passed via the PolicyArns parameter, which is now available in the AssumeRole, AssumeRoleWithWebIdentity, AssumeRoleWithSAML, and GetFederationToken APIs. The session policies referenced by the PolicyArn parameter will only further restrict the existing permissions of an IAM User or Role for individual sessions.

## 2.452.0
* feature: IoT1ClickProjects: Added automatic pagination support for ListProjects and ListPlacements APIs.
* feature: KinesisAnalytics: Kinesis Data Analytics APIs now support tagging on applications.
* feature: KinesisAnalyticsV2: Kinesis Data Analytics APIs now support tagging on applications.
* feature: SageMaker: Workteams now supports notification configurations. Neo now supports Jetson Nano as a target device and NumberOfHumanWorkersPerDataObject is now included in the ListLabelingJobsForWorkteam response.
* feature: ServiceCatalog: Adds "Parameters" field in UpdateConstraint API, which will allow Admin user to update "Parameters" in created Constraints.

## 2.451.0
* feature: AlexaForBusiness: This release adds an API allowing authorized users to delete a shared device's history of voice recordings and associated response data.
* feature: AppSync: AWS AppSync now supports the ability to add additional authentication providers to your AWS AppSync GraphQL API as well as the ability to retrieve directives configured against fields or object type definitions during schema introspection.
* feature: SSM: Patch Manager adds support for Microsoft Application Patching.
* feature: StorageGateway: Add optional field AdminUserList to CreateSMBFileShare and UpdateSMBFileShare APIs.

## 2.450.0
* feature: ConfigService: AWS Config now supports tagging on PutConfigRule, PutConfigurationAggregator and PutAggregationAuthorization APIs.

## 2.449.0
* feature: CognitoIdentityServiceProvider: This release of Amazon Cognito User Pools introduces the new AdminSetUserPassword API that allows administrators of a user pool to change a user's password. The new password can be temporary or permanent.
* feature: MediaConvert: DASH output groups using DRM encryption can now enable a playback device compatibility mode to correct problems with playback on older devices. 
* feature: MediaLive: You can now switch the channel mode of your channels from standard to single pipeline and from single pipeline to standard. In order to switch a channel from single pipeline to standard all inputs attached to the channel must support two encoder pipelines.
* feature: WorkMail: Amazon WorkMail is releasing two new actions: 'GetMailboxDetails' and 'UpdateMailboxQuota'. They add insight into how much space is used by a given mailbox (size) and what its limit is (quota). A mailbox quota can be updated, but lowering the value will not influence WorkMail per user charges. For a closer look at the actions please visit https://docs.aws.amazon.com/workmail/latest/APIReference/API_Operations.html

## 2.448.0
* feature: AlexaForBusiness: This release allows developers and customers to send text and audio announcements to rooms.
* feature: KMS: AWS Key Management Service (KMS) can return an INTERNAL_ERROR connection error code if it cannot connect a custom key store to its AWS CloudHSM cluster. INTERNAL_ERROR is one of several connection error codes that help you to diagnose and fix a problem with your custom key store.

## 2.447.0
* feature: EC2: This release adds an API for the modification of a VPN Connection, enabling migration from a Virtual Private Gateway (VGW) to a Transit Gateway (TGW), while preserving the VPN endpoint IP addresses on the AWS side as well as the tunnel options.
* feature: ECS: This release of Amazon Elastic Container Service (Amazon ECS) introduces additional task definition parameters that enable you to define secret options for Docker log configuration, a per-container list contains secrets stored in AWS Systems Manager Parameter Store or AWS Secrets Manager.
* feature: XRay: AWS X-Ray now includes Analytics, an interactive approach to analyzing user request paths (i.e., traces). Analytics will allow you to easily understand how your application and its underlying services are performing. With X-Ray Analytics, you can quickly detect application issues, pinpoint the root cause of the issue, determine the severity of the issues, and identify which end users were impacted. With AWS X-Ray Analytics you can explore, analyze, and visualize traces, allowing you to find increases in response time to user requests or increases in error rates. Metadata around peak periods, including frequency and actual times of occurrence, can be investigated by applying filters with a few clicks. You can then drill down on specific errors, faults, and response time root causes and view the associated traces. 

## 2.446.0
* bugfix: DocumentClient: Fixes issue stringifying sets by only including values.
* feature: CodePipeline: This release contains an update to the PipelineContext object that includes the Pipeline ARN, and the Pipeline Execution Id. The ActionContext object is also updated to include the Action Execution Id.
* feature: DirectConnect: This release adds support for AWS Direct Connect customers to use AWS Transit Gateway with AWS Direct Connect gateway to route traffic between on-premise networks and their VPCs.
* feature: ManagedBlockchain: (New Service) Amazon Managed Blockchain is a fully managed service that makes it easy to create and manage scalable blockchain networks using popular open source frameworks.
* feature: S3Control: Add support for Amazon S3 Batch Operations.
* feature: ServiceCatalog: Admin users can now associate/disassociate aws budgets with a portfolio or product in Service Catalog. End users can see the association by listing it or as part of the describe portfolio/product output. A new optional boolean parameter, "DisableTemplateValidation", is added to ProvisioningArtifactProperties data type. The purpose of the parameter is to enable or disable the CloudFormation template validtion when creating a product or a provisioning artifact.

## 2.445.0
* feature: EC2: Adds support for Elastic Fabric Adapter (EFA) ENIs. 
* feature: Transfer: This release adds support for per-server host-key management. You can now specify the SSH RSA private key used by your SFTP server.

## 2.444.0
* feature: IAM: AWS Security Token Service (STS) enables you to request session tokens from the global STS endpoint that work in all AWS Regions. You can configure the global STS endpoint to vend session tokens that are compatible with all AWS Regions using the new IAM SetSecurityTokenServicePreferences API. 
* feature: SNS: With this release AWS SNS adds tagging support for Topics.

## 2.443.0
* feature: DynamoDB: This update allows you to tag Amazon DynamoDB tables when you create them. Tags are labels you can attach to AWS resources to make them easier to manage, search, and filter. 
* feature: GameLift: This release introduces the new Realtime Servers feature, giving game developers a lightweight yet flexible solution that eliminates the need to build a fully custom game server. The AWS SDK updates provide support for scripts, which are used to configure and customize Realtime Servers.
* feature: Inspector: AWS Inspector - Improve the ListFindings API response time and decreases the maximum number of agentIDs from 500 to 99.
* feature: Lambda: AWS Lambda now supports the GetLayerVersionByArn API.

## 2.442.0
* feature: AlexaForBusiness: This release adds support for the Alexa for Business gateway and gateway group APIs.
* feature: EC2: You can now launch the new Amazon EC2 general purpose burstable instance types T3a that feature AMD EPYC processors.
* feature: MediaConnect: Adds support for ListEntitlements pagination.
* feature: MediaTailor: AWS Elemental MediaTailor SDK now includes a new parameter to support origin servers that produce single-period DASH manifests.
* feature: RDS: A new parameter "feature-name" is added to the add-role and remove-role db cluster APIs. The value for the parameter is optional for Aurora MySQL compatible database clusters, but mandatory for Aurora PostgresQL. You can find the valid list of values using describe db engine versions API.
* feature: Route53: Amazon Route 53 now supports the Asia Pacific (Hong Kong) Region (ap-east-1) for latency records, geoproximity records, and private DNS for Amazon VPCs in that region.
* feature: SSM: This release updates AWS Systems Manager APIs to allow customers to configure parameters to use either the standard-parameter tier (the default tier) or the advanced-parameter tier. It allows customers to create parameters with larger values and attach parameter policies to an Advanced Parameter. 
* feature: StorageGateway: AWS Storage Gateway now supports Access Control Lists (ACLs) on File Gateway SMB shares, enabling you to apply fine grained access controls for Active Directory users and groups.
* feature: Textract: This release adds support for checkbox also known as SELECTION_ELEMENT in Amazon Textract.

## 2.441.0
* feature: CostExplorer: enable cors
* feature: ResourceGroups: The AWS Resource Groups service increased the query size limit to 4096 bytes.
* feature: TranscribeService: Amazon Transcribe - support transcriptions from audio sources in Spanish Spanish (es-ES).
* feature: WorkSpaces: Added a new reserved field.

## 2.440.0
* feature: Discovery: The Application Discovery Service's DescribeImportTasks and BatchDeleteImportData APIs now return additional statuses for error reporting.
* feature: Kafka: Amazon Kafka - Added tagging APIs
* feature: Organizations: AWS Organizations is now available in the AWS GovCloud (US) Regions, and we added a new API action for creating accounts in those Regions. For more information, see CreateGovCloudAccount in the AWS Organizations API Reference. 
* feature: RDS: This release adds the TimeoutAction parameter to the ScalingConfiguration of an Aurora Serverless DB cluster. You can now configure the behavior when an auto-scaling capacity change can't find a scaling point.
* feature: WorkLink: Amazon WorkLink is a fully managed, cloud-based service that enables secure, one-click access to internal websites and web apps from mobile phones. This release introduces new APIs to link and manage internal websites and web apps with Amazon WorkLink fleets. 

## 2.439.0
* feature: EC2: This release adds support for requester-managed Interface VPC Endpoints (powered by AWS PrivateLink). The feature prevents VPC endpoint owners from accidentally deleting or otherwise mismanaging the VPC endpoints of some AWS VPC endpoint services.
* feature: Polly: Amazon Polly adds Arabic language support with new female voice - "Zeina"

## 2.438.0
* bugfix: Parser: Alloc new buffers from 0 offset when parsing the sensitive blob data and zero out the node shared buffer pool.
* bugfix: computeSha256: Before running instanceof, verify that the operand is a function
* feature: CognitoIdentityServiceProvider: This release adds support for the new email configuration in Amazon Cognito User Pools. You can now specify whether Amazon Cognito emails your users by using its built-in email functionality or your Amazon SES email configuration.
* feature: MQ: This release adds the ability to retrieve information about broker engines and broker instance options. See Broker Engine Types and Broker Instance Options in the Amazon MQ REST API Reference.
* feature: Redshift: DescribeResize can now return percent of data transferred from source cluster to target cluster for a classic resize.
* feature: StorageGateway: This change allows you to select either a weekly or monthly maintenance window for your volume or tape gateway. It also allows you to tag your tape and volume resources on creation by adding a Tag value on calls to the respective api endpoints.

## 2.437.0
* feature: Comprehend: With this release AWS Comprehend provides confusion matrix for custom document classifier.
* feature: Glue: AWS Glue now supports workerType choices in the CreateJob, UpdateJob, and StartJobRun APIs, to be used for memory-intensive jobs.
* feature: MediaConvert: Rectify incorrect modelling of DisassociateCertificate method
* feature: MediaLive: Today AWS Elemental MediaLive (https://aws.amazon.com/medialive/) adds the option to create "Single Pipeline" channels, which offers a lower-cost option compared to Standard channels. MediaLive Single Pipeline channels have a single encoding pipeline rather than the redundant dual Availability Zone (AZ) pipelines that MediaLive provides with a "Standard" channel.
* feature: docs: update doc operation example to use 'NUMBER_VALUE' instead of 0 in input

## 2.436.0
* feature: EKS: Added support to enable or disable publishing Kubernetes cluster logs in AWS CloudWatch

## 2.435.0
* bugfix: integration: remove rds create DB security group test
* feature: Batch: Support for GPU resource requirement in RegisterJobDefinition and SubmitJob
* feature: Comprehend: With this release AWS Comprehend  adds tagging support for document-classifiers and entity-recognizers.

## 2.434.0
* feature: EC2: Add paginators.
* feature: SecurityHub: This update includes 3 additional error codes: AccessDeniedException, InvalidAccessException, and ResourceConflictException. This update also removes the error code ResourceNotFoundException from the GetFindings, GetInvitationsCount, ListInvitations, and ListMembers operations. 

## 2.433.0
* feature: EMR: Amazon EMR adds the ability to modify instance group configurations on a running cluster through the new "configurations" field in the ModifyInstanceGroups API.

## 2.432.0
* feature: CloudWatch: Added 3 new APIs, and one additional parameter to PutMetricAlarm API, to support tagging of CloudWatch Alarms.
* feature: Comprehend: With this release AWS Comprehend supports encryption of output results of analysis jobs and volume data on the storage volume attached to the compute instance that processes the analysis job.
* feature: Greengrass: Greengrass APIs now support tagging operations on resources

## 2.431.0
* feature: MediaLive: This release adds a new output locking mode synchronized to the Unix epoch.
* feature: PinpointEmail: This release adds support for using the Amazon Pinpoint Email API to tag the following types of Amazon Pinpoint resources: configuration sets; dedicated IP pools; deliverability dashboard reports; and, email identities. A tag is a label that you optionally define and associate with these types of resources. Tags can help you categorize and manage these resources in different ways, such as by purpose, owner, environment, or other criteria. A resource can have as many as 50 tags. For more information, see the Amazon Pinpoint Email API Reference.
* feature: ServiceCatalog: Adds "Tags" field in UpdateProvisionedProduct API. The product should have a new RESOURCE_UPDATE Constraint with TagUpdateOnProvisionedProduct field set to ALLOWED for it to work. See API docs for CreateConstraint for more information
* feature: WorkSpaces: Amazon WorkSpaces adds tagging support for WorkSpaces Images, WorkSpaces directories, WorkSpaces bundles and IP Access control groups.

## 2.430.0
* feature: AppMesh: This release includes AWS Tagging integration for App Mesh, VirtualNode access logging, TCP routing, and Mesh-wide external traffic egress control. See https://docs.aws.amazon.com/app-mesh/latest/APIReference/Welcome.html for more details.
* feature: EC2: You can now launch the new Amazon EC2 R5ad and M5ad instances that feature local NVMe attached SSD instance storage (up to 3600 GB). M5ad and R5ad feature AMD EPYC processors that offer a 10% cost savings over the M5d and R5d EC2 instances.
* feature: ECS: This release of Amazon Elastic Container Service (Amazon ECS) introduces support for external deployment controllers for ECS services with the launch of task set management APIs. Task sets are a new primitive for controlled management of application deployments within a single ECS service.
* feature: ELBv2: This release adds support for routing based on HTTP headers, methods, query string or query parameters and source IP addresses in Application Load Balancer.
* feature: S3: S3 Glacier Deep Archive provides secure, durable object storage class for long term data archival. This SDK release provides API support for this new storage class.
* feature: StorageGateway: This change allows you to select a pool for archiving virtual tapes. Pools are associated with S3 storage classes. You can now choose to archive virtual tapes in either S3 Glacier or S3 Glacier Deep Archive storage class. CreateTapes API now takes a new PoolId parameter which can either be GLACIER or DEEP_ARCHIVE. Tapes created with this parameter will be archived in the corresponding storage class.
* feature: Transfer:  This release adds PrivateLink support to your AWS SFTP server endpoint, enabling the customer to access their SFTP server within a VPC, without having to traverse the internet. Customers can now can create a server and specify an option whether they want the endpoint to be hosted as public or in their VPC, and with the in VPC option, SFTP clients and users can access the server only from the customer's VPC or from their on-premises environments using DX or VPN. This release also relaxes the SFTP user name requirements to allow underscores and hyphens.

## 2.429.0
* feature: Credentials: enables use of credentials_process for sourcing credentials from an external process https://docs.aws.amazon.com/cli/latest/topic/config-vars.html#sourcing-credentials-from-external-processes
* feature: Glue: This new feature will now allow customers to add a customized csv classifier with classifier API. They can specify a custom delimiter, quote symbol and control other behavior they'd like crawlers to have while recognizing csv files

## 2.428.0
* feature: DirectConnect: Direct Connect gateway enables you to establish connectivity between your on-premise networks and Amazon Virtual Private Clouds (VPCs) in any commercial AWS Region (except in China) using AWS Direct Connect connections at any AWS Direct Connect location. This release enables multi-account support for Direct Connect gateway, with multi-account support for Direct Connect gateway, you can associate up to ten VPCs from any AWS account with a Direct Connect gateway. The AWS accounts owning VPCs and the Direct Connect gateway must belong to the same AWS payer account ID. This release also enables Direct Connect Gateway owners to allocate allowed prefixes from each associated VPCs.
* feature: FMS: AWS Firewall Manager now allows customer to centrally enable AWS Shield Advanced DDoS protection for their entire AWS infrastructure, across accounts and applications.
* feature: IoT1ClickDevicesService: This release adds tagging support for AWS IoT 1-Click Device resources. Use these APIs to add, remove, or list tags on Devices, and leverage the tags for various authorization and billing scenarios. This release also adds the ARN property for DescribeDevice response object.
* feature: IoTAnalytics: This change allows you to specify the number of versions of IoT Analytics data set content to be retained. Previously, the number of versions was managed implicitly via the setting of the data set's retention period.
* feature: MediaConvert: This release adds support for detailed job progress status and S3 server-side output encryption. In addition, the anti-alias filter will now be automatically applied to all outputs
* feature: Retry: make RequestThrottleException retryable
* feature: RoboMaker: Added additional progress metadata fields for robot deployments
* feature: TranscribeService: Amazon Transcribe - With this release Amazon Transcribe enhances the custom vocabulary feature to improve accuracy by providing customization on pronunciations and output formatting. 

## 2.427.0
* feature: IoT1ClickProjects: This release adds tagging support for AWS IoT 1-Click Project resources. Use these APIs to add, remove, or list tags on Projects, and leverage the tags for various authorization and billing scenarios. This release also adds the ARN property to projects for DescribeProject and ListProject responses.
* feature: TranscribeService: Amazon Transcribe - support transcriptions from audio sources in German (de-DE) and Korean (ko-KR).

## 2.426.0
* bugfix: Paginator: still send '{}' in body for requests other than GET
* feature: CloudWatchEvents: Added 3 new APIs, and one additional parameter to the PutRule API, to support tagging of CloudWatch Events rules.
* feature: CognitoIdentityServiceProvider: This release adds tags and tag-based access control support to Amazon Cognito User Pools.
* feature: Iot: This release adds the GetStatistics API for the AWS IoT Fleet Indexing Service, which allows customers to query for statistics about registered devices that match a search query. This release only supports the count statistics. For more information about this API, see https://docs.aws.amazon.com/iot/latest/apireference/API_GetStatistics.html
* feature: Lightsail: This release adds the DeleteKnownHostKeys API, which enables Lightsail's browser-based SSH or RDP clients to connect to the instance after a host key mismatch.

## 2.425.0
* feature: CodePipeline: Add support for viewing details of each action execution belonging to past and latest pipeline executions that have occurred in customer's pipeline. The details include start/updated times, action execution results, input/output artifacts information, etc. Customers also have the option to add pipelineExecutionId in the input to filter the results down to a single pipeline execution.
* feature: CognitoIdentity: This release adds tags and tag-based access control support to Amazon Cognito Identity Pools (Federated Identities). 
* feature: MarketplaceMetering: This release increases AWS Marketplace Metering Service maximum usage quantity to 2147483647 and makes parameters usage quantity and dryrun optional.
* feature: cors: add cors support for IAM and ResouceGroups services

## 2.424.0
* bugfix: Paginator: fix the issue where paginator keys are ignored in GET requests
* bugfix: Request: Fix nextPage() method signature
* feature: ConfigService: AWS Config adds a new API called SelectResourceConfig to run advanced queries based on resource configuration properties.
* feature: EKS: Added support to control private/public access to the Kubernetes API-server endpoint

## 2.423.0
* feature: Chime: This release adds support for the Amazon Chime Business Calling and Voice Connector features.
* feature: DMS: S3 Endpoint Settings added support for 1) Migrating to Amazon S3 as a target in Parquet format 2) Encrypting S3 objects after migration with custom KMS Server-Side encryption. Redshift Endpoint Settings added support for encrypting intermediate S3 objects during migration with custom KMS Server-Side encryption. 
* feature: EC2: DescribeFpgaImages API now returns a new DataRetentionSupport attribute to indicate if the AFI meets the requirements to support DRAM data retention. DataRetentionSupport is a read-only attribute.

## 2.422.0
* feature: ACM: AWS Certificate Manager has added a new API action, RenewCertificate. RenewCertificate causes ACM to force the renewal of any private certificate which has been exported.
* feature: ACMPCA: AWS Certificate Manager (ACM) Private CA allows customers to manage permissions on their CAs. Customers can grant or deny AWS Certificate Manager permission to renew exported private certificates.
* feature: CloudWatch: New Messages parameter for the output of GetMetricData, to support new metric search functionality.
* feature: ConfigService: AWS Config - add ability to tag, untag and list tags for ConfigRule, ConfigurationAggregator and AggregationAuthorization resource types. Tags can be used for various scenarios including tag based authorization.
* feature: EC2: This release adds tagging support for Dedicated Host Reservations.
* feature: Iot: In this release, AWS IoT introduces support for tagging OTA Update and Stream resources. For more information about tagging, see the AWS IoT Developer Guide.
* feature: SageMaker: Amazon SageMaker Automatic Model Tuning now supports random search and hyperparameter scaling.

## 2.421.0
* feature: ConfigService: Config released Remediation APIs allowing Remediation of Config Rules

## 2.420.0
* bugfix: ManageUpload: abort request stream when body is smaller than 5MB
* feature: ServerlessApplicationRepository: The AWS Serverless Application Repository now supports associating a ZIP source code archive with versions of an application.

## 2.419.0
* feature: CostExplorer: The only change in this release is to make TimePeriod a required parameter in GetCostAndUsageRequest.
* feature: ElasticBeanstalk: Elastic Beanstalk added support for tagging, and tag-based access control, of all Elastic Beanstalk resources.
* feature: Glue: CreateDevEndpoint and UpdateDevEndpoint now support Arguments to configure the DevEndpoint. 
* feature: QuickSight: Amazon QuickSight user and group operation results now include group principal IDs and user principal IDs. This release also adds "DeleteUserByPrincipalId", which deletes users given their principal ID. The update also improves role session name validation.

## 2.418.0
* bugfix: cloudfront: Fix whitespace removal on custom policy
* feature: CodeBuild: CodeBuild also now supports Git Submodules.  CodeBuild now supports opting out of Encryption for S3 Build Logs.  By default these logs are encrypted.
* feature: SageMaker: SageMaker notebook instances now support enabling or disabling root access for notebook users. SageMaker Neo now supports rk3399 and rk3288 as compilation target devices.

## 2.417.0
* feature: AppMesh: This release includes a new version of the AWS App Mesh APIs. You can read more about the new APIs here: https://docs.aws.amazon.com/app-mesh/latest/APIReference/Welcome.html.
* feature: ECS: This release of Amazon Elastic Container Service (Amazon ECS) introduces additional task definition parameters that enable you to define dependencies for container startup and shutdown, a per-container start and stop timeout value, as well as an AWS App Mesh proxy configuration which eases the integration between Amazon ECS and AWS App Mesh.
* feature: GameLift: Amazon GameLift-hosted instances can now securely access resources on other AWS services using IAM roles. See more details at https://aws.amazon.com/releasenotes/amazon-gamelift/.
* feature: Greengrass: Greengrass group UID and GID settings can now be configured to use a provided default via FunctionDefaultConfig. If configured, all Lambda processes in your deployed Greengrass group will by default start with the provided UID and/or GID, rather than by default starting with UID "ggc_user" and GID "ggc_group" as they would if not configured. Individual Lambdas can also be configured to override the defaults if desired via each object in the Functions list of your FunctionDefinitionVersion.
* feature: MediaLive: This release adds a MediaPackage output group, simplifying configuration of outputs to AWS Elemental MediaPackage.
* feature: RDS: You can configure your Aurora database cluster to automatically copy tags on the cluster to any automated or manual database cluster snapshots that are created from the cluster. This allows you to easily set metadata on your snapshots to match the parent cluster, including access policies. You may enable or disable this functionality while creating a new cluster, or by modifying an existing database cluster.

## 2.416.0
* feature: DirectConnect: Exposed a new available port speeds field in the DescribeLocation api call.
* feature: EC2: This release adds pagination support for ec2.DescribeVpcs, ec2.DescribeInternetGateways and ec2.DescribeNetworkAcls APIs

## 2.415.0
* feature: MediaLive: This release adds support for pausing and unpausing one or both pipelines at scheduled times.
* feature: StorageGateway: ActivateGateway, CreateNFSFileShare and CreateSMBFileShare APIs support a new parameter: Tags (to be attached to the created resource). Output for DescribeNFSFileShare, DescribeSMBFileShare and DescribeGatewayInformation APIs now also list the Tags associated with the resource. Minimum length of a KMSKey is now 7 characters.
* feature: Textract: This release is intended ONLY for customers that are officially part of the Amazon Textract Preview program.  If you are not officially part of the Amazon Textract program THIS WILL NOT WORK.  Our two main regions for Amazon Textract Preview are N. Virginia and Dublin.  Also some members have been added to Oregon and Ohio.  If you are outside of any of these AWS regions, Amazon Textract Preview definitely will not work. If you would like to be part of the Amazon Textract program, you can officially request sign up here - https://pages.awscloud.com/textract-preview.html. To set expectations appropriately, we are aiming to admit new preview participants once a week until General Availability.

## 2.414.0
* feature: MediaPackage: This release adds support for user-defined tagging of MediaPackage resources. Users may now call operations to list, add and remove tags from channels and origin-endpoints. Users can also specify tags to be attached to these resources during their creation. Describe and list operations on these resources will now additionally return any tags associated with them.
* feature: SSM: This release updates AWS Systems Manager APIs to support service settings for AWS customers.  A service setting is a key-value pair that defines how a user interacts with or uses an AWS service, and is typically created and consumed by the AWS service team. AWS customers can read a service setting via GetServiceSetting API and update the setting via UpdateServiceSetting API or ResetServiceSetting API, which are introduced in this release. For example, if an AWS service charges money to the account based on a feature or service usage, then the AWS service team might create a setting with the default value of "false".   This means the user can't use this feature unless they update the setting to "true" and  intentionally opt in for a paid feature.

## 2.413.0
* feature: EC2: This release adds support for modifying instance event start time which allows users to reschedule EC2 events.

## 2.412.0
* bugfix: ComprehendMedical: enable cors on ComprehendMedical, update SERVICES.md
* feature: AlexaForBusiness: This release adds the PutInvitationConfiguration API to configure the user invitation email template with custom attributes, and the GetInvitationConfiguration API to retrieve the configured values.
* feature: ApiGatewayV2: Marking certain properties as explicitly required and fixing an issue with the GetApiMappings operation for ApiMapping resources.
* feature: SSM: AWS Systems Manager State Manager now supports associations using documents shared by other AWS accounts.

## 2.411.0
* feature: CUR: Adding support for Athena and new report preferences to the Cost and Usage Report API.
* feature: MediaConvert: AWS Elemental MediaConvert SDK has added several features including support for: auto-rotation or user-specified rotation of 0, 90, 180, or 270 degrees; multiple output groups with DRM; ESAM XML documents to specify ad insertion points; Offline Apple HLS FairPlay content protection. 
* feature: Pinpoint: This release adds support for the Amazon Resource Groups Tagging API to Amazon Pinpoint, which means that you can now add and manage tags for Amazon Pinpoint projects (apps), campaigns, and segments. A tag is a label that you optionally define and associate with Amazon Pinpoint resource. Tags can help you categorize and manage these types of resources in different ways, such as by purpose, owner, environment, or other criteria. For example, you can use tags to apply policies or automation, or to identify resources that are subject to certain compliance requirements. A project, campaign, or segment can have as many as 50 tags. For more information about using and managing tags in Amazon Pinpoint, see the Amazon Pinpoint Developer Guide at https://docs.aws.amazon.com/pinpoint/latest/developerguide/welcome.html. For more information about the Amazon Resource Group Tagging API, see the Amazon Resource Group Tagging API Reference at https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/Welcome.html.

## 2.410.0
* feature: AutoScaling: Added support for passing an empty SpotMaxPrice parameter to remove a value previously set when updating an Amazon EC2 Auto Scaling group.
* feature: CostExplorer: Added metrics to normalized units.
* feature: ELBv2: This release enables you to use the existing client secret when modifying a rule with an action of type authenticate-oidc.
* feature: MediaStore: This release adds support for access logging, which provides detailed records for the requests that are made to objects in a container.

## 2.409.0
* feature: Athena: This release adds tagging support for Workgroups to Amazon Athena. Use these APIs to add, remove, or list tags on Workgroups, and leverage the tags for various authorization and billing scenarios.
* feature: Cloud9: Adding EnvironmentLifecycle to the Environment data type.
* feature: Glue: AWS Glue adds support for assigning AWS resource tags to jobs, triggers, development endpoints, and crawlers. Each tag consists of a key and an optional value, both of which you define. With this capacity, customers can use tags in AWS Glue to easily organize and identify your resources, create cost allocation reports, and control access to resources. 
* feature: StepFunctions: This release adds support for tag-on-create. You can now add tags when you create AWS Step Functions activity and state machine resources. For more information about tagging, see AWS Tagging Strategies.

## 2.408.0
* feature: CodeBuild: Add support for CodeBuild local caching feature
* feature: KinesisVideoArchivedMedia: In this release, HLS playback of KVS streams can be configured to output MPEG TS fragments using the ContainerFormat parameter. HLS playback of KVS streams can also be configured to include the EXT-X-PROGRAM-DATE-TIME field using the DisplayFragmentTimestamp parameter.
* feature: Transfer: Bug fix: increased the max length allowed for request parameter NextToken when paginating List operations

## 2.407.0
* feature: CodeCommit: This release adds an API for adding / updating / deleting / copying / moving / setting file modes for one or more files directly to an AWS CodeCommit repository without requiring a Git client.
* feature: DirectConnect: Documentation updates for AWS Direct Connect
* feature: MediaLive: This release adds support for VPC inputs, allowing you to push content from your Amazon VPC directly to MediaLive.

## 2.406.0
* feature: DirectoryService: This release adds support for tags during directory creation (CreateDirectory, CreateMicrosoftAd, ConnectDirectory).
* feature: EFS: Amazon EFS now supports adding tags to file system resources as part of the CreateFileSystem API . Using this capability, customers can now more easily enforce tag-based authorization for EFS file system resources.
* feature: Iot: AWS IoT - AWS IoT Device Defender adds support for configuring behaviors in a security profile with statistical thresholds. Device Defender also adds support for configuring multiple data-point evaluations before a violation is either created or cleared.
* feature: SSM: AWS Systems Manager now supports adding tags when creating Activations, Patch Baselines, Documents, Parameters, and Maintenance Windows

## 2.405.0
* feature: Athena: This release adds support for Workgroups to Amazon Athena. Use Workgroups to isolate users, teams, applications or workloads in the same account, control costs by setting up query limits and creating Amazon SNS alarms, and publish query-related metrics to Amazon CloudWatch. 
* feature: SecretsManager: This release increases the maximum allowed size of SecretString or SecretBinary from 4KB to 7KB in the CreateSecret, UpdateSecret, PutSecretValue and GetSecretValue APIs.

## 2.404.0
* feature: ApplicationAutoScaling: Documentation updates for Application Auto Scaling
* feature: Iot: In this release, IoT Device Defender introduces support for tagging Scheduled Audit resources.

## 2.403.0
* feature: EC2: This release adds tagging and ARN support for AWS Client VPN Endpoints.You can now run bare metal workloads on EC2 M5 and M5d instances. m5.metal and m5d.metal instances are powered by custom Intel Xeon Scalable Processors with a sustained all core frequency of up to 3.1 GHz. m5.metal and m5d.metal offer 96 vCPUs and 384 GiB of memory. With m5d.metal, you also have access to 3.6 TB of NVMe SSD-backed instance storage. m5.metal and m5d.metal instances deliver 25 Gbps of aggregate network bandwidth using Elastic Network Adapter (ENA)-based Enhanced Networking, as well as 14 Gbps of bandwidth to EBS.You can now run bare metal workloads on EC2 z1d instances. z1d.metal instances are powered by custom Intel Xeon Scalable Processors with a sustained all core frequency of up to 4.0 GHz. z1d.metal offers 48 vCPUs, 384 GiB of memory, and 1.8 TB of NVMe SSD-backed instance storage. z1d.metal instances deliver 25 Gbps of aggregate network bandwidth using Elastic Network Adapter (ENA)-based Enhanced Networking, as well as 14 Gbps of bandwidth to EBS.
* feature: KinesisVideo: Adds support for Tag-On-Create for Kinesis Video Streams. A list of tags associated with the stream can be created at the same time as the stream creation.

## 2.402.0
* feature: EFS: Customers can now use the EFS Infrequent Access (IA) storage class to more cost-effectively store larger amounts of data in their file systems. EFS IA is cost-optimized storage for files that are not accessed every day. You can create a new file system and enable Lifecycle Management to automatically move files that have not been accessed for 30 days from the Standard storage class to the IA storage class.
* feature: MediaTailor: This release adds support for tagging AWS Elemental MediaTailor resources.
* feature: Rekognition: GetContentModeration now returns the version of the moderation detection model used to detect unsafe content.

## 2.401.0
* feature: AppStream: This update enables customers to find the start time, max expiration time, and connection status associated with AppStream streaming session.
* feature: CodeBuild: Add customized webhook filter support
* feature: MediaPackage: Adds optional configuration for DASH to compact the manifest by combining duplicate SegmentTemplate tags. Adds optional configuration for DASH SegmentTemplate format to refer to segments by "Number" (default) or by "Time".

## 2.400.0
* feature: DLM: This release is to correct the timestamp format to ISO8601 for the DateCreated and DateModified files in the GetLifecyclePolicy response object.
* feature: ECS: Amazon ECS introduces the PutAccountSettingDefault API, an API that allows a user to set the default ARN/ID format opt-in status for all the roles and users in the account. Previously, setting the account's default opt-in status required the use of the root user with the PutAccountSetting API.

## 2.399.0
* feature: ES: Feature: Support for three Availability Zone deployments
* feature: GameLift: This release delivers a new API action for deleting unused matchmaking rule sets. More details are available at https://aws.amazon.com/releasenotes/?tag=releasenotes%23keywords%23amazon-gamelift.
* feature: MediaLive: This release adds tagging of channels, inputs, and input security groups.
* feature: RoboMaker: Added support for tagging and tag-based access control for AWS RoboMaker resources. Also, DescribeSimulationJob now includes a new failureReason field to help debug simulation job failures

## 2.398.0
* feature: EC2: Add Linux with SQL Server Standard, Linux with SQL Server Web, and Linux with SQL Server Enterprise to the list of allowed instance platforms for On-Demand Capacity Reservations.
* feature: FSx: New optional ExportPath parameter added to the CreateFileSystemLustreConfiguration object for user-defined export paths. Used with the CreateFileSystem action when creating an Amazon FSx for Lustre file system.

## 2.397.0
* feature: EC2: ec2.DescribeVpcPeeringConnections pagination support
* feature: Shield: The DescribeProtection request now accepts resource ARN as valid parameter.

## 2.396.0
* feature: CodeCommit: This release supports a more graceful handling of the error case when a repository is not associated with a pull request ID in a merge request in AWS CodeCommit.
* feature: ECS: This release of Amazon Elastic Container Service (Amazon ECS) introduces support for GPU workloads by enabling you to create clusters with GPU-enabled container instances.
* feature: WorkSpaces: This release sets ClientProperties as a required parameter.

## 2.395.0
* feature: CodeCommit: The PutFile API will now throw new exception FilePathConflictsWithSubmodulePathException when a submodule exists at the input file path; PutFile API will also throw FolderContentSizeLimitExceededException when the total size of any folder on the path exceeds the limit as a result of the operation.
* feature: DeviceFarm: Introduces a new rule in Device Pools - "Availability". Customers can now ensure they pick devices that are available (i.e., not being used by other customers).
* feature: MediaConnect: This release adds support for tagging, untagging, and listing tags for existing AWS Elemental MediaConnect resources.
* feature: MediaLive: This release adds support for Frame Capture output groups and for I-frame only manifests (playlists) in HLS output groups.

## 2.394.0
* feature: CodeBuild: This release adds support for cross-account ECR images and private registry authentication. 
* feature: ECR: Amazon ECR updated the default endpoint URL to support AWS Private Link.
* feature: ELBv2: Elastic Load Balancing now supports TLS termination on Network Load Balancers. With this launch, you can offload the decryption/encryption of TLS traffic from your application servers to the Network Load Balancer. This enables you to run your backend servers optimally and keep your workloads secure. Additionally, Network Load Balancers preserve the source IP of the clients to the back-end applications, while terminating TLS on the load balancer.  When TLS is enabled on an NLB, Access Logs can be enabled for the load balancer, and log entries will be emitted for all TLS connections.
* feature: PinpointSMSVoice: Added the ListConfigurationSets operation, which returns a list of the configuration sets that are associated with your account.
* feature: RDS: The Amazon RDS API allows you to add or remove Identity and Access Management (IAM) role associated with a specific feature name with an RDS database instance. This helps with capabilities such as invoking Lambda functions from within a trigger in the database, load data from Amazon S3 and so on

## 2.393.0
* bugfix: S3 managed uploader: S3 managed uploader will not uriEscape tags when doing a multi-part upload.
* feature: ACMPCA: Added TagOnCreate parameter to the CreateCertificateAuthority operation, updated the Tag regex pattern to align with AWS tagging APIs, and added RevokeCertificate limit.
* feature: ApiGatewayManagementApi: Fixes a typo in the 'max' constraint.
* feature: WorkLink: This is the initial SDK release for Amazon WorkLink. Amazon WorkLink is a fully managed, cloud-based service that enables secure, one-click access to internal websites and web apps from mobile phones. With Amazon WorkLink, employees can access internal websites as seamlessly as they access any other website. IT administrators can manage users, devices, and domains by enforcing their own security and access policies via the AWS Console or the AWS SDK.

## 2.392.0
* feature: AppStream: This API update includes support for tagging Stack, Fleet, and ImageBuilder resources at creation time.
* feature: DMS: Update for DMS TestConnectionSucceeds waiter
* feature: Discovery: The Application Discovery Service's import APIs allow you to import information about your on-premises servers and applications into ADS so that you can track the status of your migrations through the Migration Hub console.
* feature: FMS: This release provides support for cleaning up web ACLs during Firewall Management policy deletion. You can now enable the DeleteAllPolicyResources flag and it will delete all system-generated web ACLs.
* feature: SSM: AWS Systems Manager State Manager now supports configuration management of all AWS resources through integration with Automation. 

## 2.391.0
* feature: EC2: Adjust EC2's available instance types.
* feature: Glue: AllocatedCapacity field is being deprecated and replaced with MaxCapacity field

## 2.390.0
* feature: Lightsail: This release adds functionality to the CreateDiskSnapshot API that allows users to snapshot instance root volumes. It also adds various documentation updates.
* feature: Pinpoint: This release updates the PutEvents operation. AppPackageName, AppTitle, AppVersionCode, SdkName fields will now be accepted as a part of the event when submitting events.
* feature: Rekognition: GetLabelDetection now returns bounding box information for common objects and a hierarchical taxonomy of detected labels. The version of the model used for video label detection is also returned. DetectModerationLabels now returns the version of the model used for detecting unsafe content.
* feature: credentials: make resolvedProfile cached inenumerable

## 2.389.0
* feature: Backup: AWS Backup is a unified backup service designed to protect AWS services and their associated data. AWS Backup simplifies the creation, migration, restoration, and deletion of backups, while also providing reporting and auditing
* feature: DynamoDB: Amazon DynamoDB now integrates with AWS Backup, a centralized backup service that makes it easy for customers to configure and audit the AWS resources they want to backup, automate backup scheduling, set retention policies, and monitor all recent backup and restore activity. AWS Backup provides a fully managed, policy-based backup solution, simplifying your backup management, and helping you meet your business and regulatory backup compliance requirements. For more information, see the Amazon DynamoDB Developer Guide.

## 2.388.0
* feature: MediaConvert: IMF decode from a Composition Playlist for IMF specializations App #2 and App #2e; up to 99 input clippings; caption channel selection for MXF; and updated rate control for CBR jobs. Added support for acceleration in preview
* feature: StorageGateway: JoinDomain API supports two more  parameters: organizational unit(OU) and domain controllers.  Two new APIs are introduced: DetachVolume and AttachVolume.

## 2.387.0
* feature: RDSDataService: Documentation updates for RDS Data API.
* feature: client side monitoring: Add a new environmental variable AWS_ENDPOINT_DISCOVERY_ENABLED to work along with AWS_ENABLE_ENDPOINT_DISCOVERY
* feature: client side monitoring: CSM now can be enabled globally only from environment without code change

## 2.386.0
* feature: EC2: EC2 Spot: a) CreateFleet support for Single AvailabilityZone requests and b) support for paginated DescribeSpotInstanceRequests.
* feature: Iot: This release adds tagging support for rules of AWS IoT Rules Engine. Tags enable you to categorize your rules in different ways, for example, by purpose, owner, or environment. For more information about tagging, see AWS Tagging Strategies (https://aws.amazon.com/answers/account-management/aws-tagging-strategies/). For technical documentation, look for the tagging operations in the AWS IoT Core API reference or User Guide (https://docs.aws.amazon.com/iot/latest/developerguide/tagging-iot.html).
* feature: SageMaker: SageMaker Training Jobs now support Inter-Container traffic encryption.

## 2.385.0
* feature: DocDB: Amazon DocumentDB (with MongoDB compatibility) is a fast, reliable, and fully-managed database service. Amazon DocumentDB makes it easy for developers to set up, run, and scale MongoDB-compatible databases in the cloud.
* feature: Redshift: DescribeSnapshotSchedules returns a list of snapshot schedules. With this release, this API will have a list of clusters and number of clusters associated with the schedule.
* feature: s3: Improved sigv4 documentation on getSignedUrl operation

## 2.384.0
* feature: DeviceFarm: "This release provides support for running Appium Node.js and Appium Ruby tests on AWS Device Farm.

## 2.383.0
* bugfix: credentials: Make CredentialProviderChain coalesce resolvation synchronous
* bugfix: typings: update Attribute value to any for transaction operations input and output
* feature: IoTAnalytics: ListDatasetContents now has a filter to limit results by date scheduled.
* feature: MediaStoreData: enable cors to make MediaStoreData available in default browser build

## 2.382.0
* bugfix: CredentailProviderChain: CredentialProviderChain.resolve now coalesces calls, so that concurrent requests for a service instance which has yet to resolve credentials will not result in a stampede to assign config.credentials
* bugfix: documentation: swap abstract Yard tag for custom tags to support compatibility with google-closure-compiler
* feature: ACMPCA: This release marks the introduction of waiters in ACM PCA, which allow you to control the progression of your code based on the presence or state of certain resources. Waiters can be implemented in the DescribeCertificateAuthorityAuditReport, GetCertificate, and GetCertificateAuthorityCsr API operations.
* feature: DynamoDB: Added provisionedThroughPut exception on the request level for transaction APIs.
* feature: EC2MetadataCredentials: refresh now passes an error to callback if metadata service responds with expired credentials
* feature: PinpointSMSVoice: Configuration sets can now use Amazon SNS as an event destination.
* feature: StepFunctions: This release adds support for cost allocation tagging. You can now create, delete, and list tags for AWS Step Functions activity and state machine resources. For more information about tagging, see AWS Tagging Strategies.

## 2.381.0
* bugfix: S3: fix putObject using stream <1mb
* feature: CognitoIdentityServiceProvider: Amazon Cognito now has API support for updating the Secure Sockets Layer (SSL) certificate for the custom domain for your user pool.
* feature: Comprehend: This SDK release adds functionality to stop training Custom Document Classifier or Custom Entity Recognizer in Amazon Comprehend.
* feature: Firehose: Support for specifying customized s3 keys and supplying a separate prefix for failed-records
* feature: KinesisVideoMedia: enable cors to make KinesisVideoMedia available by default in browser build
* feature: MediaLive: This release provides support for ID3 tags and video quality setting for subgop_length.
* feature: TranscribeService: With this release, Amazon Transcribe now supports transcriptions from audio sources in Italian (it-IT).

## 2.380.0
* feature: EC2: This release adds support for specifying partition as a strategy for EC2 Placement Groups. This new strategy allows one to launch instances into partitions that do not share certain underlying hardware between partitions, to assist with building and deploying highly available replicated applications. 
* feature: SageMaker: Batch Transform Jobs now supports TFRecord as a Split Type. ListCompilationJobs API action now supports SortOrder and SortBy inputs.
* feature: WAF: This release adds rule-level control for rule group. If a rule group contains a rule that blocks legitimate traffic, previously you had to override the entire rule group to COUNT in order to allow the traffic. You can now use the UpdateWebACL API to exclude specific rules within a rule group. Excluding rules changes the action for the individual rules to COUNT. Excluded rules will be recorded in the new "excludedRules" attribute of the WAF logs.
* feature: WAFRegional: This release adds rule-level control for rule group. If a rule group contains a rule that blocks legitimate traffic, previously you had to override the entire rule group to COUNT in order to allow the traffic. You can now use the UpdateWebACL API to exclude specific rules within a rule group. Excluding rules changes the action for the individual rules to COUNT. Excluded rules will be recorded in the new "excludedRules" attribute of the WAF logs.

## 2.379.0
* bugfix: S3: fix fo #2418, putObject with key as substring of bucket results in extra folder
* feature: ApiGatewayManagementApi: This is the initial SDK release for the Amazon API Gateway Management API, which allows you to directly manage runtime aspects of your APIs. This release makes it easy to send data directly to clients connected to your WebSocket-based APIs.
* feature: ApiGatewayV2: This is the initial SDK release for the Amazon API Gateway v2 APIs. This SDK will allow you to manage and configure APIs in Amazon API Gateway; this first release provides the capabilities that allow you to programmatically setup and manage WebSocket APIs end to end. 
* feature: EC2: Client VPN, is a client-based VPN service. With Client VPN, you can securely access resources in AWS as well as access resources in on-premises from any location using OpenVPN based devices. With Client VPN, you can set network based firewall rules that can restrict access to networks based on Active Directory groups.
* feature: ElasticBeanstalk: This release adds a new resource that Elastic Beanstalk will soon support, EC2 launch template, to environment resource descriptions.

## 2.378.0
* feature: ECR: This release adds support for ECR repository tagging.
* feature: QuickSight: Amazon QuickSight's RegisterUser API now generates a user invitation URL when registering a user with the QuickSight identity type. This URL can then be used by the registered QuickSight user to complete the user registration process. This release also corrects some HTTP return status codes.

## 2.377.0
* feature: AlexaForBusiness: Released new APIs for managing private skill access to Enrolled Users.  These API's are the equivalent of the A4B console for Private Skills checkbox "Available for Users".
* feature: Comprehend: enable cors

## 2.376.0
* feature: PinpointEmail: This release adds new operations for the Amazon Pinpoint Deliverability Dashboard. You can use the Deliverability Dashboard to view response and inbox placement metrics for the domains that you use to send email. You can also perform tests on individual email messages to determine how often your messages are delivered to the inbox on several major email providers.

## 2.375.0
* feature: EKS: Added support for updating kubernetes version of Amazon EKS clusters.
* feature: Glue: API Update for Glue: this update enables encryption of password inside connection objects stored in AWS Glue Data Catalog using DataCatalogEncryptionSettings.  In addition, a new "HidePassword" flag is added to GetConnection and GetConnections to return connections without passwords.
* feature: Route53: You can now specify a new region, eu-north-1 (in Stockholm, Sweden), as a region for latency-based or geoproximity routing.
* feature: SageMaker: Amazon SageMaker Automatic Model Tuning now supports early stopping of training jobs. With early stopping, training jobs that are unlikely to generate good models will be automatically stopped during a Hyperparameter Tuning Job.

## 2.374.0
* feature: Connect: This update adds the GetContactAttributes operation to retrieve the attributes associated with a contact.
* feature: MediaStore: This release adds Delete Object Lifecycling to AWS MediaStore Containers.

## 2.373.0
* feature: AlexaForBusiness: Alexa for Business now allows IT administrators to create ad-hoc or scheduled usage reports, which help customers understand how Alexa is used in their workplace. To learn how to create usage reports, see https://docs.aws.amazon.com/a4b/latest/ag/creating-reports.html
* feature: DynamoDB: Add DynamoDB document client support for transaction operations
* feature: EC2: You can now launch the larger-sized P3dn.24xlarge instance that features NVIDIA Tesla V100s with double the GPU memory, 100Gbps networking and local NVMe storage.
* feature: IAM: We are making it easier for you to manage your AWS Identity and Access Management (IAM) policy permissions by enabling you to retrieve the last timestamp when an IAM entity (e.g., user, role, or a group) accessed an AWS service. This feature also allows you to audit service access for your entities.

## 2.372.0
* feature: CodeBuild: Support personal access tokens for GitHub source and app passwords for Bitbucket source
* feature: ELBv2: This release allows Application Load Balancers to route traffic to Lambda functions, in addition to instances and IP addresses.
* feature: MediaLive: This release enables the AWS Elemental MediaConnect input type in AWS Elemental MediaLive. This can then be used to automatically create and manage AWS Elemental MediaConnect Flow Outputs when you create a channel using those inputs.

## 2.371.0
* feature: CostExplorer: Add normalized unit support for both GetReservationUtilization and GetReservationCoverage API.
* feature: MQ: This release adds support for cost allocation tagging. You can now create, delete, and list tags for AmazonMQ resources. For more information about tagging, see AWS Tagging Strategies.
* feature: MediaTailor: AWS Elemental MediaTailor SDK now includes a new parameter to control the Location tag of DASH manifests.

## 2.370.0
* feature: Health: AWS Health API DescribeAffectedEntities operation now includes a field that returns the URL of the affected entity.
* feature: S3: S3 Inventory reports can now be generated in Parquet format by setting the Destination Format to be 'Parquet'.

## 2.369.0
* feature: DeviceFarm: Customers can now schedule runs without a need to create a Device Pool. They also get realtime information on public device availability.
* feature: StorageGateway: API list-local-disks returns a list of the gateway's local disks. This release adds a field DiskAttributeList to these disks.

## 2.368.0
* bugfix: md5: enable SDK to calculate content MD5 for more new S3 operations
* feature: S3: Fixed issue with Content-MD5 for S3 PutObjectLegalHold, PutObjectRetention and PutObjectLockConfiguration.

## 2.367.0
* feature: CloudWatchEvents: Support for Managed Rules (rules that are created and maintained by the AWS services in your account) is added.
* feature: ELBv2: This release allows Application Load Balancers to route traffic to Lambda functions, in addition to instances and IP addresses.
* feature: Kafka: This is the initial SDK release for Amazon Managed Streaming for Kafka (Amazon MSK). Amazon MSK is a service that you can use to easily build, monitor, and manage Apache Kafka clusters in the cloud.
* feature: Lambda: AWS Lambda now supports Lambda Layers and Ruby as a runtime. Lambda Layers are a new type of artifact that contains arbitrary code and data, and may be referenced by zero, one, or more functions at the same time.  You can also now develop your AWS Lambda function code using the Ruby programming language.
* feature: S3: Fixed issue with ObjectLockRetainUntilDate in S3 PutObject
* feature: ServerlessApplicationRepository: AWS Serverless Application Repository now supports nested applications. You can nest individual applications as components of a larger application to make it easy to assemble and deploy new serverless architectures. 
* feature: StepFunctions: AWS Step Functions is now integrated with eight additional AWS services: Amazon ECS, AWS Fargate, Amazon DynamoDB, Amazon SNS, Amazon SQS, AWS Batch, AWS Glue, and Amazon SageMaker. To learn more, please see https://docs.aws.amazon.com/step-functions/index.html
* feature: XRay: GetTraceSummaries - Now provides additional information regarding your application traces such as Availability Zone, Instance ID, Resource ARN details, Revision, Entry Point, Root Cause Exceptions and Root Causes for Fault, Error and Response Time.

## 2.366.0
* feature: AppMesh: AWS App Mesh is a service mesh that makes it easy to monitor and control communications between microservices of an application. AWS App Mesh APIs are available for preview in eu-west-1, us-east-1, us-east-2, and us-west-2 regions.
* feature: EC2: Adds the following updates: 1. You can now hibernate and resume Amazon-EBS backed instances using the StopInstances and StartInstances APIs. For more information about using this feature and supported instance types and operating systems, visit the user guide. 2. Amazon Elastic Inference accelerators are resources that you can attach to current generation EC2 instances to accelerate your deep learning inference workloads. With Amazon Elastic Inference, you can configure the right amount of inference acceleration to your deep learning application without being constrained by fixed hardware configurations and limited GPU selection. 3. AWS License Manager makes it easier to manage licenses in AWS and on premises when customers run applications using existing licenses from a variety of software vendors including Microsoft, SAP, Oracle, and IBM.
* feature: LicenseManager: AWS License Manager makes it easier to manage licenses in AWS and on premises when customers run applications using existing licenses from a variety of software vendors including Microsoft, SAP, Oracle, and IBM. AWS License Manager automatically tracks and controls license usage once administrators have created and enforced rules that emulate the terms of their licensing agreements. The capabilities of AWS License Manager are available through SDK and Tools, besides the management console and CLI.
* feature: Lightsail: This update adds the following features: 1. Copy instance and disk snapshots within the same AWS Region or from one region to another in Amazon Lightsail. 2. Export Lightsail instance and disk snapshots to Amazon Elastic Compute Cloud (Amazon EC2). 3. Create an Amazon EC2 instance from an exported Lightsail instance snapshot using AWS CloudFormation stacks. 4. Apply tags to filter your Lightsail resources, or organize your costs, or control access.
* feature: SageMaker: Amazon SageMaker now has Algorithm and Model Package entities that can be used to create Training Jobs, Hyperparameter Tuning Jobs and hosted Models. Subscribed Marketplace products can be used on SageMaker to create Training Jobs, Hyperparameter Tuning Jobs and Models. Notebook Instances and Endpoints can leverage Elastic Inference accelerator types for on-demand GPU computing. Model optimizations can be performed with Compilation Jobs. Labeling Jobs can be created and supported by a Workforce. Models can now contain up to 5 containers allowing for inference pipelines within Endpoints. Code Repositories (such as Git) can be linked with SageMaker and loaded into Notebook Instances. Network isolation is now possible on Models, Training Jobs, and Hyperparameter Tuning Jobs, which restricts inbound/outbound network calls for the container. However, containers can talk to their peers in distributed training mode within the same security group. A Public Beta Search API was added that currently supports Training Jobs.
* feature: ServiceDiscovery: AWS Cloud Map lets you define friendly names for your cloud resources so that your applications can quickly and dynamically discover them. When a resource becomes available (for example, an Amazon EC2 instance running a web server), you can register a Cloud Map service instance. Then your application can discover service instances by submitting DNS queries or API calls.

## 2.365.0
* feature: DynamoDB: Amazon DynamoDB now supports the following features: DynamoDB on-demand and transactions. DynamoDB on-demand is a flexible new billing option for DynamoDB capable of serving thousands of requests per second without capacity planning. DynamoDB on-demand offers simple pay-per-request pricing for read and write requests so that you only pay for what you use, making it easy to balance costs and performance. Transactions simplify the developer experience of making coordinated, all-or-nothing changes to multiple items both within and across tables. The new transactional APIs provide atomicity, consistency, isolation, and durability (ACID) in DynamoDB, helping developers support sophisticated workflows and business logic that requires adding, updating, or deleting multiple items using native, server-side transactions. For more information, see the Amazon DynamoDB Developer Guide.
* feature: FSx: Amazon FSx provides fully-managed third-party file systems optimized for a variety of enterprise and compute-intensive workloads.
* feature: RDS: Amazon Aurora Global Database. This release introduces support for Global Database, a feature that allows a single Amazon Aurora database to span multiple AWS regions. Customers can use the feature to replicate data with no impact on database performance, enable fast local reads with low latency in each region, and improve disaster recovery from region-wide outages. You can create, modify and describe an Aurora Global Database, as well as add or remove regions from your Global Database.
* feature: SecurityHub: AWS Security Hub is a security and compliance center that correlates AWS security findings and performs automated compliance checks

## 2.364.0
* feature: CloudWatchLogs: Six new APIs added to support CloudWatch Logs Insights. The APIs are StartQuery, StopQuery, GetQueryResults, GetLogRecord, GetLogGroupFields, and DescribeQueries.
* feature: CodeDeploy: Support for Amazon ECS service deployment - AWS CodeDeploy now supports the deployment of Amazon ECS services. An Amazon ECS deployment uses an Elastic Load Balancer, two Amazon ECS target groups, and a listener to reroute production traffic from your Amazon ECS service's original task set to a new replacement task set. The original task set is terminated when the deployment is complete. Success of a deployment can be validated using Lambda functions that are referenced by the deployment. This provides the opportunity to rollback if necessary. You can use the new ECSService, ECSTarget, and ECSTaskSet data types in the updated SDK to create or retrieve an Amazon ECS deployment.
* feature: ComprehendMedical: The first release of Comprehend Medical includes two APIs, detectPHI and detectEntities. DetectPHI extracts PHI from your clinical text, and detectEntities extracts entities such as medication, medical conditions, or anatomy. DetectEntities also extracts attributes (e.g. dosage for medication) and identifies contextual traits (e.g. negation) for each entity.
* feature: EC2: With VPC sharing, you can now allow multiple accounts in the same AWS Organization to launch their application resources, like EC2 instances, RDS databases, and Redshift clusters into shared, centrally managed VPCs.
* feature: ECS: This release of Amazon Elastic Container Service (Amazon ECS) introduces support for blue/green deployment feature. Customers can now update their ECS services in a blue/green deployment pattern via using AWS CodeDeploy.
* feature: KinesisAnalytics: Improvements to error messages, validations, and more to the Kinesis Data Analytics APIs.
* feature: KinesisAnalyticsV2: Amazon Kinesis Data Analytics now supports Java-based stream processing applications, in addition to the previously supported SQL. Now, you can use your own Java code in Amazon Kinesis Data Analytics to build and run stream processing applications. This new capability also comes with an update to the previous Amazon Kinesis Data Analytics APIs to enable support for different runtime environments and more.
* feature: MarketplaceMetering: RegisterUsage operation added to AWS Marketplace Metering Service, allowing sellers to meter and entitle Docker container software use with AWS Marketplace. For details on integrating Docker containers with RegisterUsage see: https://docs.aws.amazon.com/marketplace/latest/userguide/entitlement-and-metering-for-paid-products.html
* feature: MediaConnect: This is the initial release for AWS Elemental MediaConnect, an ingest and transport service for live video. This new AWS service allows broadcasters and content owners to send high-value live content into the cloud, securely transmit it to partners for distribution, and replicate it to multiple destinations around the globe.
* feature: Translate: This release includes the new custom terminology feature. Using custom terminology with your translation requests enables you to make sure that your brand names, character names, model names, and other unique content is translated exactly the way you need it, regardless of its context and the Amazon Translate algorithm's decision. See the documentation for more information.

## 2.363.0
* feature: EC2: Adds the following updates: 1. Transit Gateway helps easily scale connectivity across thousands of Amazon VPCs, AWS accounts, and on-premises networks. 2. Amazon EC2 A1 instance is a new Arm architecture based general purpose instance. 3. You can now launch the new Amazon EC2 compute optimized C5n instances that can utilize up to 100 Gbps of network bandwidth.
* feature: GlobalAccelerator: AWS Global Accelerator is a network layer service that helps you improve the availability and performance of the applications that you offer to your global customers. Global Accelerator uses the AWS global network to direct internet traffic from your users to your applications running in AWS Regions. Global Accelerator creates a fixed entry point for your applications through static anycast IP addresses, and routes user traffic to the optimal endpoint based on performance, application health and routing policies that you can configure. Global Accelerator supports the following features at launch: static anycast IP addresses, support for TCP and UDP, support for Network Load Balancers, Application Load Balancers and Elastic-IP address endpoints,  continuous health checking, instant regional failover, fault isolating Network Zones, granular traffic controls, and client affinity.
* feature: Greengrass: Support Greengrass Connectors and allow Lambda functions to run without Greengrass containers.
* feature: IoTAnalytics: Added an optional list of dataset content delivery configuration for CreateDataset and UpdateDataset. DescribeDataset will now include the list of delivery configuration, and will be an empty array if none exist.
* feature: Iot: As part of this release, we are extending capability of AWS IoT Rules Engine to support IoT Events rule action. The IoT Events rule action lets you send messages from IoT sensors and applications to IoT Events for pattern recognition and event detection.
* feature: KMS: AWS Key Management Service (KMS) now enables customers to create and manage dedicated, single-tenant key stores in addition to the default KMS key store. These are known as custom key stores and are deployed using AWS CloudHSM clusters. Keys that are created in a KMS custom key store can be used like any other customer master key in KMS.
* feature: S3: Four new Amazon S3 Glacier features help you reduce your storage costs by making it even easier to build archival applications using the Amazon S3 Glacier storage class. S3 Object Lock enables customers to apply Write Once Read Many (WORM) protection to objects in S3 in order to prevent object deletion for a customer-defined retention period. S3 Inventory now supports fields for reporting on S3 Object Lock. "ObjectLockRetainUntilDate", "ObjectLockMode", and "ObjectLockLegalHoldStatus" are now available as valid optional fields.
* feature: SMS: In this release, AWS Server Migration Service (SMS) has added multi-server migration support to simplify the application migration process. Customers can migrate all their application-specific servers together as a single unit as opposed to moving individual server one at a time. The new functionality includes - 1. Ability to group on-premises servers into applications and application tiers. 2. Auto-generated CloudFormation Template and Stacks for launching migrated servers into EC2. 3. Ability to run post-launch configuration scripts to configure servers and applications in EC2. In order for SMS to launch servers into your AWS account using CloudFormation Templates, we have also updated the ServerMigrationServiceRole IAM policy to include appropriate permissions. Refer to Server Migration Service documentation for more details. 

## 2.362.0
* bugfix: Config: fix useDualstack typing
* feature: Amplify: Release of AWS Amplify: Everything you need to develop & deploy cloud-powered mobile and web apps.
* feature: DataSync: AWS DataSync simplifies, automates, and accelerates moving and replicating data between on-premises storage and AWS services over the network.
* feature: RoboMaker: (New Service) AWS RoboMaker is a service that makes it easy to develop, simulate, and deploy intelligent robotics applications at scale. 
* feature: S3: The INTELLIGENT_TIERING storage class is designed to optimize storage costs by automatically moving data to the most cost effective storage access tier, without performance impact or operational overhead. This SDK release provides API support for this new storage class.
* feature: Snowball: AWS announces the availability of AWS Snowball Edge Compute Optimized to run compute-intensive applications is disconnected and physically harsh environments. It comes with 52 vCPUs, 208GB memory, 8TB NVMe SSD, and 42TB S3-compatible storage to accelerate local processing and is well suited for use cases such as full motion video processing, deep IoT analytics, and continuous machine learning in bandwidth-constrained locations. It features new instances types called SBE-C instances that are available in eight sizes and multiple instances can be run on the device at the same time. Optionally, developers can choose the compute optimized device to include a GPU and use SBE-G instances for accelerating their application performance. 
* feature: Transfer: AWS Transfer for SFTP is a fully managed service that enables transfer of secure data over the internet into and out of Amazon S3. SFTP is deeply embedded in data exchange workflows across different industries such as financial services, healthcare, advertising, and retail, among others.
* feature: protocol: Add support for 'endpoint' trait in API operation model

## 2.361.0
* feature: Rekognition: This release updates the DetectFaces and IndexFaces operation. When the Attributes input parameter is set to ALL, the face location landmarks includes 5 new landmarks: upperJawlineLeft, midJawlineLeft, chinBottom, midJawlineRight, upperJawlineRight.

## 2.360.0
* feature: AppSync: AWS AppSync now supports: 1. Pipeline Resolvers - Enables execution of one or more operations against multiple data sources in order, on a single GraphQL field. This allows orchestration of actions by composing code into a single Resolver, or share code across Resolvers.  2. Aurora Serverless Data Source - Built-in resolver for executing GraphQL operations with the new Aurora Serverless Data API, including connection management functionality.
* feature: AutoScalingPlans: In this release, AWS Auto Scaling adds three features: 1) Predictive scaling for EC2 Auto Scaling, which analyzes your application workload history to forecast future capacity requirements, 2) an option to replace existing scaling policies that are associated with the resources in your scaling plan, and 3) an option that allows you to use predictive scaling with or without your plan's dynamic scaling feature.
* feature: CloudFront: With Origin Failover capability in CloudFront, you can setup two origins for your distributions - primary and secondary, such that your content is served from your secondary origin if CloudFront detects that your primary origin is unavailable. These origins can be any combination of AWS origins or non-AWS custom HTTP origins. For example, you can have two Amazon S3 buckets that serve as your origin that you independently upload your content to. If an object that CloudFront requests from your primary bucket is not present or if connection to your primary bucket times-out, CloudFront will request the object from your secondary bucket. So, you can configure CloudFront to trigger a failover in response to either HTTP 4xx or 5xx status codes.
* feature: CloudWatch: Amazon CloudWatch now supports alarms on metric math expressions.
* feature: DeviceFarm: Disabling device filters
* feature: MediaLive: You can now include the media playlist(s) from both pipelines in the HLS master manifest for seamless failover.
* feature: QuickSight: Amazon QuickSight is a fully managed, serverless, cloud business intelligence system that allows you to extend data and insights to every user in your organization. The first release of APIs for Amazon QuickSight introduces embedding and user/group management capabilities. The get-dashboard-embed-url API allows you to obtain an authenticated dashboard URL that can be embedded in application domains whitelisted for QuickSight dashboard embedding. User APIs allow you to programmatically expand and manage your QuickSight deployments while group APIs allow easier permissions management for resources within QuickSight.
* feature: RDSDataService: The RDS Data API Beta is available for the MySQL-compatible edition of Amazon Aurora Serverless in the US East (N. Virginia) Region. This API enables you to easily access Aurora Serverless with web services-based applications including AWS Lambda and AWS AppSync.
* feature: SSM: AWS Systems Manager Distributor helps you securely distribute and install software packages.
* feature: XRay: Groups build upon X-Ray filter expressions to allow for fine tuning trace summaries and service graph results. You can configure groups by using the AWS X-Ray console or by using the CreateGroup API. The addition of groups has extended the available request fields to the GetServiceGraph API. You can now specify a group name or group ARN to retrieve its service graph.

## 2.359.0
* feature: Batch: Adding multinode parallel jobs, placement group support for compute environments.
* feature: CloudFormation: Use the CAPABILITY_AUTO_EXPAND capability to create or update a stack directly from a stack template that contains macros, without first reviewing the resulting changes in a change set first.
* feature: CloudTrail: This release supports creating a trail in CloudTrail that logs events for all AWS accounts in an organization in AWS Organizations. This helps enable you to define a uniform event logging strategy for your organization. An organization trail is applied automatically to each account in the organization and cannot be modified by member accounts. To learn more, please see the AWS CloudTrail User Guide https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html
* feature: ConfigService: In this release, AWS Config adds support for aggregating the configuration data of AWS resources into multi-account and multi-region aggregators. AWS Config adds four APIs to query and retrieve aggregated resource configurations. 1) BatchGetAggregateResourceConfig, returns the current configuration items for resources that are present in your AWS Config aggregator. 2) GetAggregateDiscoveredResourceCounts, returns the resource counts across accounts and regions that are present in your AWS Config aggregator. 3) GetAggregateResourceConfig, returns current configuration item that is aggregated for your specific resource in a specific source account and region. 4) ListAggregateDiscoveredResources, accepts a resource type and returns a list of resource identifiers that are aggregated for a specific resource type across accounts and regions.
* feature: DeviceFarm: Customers can now schedule runs without a need to create a Device Pool. They also get realtime information on public device availability.
* feature: EC2: Adding AvailabilityZoneId to DescribeAvailabilityZones
* feature: Iot: IoT now supports resource tagging and tag based access control for Billing Groups, Thing Groups, Thing Types, Jobs, and Security Profiles. IoT Billing Groups help you group devices to categorize and track your costs. AWS IoT Device Management also introduces three new features: 1. Dynamic thing groups. 2. Jobs dynamic rollouts. 3. Device connectivity indexing. Dynamic thing groups lets you to create a group of devices using a Fleet Indexing query. The devices in your group will be automatically added or removed when they match your specified query criteria. Jobs dynamic rollout allows you to configure an exponentially increasing rate of deployment for device updates and define failure criteria to cancel your job. Device connectivity indexing allows you to index your devices' lifecycle events to discover whether devices are connected or disconnected to AWS IoT.
* feature: Lambda: AWS Lambda now supports python3.7 and  the Kinesis Data Streams (KDS) enhanced fan-out and HTTP/2 data retrieval features for Kinesis event sources.
* feature: MediaConvert: AWS Elemental MediaConvert SDK has added several features including support for: SPEKE full document encryption, up to 150 elements for input stitching, input and motion image insertion, AWS CLI path arguments in S3 links including special characters, AFD signaling, additional caption types, and client-side encrypted input files.
* feature: RDS: This release adds a new parameter to specify VPC security groups for restore from DB snapshot, restore to point int time and create read replica operations. For more information, see Amazon RDS Documentation.
* feature: WorkDocs: With this release, clients can now use the GetResources API to fetch files and folders from the user's SharedWithMe collection. And also through this release, the existing DescribeActivities API has been enhanced to support additional filters such as the ActivityType and the ResourceId.
* feature: WorkSpaces: Added new APIs to Modify and Describe WorkSpaces client properties for users in a directory. With the new APIs, you can enable/disable remember me option in WorkSpaces client for users in a directory.

## 2.358.0
* feature: Comprehend: Amazon Comprehend Custom Entities automatically trains entity recognition models using your entities and noun-based phrases. 
* feature: CostExplorer: This release introduces a new operation called GetCostForecast operation, which allows you to programmatically access AWS Cost Explorer's forecasting engine and is now generally available.
* feature: ECS: This release of Amazon Elastic Container Service (Amazon ECS) introduces support for additional Docker flags as Task Definition parameters. Customers can now configure their ECS Tasks to use pidMode (pid) and ipcMode (ipc) Docker flags.
* feature: SSM: AWS Systems Manager Automation now allows you to execute and manage Automation workflows across multiple accounts and regions. 
* feature: WorkSpaces: Added new Bring Your Own License (BYOL) automation APIs. With the new APIs, you can list available management CIDR ranges for dedicated tenancy, enable your account for BYOL, describe BYOL status of your account, and import BYOL images. Added new APIs to also describe and delete WorkSpaces images. 

## 2.357.0
* feature: CodeBuild: Adding queue phase and configurable queue timeout to CodeBuild.
* feature: Comprehend: Amazon Comprehend Custom Classification automatically trains classification models using your text and custom labels.
* feature: DMS: Settings structures have been added to our DMS endpoint APIs to support Kinesis and Elasticsearch as targets. We are introducing the ability to configure custom DNS name servers on a replication instance as a beta feature. 
* feature: DirectConnect: This release enables DirectConnect customers to have logical redundancy on virtual interfaces within supported DirectConnect locations.
* feature: ECS: In this release, Amazon ECS introduces multiple features. First, ECS now supports integration with Systems Manager Parameter Store for injecting runtime secrets. Second, ECS introduces support for resources tagging. Finally, ECS introduces a new ARN and ID Format for its resources, and provides new APIs for opt-in to the new formats. 
* feature: IAM: We are making it easier for you to manage your AWS Identity and Access Management (IAM) resources by enabling you to add tags to your IAM principals (users and roles). Adding tags on IAM principals will enable you to write fewer policies for permissions management and make policies easier to comprehend.  Additionally, tags will also make it easier for you to grant access to AWS resources.
* feature: Pinpoint: 1. With Amazon Pinpoint Voice, you can use text-to-speech technology to deliver personalized voice messages to your customers. Amazon Pinpoint Voice is a great way to deliver transactional messages -- such as one-time passwords and identity confirmations -- to customers. 2. Adding support for Campaign Event Triggers. With Campaign Event Triggers you can now schedule campaigns to execute based on incoming event data and target just the source of the event.
* feature: PinpointSMSVoice: With Amazon Pinpoint Voice, you can use text-to-speech technology to deliver personalized voice messages to your customers. Amazon Pinpoint Voice is a way to deliver transactional messages -- such as one-time passwords and appointment confirmations to customers.
* feature: RAM: This is the initial release of AWS Resource Access Manager (RAM) which provides you the ability to share your resources across AWS accounts or within your AWS Organization. You can now create resources centrally and use AWS RAM to share those resources with other accounts, eliminating the need to provision and manage resources in every account. When you share a resource with another account, that account is granted access. Any policies and permissions in that account apply to the shared resource. 
* feature: RDS: Introduces DB Instance Automated Backups for the MySQL, MariaDB, PostgreSQL, Oracle and Microsoft SQL Server database engines. You can now retain Amazon RDS automated backups (system snapshots and transaction logs) when you delete a database instance. This allows you to restore a deleted database instance to a specified point in time within the backup retention period even after it has been deleted, protecting you against accidental deletion of data. For more information, see Amazon RDS Documentation.
* feature: Redshift: With this release, Redshift is providing API's for better snapshot management by supporting user defined automated snapshot schedules, retention periods for manual snapshots, and aggregate snapshot actions including batch deleting user snapshots, viewing account level snapshot storage metrics, and better filtering and sorting on the describe-cluster-snapshots API. Automated snapshots can be scheduled to be taken at a custom interval and the schedule created can be reused across clusters. Manual snapshot retention periods can be set at the cluster, snapshot, and cross-region-copy level. The retention period set on a manual snapshot indicates how many days the snapshot will be retained before being automatically deleted.
* feature: Route53Resolver: This is the first release of the Amazon Route 53 Resolver API.  Customers now have the ability to create and manage Amazon Route 53 Resolver endpoints and Amazon Route 53 Resolver rules. 
* feature: S3: Add support for new S3 Block Public Access bucket-level APIs. The new Block Public Access settings allow bucket owners to prevent public access to S3 data via bucket/object ACLs or bucket policies.
* feature: S3Control: Add support for new S3 Block Public Access account-level APIs. The Block Public Access settings allow account owners to prevent public access to S3 data via bucket/object ACLs or bucket policies.
* feature: TranscribeService: With this release, Amazon Transcribe now publicly supports transcriptions from audio sources in British English (en-GB), Australian English (en-AU), and Canadian French (fr-CA). Amazon Transcribe now also supports the following languages in Private beta: Germany German (de-DE), Brazil Portuguese (pt-BR), France French (fr-FR).

## 2.356.0
* feature: AutoScaling: EC2 Auto Scaling now allows users to provision and automatically scale instances across purchase options (Spot, On-Demand, and RIs) and instance types in a single Auto Scaling group (ASG).
* feature: EC2: Amazon EC2 Fleet now supports a new request type "Instant" that you can use to provision capacity synchronously across instance types & purchase models and CreateFleet will return the instances launched in the API response.
* feature: MediaTailor: AWS Elemental MediaTailor SDK now returns a manifest endpoint prefix for clients to initiate a DASH playback session.
* feature: ResourceGroups: The AWS Resource Groups service added support for AWS CloudFormation stack-based groups.
* feature: SNS: Added an optional request parameter, named Attributes, to the Amazon SNS CreateTopic API action. For more information, see the Amazon SNS API Reference (https://docs.aws.amazon.com/sns/latest/api/API_CreateTopic.html).
* feature: SageMaker: SageMaker now makes the final set of metrics published from training jobs available in the DescribeTrainingJob results.  Automatic Model Tuning now supports warm start of hyperparameter tuning jobs.  Notebook instances now support a larger number of instance types to include instances from the ml.t3, ml.m5, ml.c4, ml.c5 families.
* feature: ServiceCatalog: Adds support for Cloudformation StackSets in Service Catalog

## 2.355.0
* feature: Chime: This release adds support in ListUsers API to filter the list by an email address.
* feature: Redshift: Amazon Redshift provides the option to defer non-mandatory maintenance updates to a later date.

## 2.354.0
* bugfix: Endpoint Discovery: Not to inspect environmental variables in browsers
* feature: Batch: Adding EC2 Launch Template support in AWS Batch Compute Environments.
* feature: Budgets: 1. Added budget performance history, enabling you to see how well your budgets matched your actual costs and usage.                                                                                             2. Added budget performance history, notification state, and last updated time, enabling you to see how well your budgets matched your actual costs and usage, how often your budget alerts triggered, and when your budget was last updated.
* feature: CloudFormation: The Drift Detection feature enables customers to detect whether a stack's actual configuration differs, or has drifted, from its expected configuration as defined within AWS CloudFormation.
* feature: CodePipeline: Add support for cross-region pipeline with accompanying definitions as needed in the AWS CodePipeline API Guide.
* feature: Firehose: With this release, Amazon Kinesis Data Firehose allows you to enable/disable server-side encryption(SSE) for your delivery streams ensuring encryption of data at rest. For technical documentation, look at https://docs.aws.amazon.com/firehose/latest/dev/encryption.html
* feature: Polly: Amazon Polly adds new female voices: Italian - Bianca, Castilian Spanish - Lucia and new language: Mexican Spanish with new female voice - Mia.
* feature: RDS: API Update for RDS: this update enables Custom Endpoints, a new feature compatible with Aurora Mysql, Aurora PostgreSQL and Neptune that allows users to configure a customizable endpoint that will provide access to their instances in a cluster. 

## 2.353.0
* feature: MediaPackage: As a part of SPEKE DRM encryption, MediaPackage now supports encrypted content keys. You can enable this enhanced content protection in an OriginEndpoint's encryption settings. When this is enabled, MediaPackage indicates to the key server that it requires an encrypted response. To use this, your DRM key provider must support content key encryption. For details on this feature, see the AWS MediaPackage User Guide at https://docs.aws.amazon.com/mediapackage/latest/ug/what-is.html.

## 2.352.0
* feature: DLM: Amazon Data Lifecycle Manager adds support for copying EBS volume tags to EBS snapshots. AWS resource tags allow customers to add metadata and apply access policies to your Amazon Elastic Block Store (Amazon EBS) resources. Starting today, customers can use Amazon Data Lifecycle Manager (DLM) to copy tags on EBS volumes to EBS snapshots. This allows customers to easily set snapshot metadata, such as access policies, to match the parent volume. Customers can enable this functionality on new or existing lifecycle policies. They can also choose to disable it at a future date.  
* feature: Endpoint Discovery: Some services provide endpoint discovery operations (e.g. 'DescribeEndpoints()'). This SDK feature, if turned on, will automatically request endpoints from services if needed and cache the endpoints returned.
* feature: MediaLive: You can now switch a live channel between preconfigured inputs. This means assigned inputs for a running channel can be changed according to a defined schedule. You can also use MP4 files as inputs.

## 2.351.0
* feature: CostExplorer: Enable Payer Accounts to View Linked Account Recommendations. Payer Accounts can specify "LINKED" as scope in the request now. In the response, there is a new filed called AccountId in ReservationPurchaseRecommendationDetail for indicating which account is this recommendation detail belongs to.
* feature: DMS: Update the DMS TestConnectionSucceeds waiter.
* feature: EC2: VM Import/Export now supports generating encrypted EBS snapshots, as well as AMIs backed by encrypted EBS snapshots during the import process.

## 2.350.0
* feature: APIGateway: AWS WAF integration with APIGW. Changes for adding webAclArn as a part of  Stage output. When the user calls a get-stage or get-stages, webAclArn will also be returned as a part of the output.
* feature: EC2: You can now launch the new Amazon EC2 memory optimized R5a and general purpose M5a instances families that feature AMD EPYC processors.
* feature: Pinpoint: This update adds the ability to send transactional email by using the SendMessage API. Transactional emails are emails that you send directly to specific email addresses. Unlike campaign-based email that you send from Amazon Pinpoint, you don't have to create segments and campaigns in order to send transactional email.
* feature: PinpointEmail: This is the first release of the Amazon Pinpoint Email API. You can use this API to configure and send transactional email from your Amazon Pinpoint account to specific email addresses. Unlike campaign-based email that you send from Amazon Pinpoint, you don't have to create segments and campaigns in order to send transactional email. 
* feature: WAFRegional: You can now use AWS WAF to configure protections for your Amazon API Gateway APIs.  This will enable you to block (or count) undesired traffic to your APIs based on the different AWS WAF rules and conditions you create. For more information about AWS WAF, see the AWS WAF Developer Guide.

## 2.349.0
* bugfix: ManagedUpload: add fix for #2304: handle situation of same part being sent twice
* feature: EKS: Adds waiters for ClusterActive and ClusterDeleted
* feature: ServerlessApplicationRepository: New AWS Serverless Application Repository APIs that support creating and reading a broader set of AWS CloudFormation templates, as well as enhancements to our existing APIs.

## 2.348.0
* feature: CloudDirectory: ListObjectParents API now supports a bool parameter IncludeAllLinksToEachParent, which if set to true, will return a ParentLinks list instead of a Parents map; BatchRead API now supports ListObjectParents operation.
* feature: Rekognition: This release updates the DetectLabels operation. Bounding boxes are now returned for certain objects, a hierarchical taxonomy is now available for labels, and you can now get the version of the detection model used for detection.

## 2.347.0
* feature: ServiceCatalog: Service Catalog integration with AWS Organizations, enables customers to more easily create and manage a portfolio of IT services across an organization. Administrators can now take advantage of the AWS account structure and account groupings configured in AWS Organizations to share Service Catalog Portfolios increasing agility and reducing risk. With this integration the admin user will leverage the trust relationship that exists within the accounts of the Organization to share portfolios to the entire Organization, a specific Organizational Unit or a specific Account.

## 2.346.0
* feature: ConfigService: With this release, AWS Config updated the ResourceType values. The updated list includes AWS Systems Manager AssociationCompliance and PatchCompliance, AWS Shield regional Protection, AWS Config ResourceCompliance, and AWS CodePipeline Pipeline.
* feature: Greengrass: Greengrass APIs now support bulk deployment operations, and APIs that list definition versions now support pagination.
* feature: MediaStoreData: The object size limit is increased from 10MB to 25MB and the content type is more permissive.

## 2.345.0
* feature: Chime: This is the initial release for the Amazon Chime AWS SDK. In this release, Amazon Chime adds support for administrative actions on users and accounts. API Documentation is also updated on https://docs.aws.amazon.com/chime/index.html
* feature: Credentials: httpsOptions for STS in SharedIniFileCredentials
* feature: DMS: Add waiters for TestConnectionSucceeds, EndpointDeleted, ReplicationInstanceAvailable, ReplicationInstanceDeleted, ReplicationTaskReady, ReplicationTaskStopped, ReplicationTaskRunning and ReplicationTaskDeleted.
* feature: RDS: This release adds the listener connection endpoint for SQL Server Always On to the list of fields returned when performing a describe-db-instances operation.

## 2.344.0
* bugfix: Core: Fixes issue where connectTimeout timers would not be cleared if a request errored out. Only affects node.js.
* feature: SSM: Compliance Severity feature release for State Manager. Users now have the ability to select compliance severity to their association in state manager console or CLI.
* feature: SageMaker: SageMaker notebook instances can now have a volume size configured.

## 2.343.0
* feature: EC2: As part of this release we are introducing EC2 On-Demand Capacity Reservations. With On-Demand Capacity Reservations, customers can reserve the exact EC2 capacity they need, and can keep it only for as long as they need it.

## 2.342.0
* feature: AlexaForBusiness: We extended the functionality of the Alexa for Business SDK, including additional support for third-party Alexa built-in devices, managing private and public skills, and conferencing setup.
* feature: CodeStar: This release lets you create projects from source code and a toolchain definition that you provide.

## 2.341.0
* feature: EC2: Provides customers the ability to Bring Your Own IP (BYOIP) prefix.  You can bring part or all of your public IPv4 address range from your on-premises network to your AWS account. You continue to own the address range, but AWS advertises it on the internet.

## 2.340.0
* feature: Inspector: Finding will be decorated with ec2 related metadata
* feature: Shield: AWS Shield Advanced API introduced a new service-specific AccessDeniedException which will be thrown when accessing individual attack information without sufficient permission.

## 2.339.0
* feature: Configuration: cache shared ini files for later use
* feature: SSM: Rate Control feature release for State Manager. Users now have the ability to apply rate control parameters similar to run command to their association in state manager console or CLI.
* feature: WorkSpaces: Added support for PowerPro and GraphicsPro WorkSpaces bundles.

## 2.338.0
* feature: AppStream: This API update adds support for creating, managing, and deleting users in the AppStream 2.0 user pool.
* feature: MediaLive: This release allows you to now turn on Quality-Defined Variable Bitrate (QVBR) encoding for your AWS Elemental MediaLive channels. You can now deliver a consistently high-quality video viewing experience while reducing overall distribution bitrates by using Quality-Defined Variable Bitrate (QVBR) encoding with AWS Elemental MediaLive. QVBR is a video compression technique that automatically adjusts output bitrates to the complexity of source content and only use the bits required to maintain a defined level of quality. This means using QVBR encoding, you can save on distribution cost, while maintaining, or increasing video quality for your viewers.
* feature: Route53: This change allows customers to disable health checks.

## 2.337.0
* bugfix: npmignore: update npmignore to exclude unit tests from npm
* feature: CloudWatchEvents: AWS Events - AWS Organizations Support in Event-Bus Policies. This release introduces a new parameter in the PutPermission API named Condition. Using the Condition parameter, customers can allow one or more AWS Organizations to access their CloudWatch Events Event-Bus resource.

## 2.336.0
* feature: Glue: New Glue APIs for creating, updating, reading and deleting Data Catalog resource-based policies.
* feature: Lightsail: Adds support for Lightsail managed databases.
* feature: ResourceGroups: AWS Resource Groups service added a new feature to filter resource groups by resource-type when using the ListGroups operation.

## 2.335.0
* feature: RDS: This release adds a new parameter to specify the DB instance or cluster parameter group for restore from DB snapshot and restore to point int time operations. For more information, see Amazon RDS Documentation.
* feature: ServiceCatalog: AWS Service Catalog enables you to reduce administrative maintenance and end-user training while adhering to compliance and security measures. With service actions, you as the administrator can enable end users to perform operational tasks, troubleshoot issues, run approved commands, or request permissions within Service Catalog. Service actions are defined using AWS Systems Manager documents, where you have access to pre-defined actions that implement AWS best practices, such asEC2 stop and reboot, as well as the ability to define custom actions.

## 2.334.0
* feature: CloudTrail: The LookupEvents API now supports two new attribute keys: ReadOnly and AccessKeyId

## 2.333.0
* feature: Athena: 1. GetQueryExecution API changes to return statementType of a submitted Athena query.  2. GetQueryResults API changes to return the number of rows added to a table when a CTAS query is executed.
* feature: DirectConnect: This release adds support for Jumbo Frames over AWS Direct Connect. You can now set MTU value when creating new virtual interfaces. This release also includes a new API to modify MTU value of existing virtual interfaces.
* feature: EC2: You can now launch the smaller-sized G3 instance called g3s.xlarge. G3s.xlarge provides 4 vCPU, 30.5 GB RAM and a NVIDIA Tesla M60 GPU. It is ideal for remote workstations, engineering and architectural applications, and 3D visualizations and rendering for visual effects.
* feature: MediaConvert: Added Paginators for all the MediaConvert list operations
* feature: TranscribeService: With this release, Amazon Transcribe now supports transcriptions from audio sources in British English (en-UK), Australian English (en-AU), and Canadian French (fr-CA).

## 2.332.0
* feature: Comprehend: This release adds French, Italian, German and Portuguese language support for all existing synchronous and asynchronous APIs
* feature: ES: Amazon Elasticsearch Service now supports customer-scheduled service software updates. When new service software becomes available, you can request an update to your domain and benefit from new features more quickly. If you take no action, we update the service software automatically after a certain time frame.
* feature: TranscribeService: With this update Amazon Transcribe now supports deleting completed transcription jobs. 

## 2.331.0
* feature: SSM: Adds StartDate, EndDate, and ScheduleTimezone to CreateMaintenanceWindow and UpdateMaintenanceWindow; Adds NextExecutionTime to GetMaintenanceWindow and DescribeMaintenanceWindows; Adds CancelMaintenanceWindowExecution, DescribeMaintenanceWindowSchedule and DescribeMaintenanceWindowsForTarget APIs.

## 2.330.0
* feature: IoTJobsDataPlane: We are releasing job execution timeout functionalities to customers. Device can now set and update their job execution timeout. 
* feature: Iot: We are releasing job execution timeout functionalities to customers. Customer now can set job execution timeout on the job level when creating a job. 

## 2.329.0
* feature: DirectoryService: SDK changes to create a new type of trust for active directory

## 2.328.0
* feature: APIGateway: Adding support for multi-value parameters in TestInvokeMethod and TestInvokeAuthorizer.
* feature: CodeBuild: Add resolved source version field in build output
* feature: SSM:  Adds RejectedPatchesAction to baseline to enable stricted validation of the rejected Patches List ; Add InstalledRejected and InstallOverrideList to compliance reporting
* feature: StorageGateway: AWS Storage Gateway now enables you to specify folders and subfolders when you update your file gateway's view of your S3 objects using the Refresh Cache API.

## 2.327.0
* feature: SageMaker: Waiter for SageMaker Batch Transform Jobs.

## 2.326.0
* feature: GuardDuty: Support optional FindingPublishingFrequency parameter in CreateDetector and UpdateDetector operations, and ClientToken on Create* operations

## 2.325.0
* bugfix: ParameterValidation: Uri parameters are now validated to ensure they contain at least 1 character. This fixes issues with S3 where passing Key with an empty string can sometimes cause a different operation to be called.
* feature: CodeStar: This release enables tagging CodeStar Projects at creation. The CreateProject API now includes optional tags parameter.
* feature: EC2: You can now use EC2 High Memory instances with 6 TiB memory (u-6tb1.metal), 9 TiB memory (u-9tb1.metal), and 12 TiB memory (u-12tb1.metal), which are ideal for running large in-memory databases, including production deployments of SAP HANA. These instances offer 448 logical processors, where each logical processor is a hyperthread on 224 cores. These instance deliver high networking throughput and lower latency with up to 25 Gbps of aggregate network bandwidth using Elastic Network Adapter (ENA)-based Enhanced Networking. These instances are EBS-Optimized by default, and support encrypted and unencrypted EBS volumes. This instance is only available in host-tenancy. You will need an EC2 Dedicated Host for this instance type to launch an instance.

## 2.324.0
* feature: APIGateway: Adding support for OpenAPI 3.0 import and export.
* feature: CodeCommit: This release adds API support for getting the contents of a file, getting the contents of a folder, and for deleting a file in an AWS CodeCommit repository.
* feature: MQ: Amazon MQ supports ActiveMQ 5.15.6, in addition to 5.15.0. Automatic minor version upgrades can be toggled. Updated the documentation.

## 2.323.0
* feature: Glue: AWS Glue now supports data encryption at rest for ETL jobs and development endpoints. With encryption enabled, when you run ETL jobs, or development endpoints, Glue will use AWS KMS keys to write encrypted data at rest. You can also encrypt the metadata stored in the Glue Data Catalog using keys that you manage with AWS KMS. Additionally, you can use AWS KMS keys to encrypt the logs generated by crawlers and ETL jobs as well as encrypt ETL job bookmarks. Encryption settings for Glue crawlers, ETL jobs, and development endpoints can be configured using the security configurations in Glue. Glue Data Catalog encryption can be enabled via the settings for the Glue Data Catalog.
* feature: OpsWorksCM: This release introduces a new API called ExportServerEngineAttribute to Opsworks-CM. You can use this API call to export engine specific attributes like the UserData script used for unattended bootstrapping of new nodes that connect to the server. 
* feature: RDS: This release includes Deletion Protection for RDS databases.

## 2.322.0
* feature: DirectoryService: API changes related to launch of cross account for Directory Service.
* feature: EC2: Add pagination support for ec2.describe-route-tables API. 

## 2.321.0
* feature: Connect: This update adds the Amazon Connect Metrics API, which lets you get current metric data and historical metric data within 24 hours for the queues in your Amazon Connect instance.
* feature: RDS:  Adds DB engine version requirements for option group option settings, and specifies if an option setting requires a value.

## 2.320.0
* feature: MediaConvert: To offer lower prices for predictable, non-urgent workloads, we propose the concept of Reserved Transcode pricing. Reserved Transcode pricing Reserved Transcoding pricing would offer the customer access to a fixed parallel processing capacity for a fixed monthly rate. This capacity would be stated in terms of number of Reserved Transcode Slots (RTSs). One RTS would be able to process one job at a time for a fixed monthly fee.

## 2.319.0
* feature: DirectoryService: Added CreateLogSubscription, DeleteLogSubscription, and ListLogSubscriptions APIs for Microsoft AD. Customers can now opt in to have Windows security event logs from the domain controllers forwarded to a log group in their account.
* feature: EC2: You can now launch f1.4xlarge, a new instance size within the existing f1 family which provides two Xilinx Virtex Field Programmable Arrays (FPGAs) for acceleration. FPGA acceleration provide additional performance and time sensitivity for specialized accelerated workloads such as clinical genomics and real-time video processing. F1.4xlarge instances are available in the US East (N. Virginia), US West (Oregon), GovCloud (US), and EU West (Dublin) AWS Regions.
* feature: RDS: This launch enables RDS start-db-cluster and stop-db-cluster. Stopping and starting Amazon Aurora clusters helps you manage costs for development and test environments. You can temporarily stop all the DB instances in your cluster, instead of setting up and tearing down all the DB instances each time that you use the cluster.

## 2.318.0
* feature: CloudWatch: Amazon CloudWatch adds the ability to request png image snapshots of metric widgets using the GetMetricWidgetImage API.
* feature: Organizations: Introducing a new exception - AccountOwnerNotVerifiedException which will be returned for InviteAccountToOrganization call for unverified accounts.
* feature: S3: S3 Cross Region Replication now allows customers to use S3 object tags to filter the scope of replication. By using S3 object tags, customers can identify individual objects for replication across AWS Regions for compliance and data protection. Cross Region Replication for S3 enables automatic and asynchronous replication of objects to another AWS Region, and with this release customers can replicate at a bucket level, prefix level or by using object tags.

## 2.317.0
* feature: ES: Amazon Elasticsearch Service adds support for node-to-node encryption for new domains running Elasticsearch version 6.0 and above
* feature: Rekognition: This release updates the Amazon Rekognition IndexFaces API operation. It introduces a QualityFilter parameter that allows you to automatically filter out detected faces that are deemed to be of low quality by Amazon Rekognition. The quality bar is based on a variety of common use cases.  You can filter low-quality detected faces by setting QualityFilter to AUTO, which is also the default setting. To index all detected faces regardless of quality, you can specify NONE.  This release also provides a MaxFaces parameter that is useful when you want to only index the most prominent and largest faces in an image and don't want to index other faces detected in the image, such as smaller faces belonging to people standing in the background.

## 2.316.0
* feature: CloudWatch: Amazon CloudWatch adds the ability to publish values and counts using PutMetricData
* feature: CodeBuild: Support build logs configuration.
* feature: EC2: Added support for customers to tag EC2 Dedicated Hosts on creation.
* feature: ECS: This release of Amazon Elastic Container Service (Amazon ECS) introduces support for additional Docker flags as Task Definition parameters. Customers can now configure their ECS Tasks to use systemControls (sysctl), pseudoTerminal (tty), and interactive (i) Docker flags.
* feature: ElastiCache: ElastiCache for Redis added support for adding and removing read-replicas from any cluster with no cluster downtime, Shard naming: ElastiCache for Redis customers have the option of allowing ElastiCache to create names for their node groups (shards) or generating their own node group names. For more information, see https:// docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_NodeGroupConfiguration.html, ShardsToRetain: When reducing the number of node groups (shards) in an ElastiCache for Redis (cluster mode enabled) you have the option of specifying which node groups to retain or which node groups to remove. For more information, see https:// docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyReplicationGroupShardConfiguration.html, ReservationARN: ReservedNode includes an ARN, ReservationARN, member which identifies the reserved node. For more information, see https:// docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ReservedCacheNode.html
* feature: ElasticTranscoder: Added support for MP2 container

## 2.315.0
* feature: Polly: Amazon Polly adds Mandarin Chinese language support with new female voice - "Zhiyu"

## 2.314.0
* bugfix: ReactNative: Fixes issue where attempting to use a Blob object as input to an operation would cause a parameter validaiton error in release mode.
* feature: Connect: This update adds the Amazon Connect Update Contact Attributes API, which lets you update contact attributes for contacts in your Amazon Connect instance.
* feature: EC2: Pagination Support for DescribeNetworkInterfaces API
* feature: FMS: This update of Amazon Fire Wall Manager adds the ability to scope down the policy as well as to get all the member accounts belonging to a certain Fire Wall Manager admin account.

## 2.313.0
* feature: SSM: Session Manager is a fully managed AWS Systems Manager capability that provides interactive one-click access to Amazon EC2 Linux and Windows instances.

## 2.312.0
* feature: CloudHSMV2: With this release, we are adding 2 new APIs. DeleteBackup deletes a specified AWS CloudHSM backup. A backup can be restored up to 7 days after the DeleteBackup request. During this 7-day period, the backup will be in state PENDING_DELETION. Backups can be restored using the RestoreBackup API, which will move the backup from state PENDING_DELETION back to ACTIVE.
* feature: Redshift: Adding support to Redshift to change the encryption type after cluster creation completes.

## 2.311.0
* feature: CloudWatchLogs: * Adding a log prefix parameter for filter log events API and minor updates to the documentation
* feature: ConfigService: Adding a new field "createdBy" to the ConfigRule data model. The field is populated only if the rule is service linked i.e the rule is created by a service. The field is empty for normal rules created by customer.

## 2.310.0
* feature: APIGateway: Add support for Active X-Ray with API Gateway
* feature: CodeCommit: This release adds additional optional fields to the pull request APIs.
* feature: MediaConvert: This release adds support for Cost Allocation through tagging and also enables adding, editing, and removal of tags from the MediaConvert console.

## 2.309.0
* feature: AppStream: Added support for enabling persistent application settings for a stack. When these settings are enabled, changes that users make to applications and Windows settings are automatically saved after each session and applied to the next session.
* feature: DynamoDB: New feature for Amazon DynamoDB.
* feature: ELB: Documentation update for DescribeAccountLimits API to include classic-registered-instances.
* feature: S3: Parquet input format support added for the SelectObjectContent API

## 2.308.0
* feature: Rekognition: This release introduces a new API called DescribeCollection to Amazon Rekognition. You can use DescribeCollection to get information about an existing face collection. Given the ID for a face collection, DescribeCollection returns the following information: the number of faces indexed into the collection, the version of the face detection model used by the collection, the Amazon Resource Name (ARN) of the collection and the creation date/time of the collection.

## 2.307.0
* feature: EKS: Amazon EKS DescribeCluster API returns a platformVersion attribute which allows you to identify the features that are currently enabled for your clusters. The Amazon EKS platform version represents capabilities of the cluster control plane, such as which Kubernetes API server flags are enabled, as well as the current Kubernetes patch version. 
* feature: WAF: This change includes support for the WAF FullLogging feature through which Customers will have access to all the logs of requests that are inspected by a WAF WebACL. The new APIs allow Customers to manage association of a WebACL with one or more supported "LogDestination" and redact any request fields from the logs. 
* feature: WAFRegional: This change includes support for the WAF FullLogging feature through which Customers will have access to all the logs of requests that are inspected by a WAF WebACL. The new APIs allow Customers to manage association of a WebACL with one or more supported "LogDestination" and redact any request fields from the logs. 

## 2.306.0
* feature: CodeBuild: Support multiple sources and artifacts for CodeBuild projects. 
* feature: SageMaker: VolumeKmsKeyId now available in Batch Transform Job 

## 2.305.0
* feature: CORS: add cors support for pricing API. Make Pricing client available by default in browsers SDK.
* feature: Glue: AWS Glue now supports data encryption at rest for ETL jobs and development endpoints. With encryption enabled, when you run ETL jobs, or development endpoints, Glue will use AWS KMS keys to write encrypted data at rest. You can also encrypt the metadata stored in the Glue Data Catalog using keys that you manage with AWS KMS. Additionally, you can use AWS KMS keys to encrypt the logs generated by crawlers and ETL jobs as well as encrypt ETL job bookmarks. Encryption settings for Glue crawlers, ETL jobs, and development endpoints can be configured using the security configurations in Glue. Glue Data Catalog encryption can be enabled via the settings for the Glue Data Catalog.
* feature: MediaPackage: MediaPackage now provides input redundancy. Channels have two ingest endpoints that can receive input from encoders. OriginEndpoints pick one of the inputs receiving content for playback and automatically switch to the other input if the active input stops receiving content. Refer to the User Guide (https://docs.aws.amazon.com/mediapackage/latest/ug/what-is.html) for more details on this feature.
* feature: Monitoring: Inactive code for future SDK instrumentation and telemetry.
* feature: SageMakerRuntime: SageMaker Runtime supports CustomAttributes header which allows customers provide additional information in a request for an inference submitted to a model or in the response about the inference returned by a model hosted at an Amazon SageMaker endpoint.

## 2.304.0
* feature: Glue: New Glue APIs for creating, updating, reading and deleting Data Catalog resource-based policies.
* feature: XRay: Support for new APIs that enable management of sampling rules.

## 2.303.0
* feature: IoTAnalytics: Added new listDatasetContent API that shows you the list of dataset contents for the corresponding versions
* feature: Iot: This release adds support to create a Stream and Code signing for Amazon FreeRTOS job along with Over-the-air updates.
* feature: Signer: AWS Signer is a new feature that allows Amazon FreeRTOS (AFR) Over The Air (OTA) customers to cryptographically sign code using code-signing certificates managed by AWS Certificate Manager. 

## 2.302.0
* feature: Glue: AWS Glue now supports data encryption at rest for ETL jobs and development endpoints. With encryption enabled, when you run ETL jobs, or development endpoints, Glue will use AWS KMS keys to write encrypted data at rest. You can also encrypt the metadata stored in the Glue Data Catalog using keys that you manage with AWS KMS. Additionally, you can use AWS KMS keys to encrypt the logs generated by crawlers and ETL jobs as well as encrypt ETL job bookmarks. Encryption settings for Glue crawlers, ETL jobs, and development endpoints can be configured using the security configurations in Glue. Glue Data Catalog encryption can be enabled via the settings for the Glue Data Catalog.

## 2.301.0
* feature: CloudWatchEvents: Added Fargate and NetworkConfiguration support to EcsParameters.
* feature: CognitoIdentityServiceProvider: Amazon Cognito now has API support for creating custom domains for our hosted UI for User Pools.

## 2.300.0
* feature: IoTAnalytics: AWS IoT Analytics announces three new features:  (1) Bring Your Custom Container - import your custom authored code containers. (2) Automate Container Execution - lets you automate the execution of containers hosting custom authored analytical code or Jupyter Notebooks to perform continuous analysis. (3) Incremental Data Capture with Customizable Time Windows - enables users to perform analysis on new incremental data captured since the last analysis.
* feature: Iot: This release adds support for IoT Thing Group Indexing and Searching functionality.
* feature: LexModelBuildingService: Amazon Lex builds bot in two stages. After the first it sets status to READY_BASIC_TESTING. In this state the bot will match user inputs that exactly match the utterances configured for the bot's intents and values in the slot types. 
* feature: MediaLive: Adds two APIs for working with Channel Schedules: BatchUpdateSchedule and DescribeSchedule. These APIs allow scheduling actions for SCTE-35 message insertion and for static image overlays.
* feature: Rekognition: This release introduces a new API called DescribeCollection to Amazon Rekognition.  You can use DescribeCollection to get information about an existing face collection. Given the ID for a face collection, DescribeCollection returns the following information: the number of faces indexed into the collection, the version of the face detection model used by the collection, the Amazon Resource Name (ARN) of the collection and the creation date/time of the collection.

## 2.299.0
* feature: Snowball: Snowball job states allow customers to track the status of the Snowball job. We are launching a new Snowball job state "WithSortingFacility"!  When customer returns the Snowball to AWS, the device first goes to a sorting facility before it reaches an AWS data center.  Many customers have requested us to add a new state to reflect the presence of the device at the sorting facility for better tracking. Today when a customer returns  the Snowball, the state first changes from "InTransitToAWS" to "WithAWS". With the addition of new state, the device will move from "InTransitToAWS" to "WithAWSSortingFacility", and then to "WithAWS".  There are no other changes to the API at this time besides adding this new state.

## 2.298.0
* feature: EC2: Added support for T3 Instance type in EC2. To learn more about T3 instances, please see https://aws.amazon.com/ec2/instance-types/t3/
* feature: ElasticBeanstalk: Elastic Beanstalk adds the "Privileged" field to the "CPUUtilization" type, to support enhanced health reporting in Windows environments.
* feature: RDS: Adds a paginator for the DescribeDBClusters operation.

## 2.297.0
* bugfix: S3: Fixes issue when making cross-region S3 calls where the object key is truncated if the key prefix matched the bucket name and path style addressing is not used.
* feature: DynamoDB: Added SSESpecification block to update-table command which allows users to modify table Server-Side Encryption. Added two new fields (SSEType and KMSMasterKeyId) to SSESpecification block used by create-table and update-table commands. Added new SSEDescription Status value UPDATING.
* feature: MediaConvert: This release fixes backward-incompatible changes from a previous release. That previous release changed non-required job settings to required, which prevented jobs and job templates from merging correctly. The current change removes validation of required settings from the SDK and instead centralizes the validation in the service API. For information on required settings, see the Resources chapter of the AWS Elemental MediaConvert API Reference https://docs.aws.amazon.com/mediaconvert/latest/apireference/resources.html

## 2.296.0
* feature: DAX: DAX CreateClusterRequest is updated to include IamRoleArn as a required request parameter. 
* feature: SageMaker: Added an optional boolean parameter, 'DisassociateLifecycleConfig', to the UpdateNotebookInstance operation. When set to true, the lifecycle configuration associated with the notebook instance will be removed, allowing a new one to be set via a new 'LifecycleConfigName' parameter.

## 2.295.0
* feature: Discovery: The Application Discovery Service's Continuous Export APIs allow you to analyze your on-premises server inventory data, including system performance and network dependencies, in Amazon Athena.
* feature: EC2: The 'Attribute' parameter DescribeVolumeAttribute request has been marked as required - the API has always required this parameter, but up until now this wasn't reflected appropriately in the SDK.
* feature: MediaConvert: Added WriteSegmentTimelineInRepresentation option for Dash Outputs
* feature: Redshift: You can now resize your Amazon Redshift cluster quickly. With the new ResizeCluster action, your cluster is available for read and write operations within minutes
* feature: SSM: AWS Systems Manager Inventory now supports groups to quickly see a count of which managed instances are and arent configured to collect one or more Inventory types

## 2.294.0
* feature: DeviceFarm: Support for running tests in a custom environment with live logs/video streaming, full test features parity and reduction in overall test execution time.

## 2.293.0
* feature: AutoScaling: Add batch operations for creating/updating and deleting scheduled scaling actions.
* feature: CloudFront: Lambda@Edge Now Provides You Access to the Request Body for HTTP POST/PUT Processing. With this feature, you can now offload more origin logic to the edge and improve end-user latency. Developers typically use Web/HTML forms or Web Beacons/Bugs as a mechanism to collect data from the end users and then process that data at their origins servers. For example, if you are collecting end user behavior data through a web beacon on your website, you can use this feature to access the user behavior data and directly log it to an Amazon Kinesis Firehose endpoint from the Lambda function, thereby simplifying your origin infrastructure.
* feature: ES: Amazon Elasticsearch Service adds support for no downtime, in-place upgrade for Elasticsearch version 5.1 and above.

## 2.292.0
* feature: SageMaker: SageMaker updated the default endpoint URL to support Private Link via the CLI/SDK.

## 2.291.0
* feature: MediaConvert: This release adds support for a new rate control mode, Quality-Defined Variable Bitrate (QVBR) encoding, includes updates to optimize transcoding performance, and resolves previously reported bugs.

## 2.290.0
* feature: DAX: Add the SSESpecification field to CreateCluster to allow creation of clusters with server-side encryption, and add the SSEDescription field to DescribeClusters to display the status of server-side encryption for a cluster. 
* feature: ECS: This release of Amazon Elastic Container Service (Amazon ECS) introduces support for Docker volumes and Docker volume drivers. Customers can now configure their ECS Tasks to use Docker volumes, enabling stateful and storage-intensive applications to be deployed on ECS.
* feature: RDS: Launch RDS Aurora Serverless

## 2.289.0
* feature: SSM: AWS Systems Manager Automation is launching two new features for Automation Execution Rate Control based on tags and customized parameter maps. With the first feature, customer can target their resources by specifying a Tag with Key/Value. With the second feature, Parameter maps rate control, customers can benefit from customization of input parameters.
* feature: SecretsManager: This release introduces a ForceDeleteWithoutRecovery parameter to the DeleteSecret API enabling customers to force the deletion of a secret without any recovery window

## 2.288.0
* feature: CloudWatchLogs: Documentation Update
* feature: CodeBuild: Release semantic versioning feature for CodeBuild
* feature: EC2: Amazon VPC Flow Logs adds support for delivering flow logs directly to S3
* feature: Pinpoint: This release includes a new batch API call for Amazon Pinpoint which can be used to update endpoints and submit events. This call will accept events from clients such as mobile devices and AWS SDKs. This call will accept requests which has multiple endpoints and multiple events attached to those endpoints in a single call. This call will update the endpoints attached and will ingest events for those endpoints. The response from this call will be a multipart response per endpoint/per event submitted.
* feature: SSM: Two new filters ExecutionStage and DocumentName will be added to ListCommands so that customers will have more approaches to query their commands.

## 2.287.0
* bugfix: Typings: Updates typings-generator to remove unused model types.
* feature: DynamoDB:  Amazon DynamoDB Point-in-time recovery (PITR) provides continuous backups of your table data. DynamoDB now supports the ability to self-restore a deleted PITR enabled table. Now, when a table with PITR enabled is deleted, a system backup is automatically created and retained for 35 days (at no additional cost). System backups allow you to restore the deleted PITR enabled table to the state it was just before the point of deletion. For more information, see the Amazon DynamoDB Developer Guide.
* feature: Health: Updates the ARN structure vended by AWS Health API. All ARNs will now include the service and type code of the associated event, as vended by DescribeEventTypes.

## 2.286.2
* bugfix: type: remove undefined exceptions from SubscribeToShardEventStream

## 2.286.1
* bugfix: react-native: Fixes issue where promise methods are undefined when using react-native 0.56.0. See [this issue](https://github.com/facebook/metro/issues/208) for more information.
* feature: Kinesis: Updates API to latest version.
* feature: Polly: Amazon Polly enables female voice Aditi to speak Hindi language
* feature: ResourceGroups: AWS Resource Groups service added a new feature to filter group resources by resource-type when using the ListGroupResources operation.
* feature: SSM: This release updates AWS Systems Manager APIs to let customers create and use service-linked roles to register and edit Maintenance Window tasks.

## 2.285.1
* feature: StorageGateway: AWS Storage Gateway now enables you to create stored volumes with AWS KMS support.
* feature: TranscribeService: With this update Amazon Transcribe now supports channel identification. It transcribes audio from separate channels and combines them into a single transcription. 

## 2.284.1
* feature: Connect: This update includes the new User Management APIs and the Federation API used for SAML authentication. The User Management APIs let you create and manage users in your Amazon Connect instance programmatically. The Federation API enables authentication between AWS and your existing identity provider using tokens.
* feature: ES: Amazon Elasticsearch Service adds support for enabling Elasticsearch error logs, providing you valuable information for troubleshooting your Elasticsearch domains quickly and easily. These logs are published to the Amazon CloudWatch Logs service and can be turned on or off at will.
* feature: Iot: As part of this release we are introducing a new IoT security service, AWS IoT Device Defender, and extending capability of AWS IoT to support Step Functions rule action. The AWS IoT Device Defender is a fully managed service that helps you secure your fleet of IoT devices. For more details on this new service, go to https://aws.amazon.com/iot-device-defender. The Step Functions rule action lets you start an execution of AWS Step Functions state machine from a rule.
* feature: KMS: Added a KeyID parameter to the ListAliases operation. This parameter allows users to list only the aliases that refer to a particular AWS KMS customer master key. All other functionality remains intact.
* feature: MediaConvert: Fixes an issue with modeled timestamps being labeled with the incorrect format.

## 2.283.1
* feature: CloudHSMV2: This update  to the AWS CloudHSM API adds copy-backup-to-region, which allows you to copy a backup of a cluster from one region to another. The copied backup can be used in the destination region to create a new AWS CloudHSM cluster as a clone of the original cluster. 
* feature: DirectConnect: 1. awsDeviceV2 field is introduced for Connection/Lag/Interconnect/VirtualInterface/Bgp Objects, while deprecating the awsDevice field for Connection/Lag/Interconnect Objects. 2. region field is introduced for VirtualInterface/Location objects 
* feature: Glue: Glue Development Endpoints now support association of multiple SSH public keys with a development endpoint.
* feature: Iot: get rid of documentParameters field from CreateJob API
* feature: MQ: Modified the CreateBroker, UpdateBroker, and DescribeBroker operations to support integration with Amazon CloudWatch Logs. Added a field to indicate the IP address(es) that correspond to wire-level endpoints of broker instances. While a single-instance broker has one IP address, an active/standby broker for high availability has 2 IP addresses. Added fields to indicate the time when resources were created. Updated documentation for Amazon MQ.
* feature: SageMaker: Added SecondaryStatusTransitions to DescribeTrainingJob to provide more visibility into SageMaker training job progress and lifecycle.

## 2.282.1
* feature: CodeBuild: Add artifacts encryptionDisabled and build encryptionKey.
* feature: EC2: This change provides the EC2/Spot customers with two new allocation strategies -- LowestN for Spot instances, and OD priority for on-demand instances.
* feature: Inspector: inspector will return ServiceTemporarilyUnavailableException when service is under stress
* feature: Redshift: When we make a new version of Amazon Redshift available, we update your cluster during its maintenance window. By selecting a maintenance track, you control whether we update your cluster with the most recent approved release, or with the previous release. The two values for maintenance track are current and trailing. If you choose the current track, your cluster is updated with the latest approved release. If you choose the trailing track, your cluster is updated with the release that was approved previously.The new API operation for managing maintenance tracks for a cluster is DescribeClusterTracks. In addition, the following API operations have new MaintenanceTrackName parameters:  Cluster,  PendingModifiedValues,  ModifyCluster,  RestoreFromClusterSnapshot,  CreateCluster,  Snapshot
* feature: SSM: This release updates AWS Systems Manager APIs to allow customers to attach labels to history parameter records and reference history parameter records via labels.  It also adds Parameter Store integration with AWS Secrets Manager to allow referencing and retrieving AWS Secrets Manager's secrets from Parameter Store.

## 2.281.1
* feature: EC2: R5 is the successor to R4 in EC2's memory-optimized instance family. R5d is a variant of R5 that has local NVMe SSD. Z1d instances deliver both high compute and high memory. Z1d instances use custom Intel Xeon Scalable Processors running at up to 4.0 GHz, powered by sustained all-core Turbo Boost. They are available in 6 sizes, with up to 48 vCPUs, 384 GiB of memory, and 1.8 TB of local NVMe storage.
* feature: ECS: This release of Amazon Elastic Container Service (Amazon ECS) introduces support for private registry authentication using AWS Secrets Manager. With private registry authentication, private Docker images can be used in a task definition.
* feature: ELBv2: We are introducing two new actions in Application Load Balancer. Redirects and Fixed Response. These features will allow you to improve user experience and security posture. By using redirect actions in your Application Load Balancer, you can improve the security of your user requests and by using fixed-response, you can enhance the customer experience by displaying branded error pages during application maintenance or outages.

## 2.280.1
* bugfix: Serialization: fix timestamp serialization issue in querystring; Update the logic of formatting the timestamp;
* feature: CORS: make Translate service available in browser version of SDK by default
* feature: DynamoDB: With this SDK update, APIs UpdateGlobalTableSettings and DescribeGlobalTableSettings now allow consistently configuring AutoScaling settings for a DynamoDB global table. Previously, they would only allow consistently setting IOPS. Now new APIs are being released, existing APIs are being extended.

## 2.279.1
* feature: ConfigService: Setting internal length limits on resourceId for APIs.  

## 2.278.1
* feature: MediaPackage: Adds support for DASH OriginEnpoints with multiple media presentation description periods triggered by presence of SCTE-35 ad markers in Channel input streams.

## 2.277.1
* feature: IoTAnalytics: This change allows publishing of channel/datastore size as part of the describe-channel/describe-datastore APIs. We introduce an optional boolean parameter 'includeStatistics' in the Describe request. If the user sets this parameter to true, the describe response will return the resource size and timestamp at which the size was recorded. If the parameter is set to false, the size won't be computed or returned.
* feature: serviceId: add service id to all current clients. It will be used as unique identifier for service clients

## 2.276.1
* bugfix: TypeScript: Updates waitFor methods to accept $waiter configuration in parameter fields.
* bugfix: Typings: Fixes incorrect typings for AWS.EventListeners. Renamed CORE field to Core.
* feature: CORS: KinesisVideo and KinesisVideoArchivedMedia support CORS. This change make the services available in browser version of SDK by default
* feature: Comprehend: This release gives customers the ability to tokenize (find word boundaries) text and for each word provide a label for the part of speech, using the DetectSyntax operation. This API is useful to analyze text for specific conditions like for example finding nouns and the correlating adjectives to understand customer feedback. 
* feature: Polly: Amazon Polly adds new API for asynchronous synthesis to S3
* feature: SageMaker: Amazon SageMaker has added the capability for customers to run fully-managed, high-throughput batch transform machine learning models with a simple API call. Batch Transform is ideal for high-throughput workloads and predictions in non-real-time scenarios where data is accumulated over a period of time for offline processing.
* feature: Snowball: AWS Snowball Edge announces the availability of Amazon EC2 compute instances that run on the device. AWS Snowball Edge is a 100-TB ruggedized device built to transfer data into and out of AWS with optional support for local Lambda-based compute functions. With this feature, developers and administrators can run their EC2-based applications on the device providing them with an end to end vertically integrated AWS experience. Designed for data pre-processing, compression, machine learning, and data collection applications, these new instances, called SBE1 instances, feature 1.8 GHz Intel Xeon D processors up to 16 vCPUs, and 32 GB of memory. The SBE1 instance type is available in four sizes and multiple instances can be run on the device at the same time. Customers can now run compute instances using the same Amazon Machine Images (AMIs) that are used in Amazon EC2.

## 2.275.1
* feature: AppStream: This API update adds support for sharing AppStream images across AWS accounts within the same region.
* feature: KinesisVideo: Adds support for HLS video playback of Kinesis Video streams using the KinesisVideo client by including "GET_HLS_STREAMING_SESSION_URL" as an additional APIName parameter in the GetDataEndpoint input.
* feature: KinesisVideoArchivedMedia: Adds support for HLS video playback of Kinesis Video streams by providing the GetHLSStreamingSessionURL function in the KinesisVideoArchivedMedia client.

## 2.274.1
* feature: AppSync: This release adds support for configuring HTTP  endpoints as data sources for your AWS AppSync GraphQL API.
* feature: CodeBuild: Update CodeBuild CreateProject API - serviceRole is a required input 
* feature: DLM: Amazon Data Lifecycle Manager (DLM) for EBS Snapshots provides a simple, automated way to back up data stored on Amazon EBS volumes. You can define backup and retention schedules for EBS snapshots by creating lifecycle policies based on tags. With this feature, you no longer have to rely on custom scripts to create and manage your backups. This feature is now available in the US East (N. Virginia), US West (Oregon), and Europe (Ireland) AWS regions at no additional cost.
* feature: EFS: Amazon EFS now allows you to instantly provision the throughput required for your applications independent of the amount of data stored in your file system, allowing you to optimize throughput for your applications performance needs. Starting today, you can provision the throughput your applications require quickly with a few simple steps using AWS Console, AWS CLI or AWS API to achieve consistent performance.
* feature: IAM: SDK release to support IAM delegated administrator feature. The feature lets customers attach permissions boundary to IAM principals. The IAM principals cannot operate exceeding the permission specified in permissions boundary.

## 2.273.1
* feature: APIGateway: Support for fine grain throttling for API gateway. 
* feature: CostExplorer: Starting today, you can access custom Reserved Instance (RI) purchase recommendations for your Amazon Redshift, Amazon ElastiCache, and Amazon Elasticsearch reservations via AWS Cost Explorer API, in addition to accessing RI purchase recommendations for your Amazon EC2 and Amazon RDS reservations.
* feature: S3: S3 Select support for BZIP2 compressed input files
* feature: SSM: Support Conditional Branching OnFailure for SSM Automation

## 2.272.1
* feature: AppStream: This API update adds pagination to the DescribeImages API to support future features and enhancements.
* feature: CodeBuild: API changes to CodeBuild service, support report build status for Github sources
* feature: EC2: Support CpuOptions field in Launch Template data and allow Launch Template name to contain hyphen.
* feature: Glue: AWS Glue adds the ability to crawl DynamoDB tables.

## 2.271.1
* feature: ApplicationAutoScaling: The release adds support for custom resource auto scaling.
* feature: CostExplorer: AWS Cost Explorer provides you with Reserved Instance (RI) purchase recommendations based on your total cross-account Amazon EC2 and Amazon RDS usage. Starting today, linked accounts can also access custom RI purchase recommendations for specific linked accounts directly via AWS Cost Explorer API.
* feature: DMS: Added support for DmsTransfer endpoint type and support for re-validate option in table reload API.
* feature: Lambda: Add support for .NET Core 2.1 to Lambda.
* feature: TranscribeService: You can now specify an Amazon S3 output bucket to store the transcription of your audio file when you call the StartTranscriptionJob operation. 

## 2.270.1
* feature: MediaConvert: This release adds support for the following 1) users can specify tags to be attached to queues, presets, and templates during creation of those resources on MediaConvert. 2) users can now view the count of jobs in submitted state and in progressing state on a per queue basis.
* feature: ServerlessApplicationRepository: Added required fields and documentation updates for AWS Serverless Application Repository.

## 2.269.1
* bugfix: browser: Fixed an issue with the browser XML parser logic where the incorrect value may be returned if a complex shape (map, structure) had an immediate child and a nested descendant with the same tag name.
* feature: CORS: The SecretsManager service supports CORS. This change adds the service to the browser version of the SDK by default.
* feature: Pinpoint: This release of the Amazon Pinpoint SDK adds the ability to create complex segments and validate phone numbers for SMS messages. It also adds the ability to get or delete endpoints based on user IDs, remove attributes from endpoints, and list the defined channels for an app.
* feature: SageMaker: Amazon SageMaker NotebookInstances supports 'Updating' as a NotebookInstanceStatus.  In addition, DescribeEndpointOutput now includes Docker repository digest of deployed Model images.

## 2.268.1
* feature: ACM: Adds a "CertificateValidated" waiter to AWS Certificate Manager clients, which polls on a new certificate's validation state.
* feature: EC2: Added support for customers to tag EC2 Dedicated Hosts
* feature: Redshift: Feature 1 - On-demand cluster release version - When Amazon Redshift releases a new cluster version, you can choose to upgrade to that version immediately instead of waiting until your next maintenance window. You can also choose to roll back to a previous version. The two new APIs added for managing cluster release version are - ModifyClusterDbRevision, DescribeClusterDbRevisions. Feature 2 - Upgradeable reserved instance - You can now exchange one Reserved Instance for a new Reserved Instance with no changes to the terms of your existing Reserved Instance (term, payment type, or number of nodes). The two new APIs added for managing these upgrades are - AcceptReservedNodeExchange, GetReservedNodeExchangeOfferings. 

## 2.267.1
* feature: SSM: Execution History and StartAssociationOnce release for State Manager. Users now have the ability to view association execution history with DescribeAssociationExecutions and DescribeAssociationExecutionTargets. Users can also execute an association by calling StartAssociationOnce.

## 2.266.1
* feature: ElasticBeanstalk: Elastic Beanstalk adds "Suspended" health status to the EnvironmentHealthStatus enum type and updates document.
* feature: Lambda: Support for SQS as an event source.
* feature: StorageGateway: AWS Storage Gateway now enables you to use Server Message Block (SMB) protocol  to store and access objects in Amazon Simple Storage Service (S3). 

## 2.265.1
* feature: CloudFront: Unpublish delete-service-linked-role API.
* feature: CodePipeline: UpdatePipeline may now throw a LimitExceededException when adding or updating Source Actions that use periodic checks for change detection
* feature: Comprehend: This release gives customers the option to batch process a set of documents stored within an S3 bucket in addition to the existing synchronous nature of the current Comprehend API.

## 2.264.1
* feature: Inspector: Introduce four new APIs to view and preview Exclusions.  Exclusions show which intended security checks are excluded from an assessment, along with reasons and recommendations to fix.  The APIs are CreateExclusionsPreview, GetExclusionsPreview, ListExclusions, and DescribeExclusions.
* feature: S3: Add AllowQuotedRecordDelimiter to Amazon S3 Select API. Please refer to https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectSELECTContent.html for usage details.
* feature: SecretsManager: This release adds support for resource-based policies that attach directly to your secrets. These policies provide an additional way to control who can access your secrets and what they can do with them. For more information, see https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_resource-based-policies.html in the Secrets Manager User Guide.

## 2.263.1
* feature: AlexaForBusiness:  Introduce DeviceNotRegisteredException for AWSMoneypenny
* feature: AppStream: This API update enables customers to find their VPC private IP address and ENI ID associated with AppStream streaming sessions.

## 2.262.1
* feature: CloudDirectory: SDK release to support Flexible Schema initiative being carried out by Amazon Cloud Directory. This feature lets customers using new capabilities like: variant typed attributes, dynamic facets and AWS managed Cloud Directory schemas.

## 2.261.1
* feature: Macie: Amazon Macie is a security service that uses machine learning to automatically discover, classify, and protect sensitive data in AWS. With this release, we are launching the following Macie HTTPS API operations: AssociateMemberAccount, AssociateS3Resources, DisassociateMemberAccount, DisassociateS3Resources, ListMemberAccounts, ListS3Resources, and UpdateS3Resources. With these API operations you can issue HTTPS requests directly to the service.
* feature: Neptune: Deprecates the PubliclyAccessible parameter that is not supported by Amazon Neptune.
* feature: SSM: Adds Amazon Linux 2 support to Patch Manager

## 2.260.1
* feature: ACMPCA: CA Restore is a new feature within AWS Certificate Manager Private Certificate Authority (ACM PCA) that allows you to restore a private certificate authority that has been deleted. When you issue the DeleteCertificateAuthority call, you can now specify the number of days (7-30, with 30 being the default) in which the private certificate authority will remain in the DELETED state. During this time, the private certificate authority can be restored with the RestoreCertificateAuthority API call and then be returned to the PENDING_CERTIFICATE or DISABLED state, depending upon the state prior to deletion.  Summary of API Changes: 1). Added RestoreCertificateAuthority API call; 2). Added optional PermanentDeletionTimeInDays parameter to DeleteCertificateAuthority API call. If this parameter is not specified, the DeleteCertificateAuthority API call will use a 30 day restore period as default.
* feature: MediaLive: AWS Elemental MediaLive now makes Reserved Outputs and Inputs available through the AWS Management Console and API. You can reserve outputs and inputs with a 12 month commitment in exchange for discounted hourly rates. Pricing is available at https://aws.amazon.com/medialive/pricing/
* feature: RDS: This release adds a new parameter to specify the retention period for Performance Insights data for RDS instances. You can either choose 7 days (default) or 731 days. For more information, see Amazon RDS Documentation.

## 2.259.1
* bugfix: S3: Fixes edge case where event message lengths were sometimes incorrectly calculated.
* feature: MediaConvert: This release adds language code support according to the ISO-639-3 standard. Custom 3-character language codes are now supported on input and output for both audio and captions.

## 2.258.1
* bugfix: Core: Updates SDK to attempt to determine the Content-Length of a payload when an operation uses the unsigned-body trait. Content-Length will still not be calculated for non-file streams. This will allow file streams to be passed to MediaStoreData.putObject.
* feature: APIGateway: Support for PRIVATE endpoint configuration type
* feature: DynamoDB: Added two new fields SSEType and KMSMasterKeyArn to SSEDescription block in describe-table output.
* feature: IoTAnalytics: With this release, AWS IoT Analytics allows you to tag resources. Tags are metadata that you can create and use to manage your IoT Analytics resources. For more information about tagging, see AWS Tagging Strategies. For technical documentation, look for the tagging operations in the AWS IoT Analytics API reference or User Guide.

## 2.257.1
* feature: SSM: Added support for new parameter, CloudWatchOutputConfig, for SendCommand API. Users can now have RunCommand output sent to CloudWatchLogs.
* feature: ServiceCatalog: Introduced new length limitations for few of the product fields.

## 2.256.1
* feature: DeviceFarm: Adding VPCEndpoint support for Remote access. Allows customers to be able to access their private endpoints/services running in their VPC during remote access.
* feature: ECS: Introduces daemon scheduling capability to deploy one task per instance on selected instances in a cluster.  Adds a "force" flag to the DeleteService API to delete a service without requiring to scale down the number of tasks to zero.
* feature: S3: Adds support for S3 Select.

## 2.255.1
* feature: CloudDirectory: Amazon Cloud Directory now supports optional attributes on Typed Links, giving users the ability to associate and manage data on Typed Links. 
* feature: StorageGateway:  AWS Storage Gateway now enables you to create cached volumes and tapes with AWS KMS support.

## 2.254.1
* feature: MediaTailor: Fixes a bug in the request URIs for MediaTailor PlaybackConfiguration operations.

## 2.253.1
* feature: MediaLive: AWS Elemental MediaLive now makes channel log information available through Amazon CloudWatch Logs. You can set up each MediaLive channel with a logging level; when the channel is run, logs will automatically be published to your account on Amazon CloudWatch Logs

## 2.252.1
* feature: CostExplorer: Cost Explorer API is providing programmatic access to RI saving metrics to enable customers to optimize their reservations.
* feature: Polly: Amazon Polly adds new French voice - "Lea"
* feature: RDS: This release adds customizable processor features for RDS instances.
* feature: Shield: DDoS Response Team access management for AWS Shield

## 2.251.1
* feature: AppStream: Amazon AppStream 2.0 adds support for Google Drive for G Suite. With this feature, customers will be able to connect their G Suite accounts with AppStream 2.0 and enable Google Drive access for an AppStream 2.0 stack. Users of the stack can then link their Google Drive using their G Suite login credentials and use their existing files stored in Drive with their AppStream 2.0 applications. File changes will be synced automatically to Google cloud. 
* feature: EC2: You are now able to use instance storage (up to 3600 GB of NVMe based SSD) on M5 instances, the next generation of EC2's General Purpose instances in us-east-1, us-west-2, us-east-2, eu-west-1 and ca-central-1. M5 instances offer up to 96 vCPUs, 384 GiB of DDR4 instance memory, 25 Gbps in Network bandwidth and improved EBS and Networking bandwidth on smaller instance sizes and provide a balance of compute, memory and network resources for many applications.
* feature: EKS: Amazon Elastic Container Service for Kubernetes (Amazon EKS) is a fully managed service that makes it easy to deploy, manage, and scale containerized applications using Kubernetes on AWS. Amazon EKS runs the Kubernetes control plane for you across multiple AWS availability zones to eliminate a single point of failure. Amazon EKS is certified Kubernetes conformant so you can use existing tooling and plugins from partners and the Kubernetes community. Applications running on any standard Kubernetes environment are fully compatible and can be easily migrated to Amazon EKS. 
* feature: MediaConvert: This release adds the support for Common Media Application Format (CMAF) fragmented outputs, RF64 WAV audio output format, and HEV1 or HEVC1 MP4 packaging types when using HEVC in DASH or CMAF outputs.
* feature: SageMaker: Amazon SageMaker has added the ability to run hyperparameter tuning jobs. A hyperparameter tuning job will create and evaluate multiple training jobs while tuning algorithm hyperparameters, to optimize a customer specified objective metric.

## 2.250.1
* feature: DirectoryService: Added ResetUserPassword API. Customers can now reset their users' passwords without providing the old passwords in Simple AD and Microsoft AD.
* feature: Iot: We are releasing force CancelJob and CancelJobExecution functionalities to customers.
* feature: MediaTailor: AWS Elemental MediaTailor is a personalization and monetization service that allows scalable server-side ad insertion. The service enables you to serve targeted ads to viewers while maintaining broadcast quality in over-the-top (OTT) video applications. This SDK allows user access to the AWS Elemental MediaTailor configuration interface.
* feature: SNS: The SNS Subscribe API has been updated with two new optional parameters: Attributes and ReturnSubscriptionArn. Attributes is a map of subscription attributes which can be one or more of: FilterPolicy, DeliveryPolicy, and RawMessageDelivery. ReturnSubscriptionArn is a boolean parameter that overrides the default behavior of returning "pending confirmation" for subscriptions that require confirmation instead of returning the subscription ARN.

## 2.249.1
* feature: ELBv2: This release of Elastic Load Balancing introduces user authentication on Application Load Balancer.
* feature: Neptune: Amazon Neptune is a fast, reliable graph database service that makes it easy to build and run applications that work with highly connected datasets. Neptune supports popular graph models Property Graph and W3C's Resource Description Frame (RDF), and their respective query languages Apache TinkerPop Gremlin 3.3.2 and SPARQL 1.1. 

## 2.248.1
* feature: PI: Performance Insights is a feature of Amazon Relational Database Service (RDS) that helps you quickly assess the load on your database, and determine when and where to take action. You can use the SDK to retrieve Performance Insights data and integrate your monitoring solutions.

## 2.247.1
* feature: AppStream: This API update enables customers to control whether users can transfer data between their local devices and their streaming applications through file uploads and downloads, clipboard operations, or printing to local devices
* feature: ConfigService: AWS Config adds support for retention period, allowing you to specify a retention period for your AWS Config configuration items.
* feature: Glue: AWS Glue now sends a delay notification to Amazon CloudWatch Events when an ETL job runs longer than the specified delay notification threshold.
* feature: Iot: We are exposing DELETION_IN_PROGRESS as a new job status in regards to the release of DeleteJob API.

## 2.246.1
* feature: CodeBuild: AWS CodeBuild Adds Support for Windows Builds.
* feature: RDS: This release adds CloudWatch Logs integration capabilities to RDS Aurora MySQL clusters

## 2.245.1
* feature: ECS: Amazon Elastic Container Service (ECS) adds service discovery for services that use host or bridged network mode. ECS can now also register instance IPs for active tasks using bridged and host networking with Route 53, making them available via DNS.
* feature: Inspector: We are launching the ability to target all EC2 instances. With this launch, resourceGroupArn is now optional for CreateAssessmentTarget and UpdateAssessmentTarget. If resourceGroupArn is not specified, all EC2 instances in the account in the AWS region are included in the assessment target.

## 2.244.1
* feature: CloudFormation: 1) Filtered Update for StackSet based on Accounts and Regions: This feature will allow flexibility for the customers to roll out updates on a StackSet based on specific Accounts and Regions.   2) Support for customized ExecutionRoleName: This feature will allow customers to attach ExecutionRoleName to the StackSet thus ensuring more security and controlling the behavior of any AWS resources in the target accounts.

## 2.243.1
* feature: Iot: We are releasing DeleteJob and DeleteJobExecution APIs to allow customer to delete resources created using AWS IoT Jobs.

## 2.242.1
* feature: CognitoIdentityServiceProvider: Amazon Cognito User Pools now supports federation for users to sign up and sign in with any identity provider following the OpenID Connect standard. Amazon Cognito User Pools now returns the User Pool's Amazon Resource Name (ARN) from the CreateUserPool, UpdateUserPool, and DescribeUserPool APIs.
* feature: EC2: You are now able to use instance storage (up to 1800 GB of NVMe based SSD) on C5 instances, the next generation of EC2's compute optimized instances in us-east-1, us-west-2, us-east-2, eu-west-1 and ca-central-1. C5 instances offer up to 72 vCPUs, 144 GiB of DDR4 instance memory, 25 Gbps in Network bandwidth and improved EBS and Networking bandwidth on smaller instance sizes to deliver improved performance for compute-intensive workloads.You can now run bare metal workloads on EC2 with i3.metal instances. As a new instance size belonging to the I3 instance family, i3.metal instances have the same characteristics as other instances in the family, including NVMe SSD-backed instance storage optimized for low latency, very high random I/O performance, and high sequential read throughput. I3.metal instances are powered by 2.3 GHz Intel Xeon processors, offering 36 hyper-threaded cores (72 logical processors), 512 GiB of memory, and 15.2 TB of NVMe SSD-backed instance storage. These instances deliver high networking throughput and lower latency with up to 25 Gbps of aggregate network bandwidth using Elastic Network Adapter (ENA)-based Enhanced Networking.

## 2.241.1
* feature: ServiceCatalog: Users can now pass a new option to ListAcceptedPortfolioShares called portfolio-share-type with a value of AWS_SERVICECATALOG in order to access Getting Started Portfolios that contain selected products representing common customer use cases.

## 2.240.1
* feature: ConfigService: Update ResourceType enum with values for XRay resource

## 2.239.1
* feature: CodeBuild: Adding support for more override fields for StartBuild API, add support for idempotency token field  for StartBuild API in AWS CodeBuild.
* feature: IoT1ClickDevicesService: AWS IoT 1-Click makes it easy for customers to incorporate simple ready-to-use IoT devices into their workflows. These devices can trigger AWS Lambda functions that implement business logic. In order to build applications using AWS IoT 1-Click devices, programmers can use the AWS IoT 1-Click Devices API and the AWS IoT 1-Click Projects API. Learn more at https://aws.amazon.com/documentation/iot-1-click/
* feature: IoT1ClickProjects: AWS IoT 1-Click makes it easy for customers to incorporate simple ready-to-use IoT devices into their workflows. These devices can trigger AWS Lambda functions that implement business logic. In order to build applications using AWS IoT 1-Click devices, programmers can use the AWS IoT 1-Click Devices API and the AWS IoT 1-Click Projects API. Learn more at https://aws.amazon.com/documentation/iot-1-click/.
* feature: XML: Replaces XMLBuilder dependency with a light-weight XML builder.

## 2.238.1
* feature: Firehose: With this release, Amazon Kinesis Data Firehose can convert the format of your input data from JSON to Apache Parquet or Apache ORC before storing the data in Amazon S3. Parquet and ORC are columnar data formats that save space and enable faster queries compared to row-oriented formats like JSON.

## 2.237.1
* feature: GameLift: AutoScaling Target Tracking scaling simplification along with StartFleetActions and StopFleetActions APIs to suspend and resume automatic scaling at will.

## 2.236.1
* feature: Budgets: Updating the regex for the NumericValue fields.
* feature: EC2: Enable support for latest flag with Get Console Output
* feature: RDS: Changes to support the Aurora MySQL Backtrack feature.

## 2.235.1
* feature: EC2: Enable support for specifying CPU options during instance launch.

## 2.234.1
* feature: AlexaForBusiness: This release adds the new Device status "DEREGISTERED". This release also adds DEVICE_STATUS as the new DeviceEventType.
* feature: Budgets: "With this release, customers can use AWS Budgets to monitor how much of their Amazon EC2, Amazon RDS, Amazon Redshift, and Amazon ElastiCache instance usage is covered by reservations, and receive alerts when their coverage falls below the threshold they define."
* feature: ES: This change brings support for Reserved Instances to AWS Elasticsearch.
* feature: S3: Added BytesReturned details for Progress and Stats Events for Amazon S3 Select . 

## 2.233.1
* feature: GuardDuty: Amazon GuardDuty is adding five new API operations for creating and managing filters. For each filter, you can specify a criteria and an action. The action you specify is applied to findings that match the specified criteria.

## 2.232.1
* feature: AppSync: This release adds support for authorizing your AWS AppSync endpoint with an OpenID Connect compliant service and also to configure your AWS AppSync endpoint to log requests to Amazon CloudWatch Logs.
* feature: CodeBuild: CodeBuild now supports CORS. The CodeBuild service is now included in the default browser version of the SDK.
* feature: ConfigService: Update ResourceType enum with values for Lambda, ElasticBeanstalk, WAF and ElasticLoadBalancing resources

## 2.231.1
* feature: CodePipeline: Added support for webhooks with accompanying definitions as needed in the AWS CodePipeline API Guide.
* feature: EC2: Amazon EC2 Fleet is a new feature that simplifies the provisioning of Amazon EC2 capacity across different EC2 instance types, Availability Zones, and the On-Demand, Reserved Instance, and Spot Instance purchase models. With a single API call, you can now provision capacity to achieve desired scale, performance, and cost.
* feature: SSM: Added support for new parameter, DocumentVersion, for SendCommand API. Users can now specify version of SSM document to be executed on the target(s).

## 2.230.1
* feature: AlexaForBusiness: Adds ListDeviceEvents API to get a paginated list of device events (such as ConnectionStatus). This release also adds ConnectionStatus field to GetDevice and SearchDevices API.
* feature: DynamoDB: Adds two new APIs UpdateGlobalTableSettings and DescribeGlobalTableSettings. This update introduces new constraints in the CreateGlobalTable and UpdateGlobalTable APIs . Tables must have the same write capacity units. If Global Secondary Indexes exist then they must have the same write capacity units and key schema.
* feature: GuardDuty: You can disable the email notification when inviting GuardDuty members using the disableEmailNotification parameter in the InviteMembers operation.
* feature: Route53Domains: This release adds a SubmittedSince attribute to the ListOperations API, so you can list operations that were submitted after a specified date and time.
* feature: SageMaker: SageMaker has added support for VPC configuration for both Endpoints and Training Jobs. This allows you to connect from the instances running the Endpoint or Training Job to your VPC and any resources reachable in the VPC rather than being restricted to resources that were internet accessible.
* feature: WorkSpaces: Added new IP Access Control APIs, an API to change the state of a Workspace, and the ADMIN_MAINTENANCE WorkSpace state. With the new IP Access Control APIs, you can now create/delete IP Access Control Groups, add/delete/update rules for IP Access Control Groups, Associate/Disassociate IP Access Control Groups to/from a WorkSpaces Directory, and Describe IP Based Access Control Groups.

## 2.229.1
* feature: CodeDeploy: AWS CodeDeploy has a new exception that indicates when a GitHub token is not valid.
* feature: XRay: Added PutEncryptionConfig and GetEncryptionConfig APIs for managing data encryption settings. Use PutEncryptionConfig to configure X-Ray to use an AWS Key Management Service customer master key to encrypt trace data at rest.

## 2.228.1
* feature: ElasticBeanstalk: Support tracking Elastic Beanstalk resources in AWS Config.

## 2.227.1
* feature: AutoScalingPlans: The release adds the operation UpdateScalingPlan for updating a scaling plan and the support for tag filters as an application source.
* feature: IoTAnalytics: Introducing AWS IoT Analytics SDK. AWS IoT Analytics provides advanced data analysis for AWS IoT. It allows you to collect large amounts of device data, process messages, store them, and then query the data and run sophisticated analytics to make accurate decisions in your IoT applications and machine learning use cases. AWS IoT Analytics enables advanced data exploration through integration with Jupyter Notebooks and data visualization through integration with Amazon QuickSight.
* feature: Iot: Add IotAnalyticsAction which sends message data to an AWS IoT Analytics channel

## 2.226.1
* feature: Firehose: With this release, Amazon Kinesis Data Firehose allows you to tag your delivery streams. Tags are metadata that you can create and use to manage your delivery streams. For more information about tagging, see AWS Tagging Strategies. For technical documentation, look for the tagging operations in the Amazon Kinesis Firehose API reference.
* feature: MediaLive: With AWS Elemental MediaLive you can now output live channels as RTMP (Real-Time Messaging Protocol) and RTMPS as the encrypted version of the protocol (Secure, over SSL/TLS). RTMP is the preferred protocol for sending live streams to popular social platforms which  means you can send live channel content to social and sharing platforms in a secure and reliable way while continuing to stream to your own website, app or network.

## 2.225.1
* feature: CodePipeline: Added new SourceRevision structure to Execution Summary with accompanying definitions as needed in the AWS CodePipeline API Guide.
* feature: CostExplorer: Starting today, you can identify opportunities for Amazon RDS cost savings using AWS Cost Explorer's API to access your Amazon RDS Reserved Instance Purchase Recommendations
* feature: DeviceFarm: Adding support for VPCEndpoint feature. Allows customers to be able to access their private endpoints/services running in their VPC during test automation.
* feature: EC2: Added support for customers to see the time at which a Dedicated Host was allocated or released.
* feature: RDS: The ModifyDBCluster operation now includes an EngineVersion parameter. You can use this to upgrade the engine for a clustered database.
* feature: SSM: Added new APIs DeleteInventory and DescribeInventoryDeletions, for customers to delete their custom inventory data.

## 2.224.1
* feature: DMS: Native Change Data Capture start point and task recovery support in Database Migration Service.  
* feature: Glue: "AWS Glue now supports timeout values for ETL jobs. With this release, all new ETL jobs have a default timeout value of 48 hours. AWS Glue also now supports the ability to start a schedule or job events trigger when it is created."
* feature: MediaPackage: Adds a new OriginEndpoint package type CmafPackage in MediaPackage. Origin endpoints can now be configured to use the Common Media Application Format (CMAF) media streaming format. This version of CmafPackage only supports HTTP Live Streaming (HLS) manifests with fragmented MP4.
* feature: SSM: Added TooManyUpdates exception for AddTagsToResource and RemoveTagsFromResource API
* feature: WorkMail: Amazon WorkMail adds the ability to grant users and groups with "Full Access", "Send As" and "Send on Behalf" permissions on a given mailbox.

## 2.223.1
* feature: CloudDirectory: Cloud Directory customers can fetch attributes within a facet on an object with the new GetObjectAttributes API and can fetch attributes from multiple facets or objects with the BatchGetObjectAttributes operation.

## 2.222.1
* feature: Batch: Support for Timeout in SubmitJob and RegisterJobDefinition

## 2.221.1
* feature: ACM: AWS Certificate Manager has added support for AWS Certificate Manager Private Certificate Authority (CA). Customers can now request private certificates with the RequestCertificate API, and also export private certificates with the ExportCertificate API.
* feature: ACMPCA: AWS Certificate Manager (ACM) Private Certificate Authority (CA) is a managed private CA service that helps you easily and securely manage the lifecycle of your private certificates. ACM Private CA provides you a highly-available private CA service without the upfront investment and ongoing maintenance costs of operating your own private CA. ACM Private CA extends ACM's certificate management capabilities to private certificates, enabling you to manage public and private certificates centrally.
* feature: CloudWatch: The new GetMetricData API enables you to collect batch amounts of metric data and optionally perform math expressions on the data. With one GetMetricData call you can retrieve as many as 100 different metrics and a total of 100,800 data points.
* feature: ConfigService: AWS Config introduces multi-account multi-region data aggregation features. Customers can create an aggregator (a new resource type) in AWS Config that collects AWS Config data from multiple source accounts and regions into an aggregator account. Customers can aggregate data from individual account(s) or an organization and multiple regions. In this release, AWS Config adds several API's for multi-account multi-region data aggregation.
* feature: FMS: This release is the initial release version for AWS Firewall Manager, a new AWS service that makes it easy for customers to centrally configure WAF rules across all their resources (ALBs and CloudFront distributions) and across accounts.
* feature: S3: ONEZONE_IA storage class stores object data in only one Availability Zone at a lower price than STANDARD_IA. This SDK release provides API support for this new storage class.
* feature: SageMaker: SageMaker is now supporting many additional instance types in previously supported families for Notebooks, Training Jobs, and Endpoints. Training Jobs and Endpoints now support instances in the m5 family in addition to the previously supported instance families. For specific instance types supported please see the documentation for the SageMaker API.
* feature: SecretsManager: AWS Secrets Manager enables you to easily create and manage the secrets that you use in your customer-facing apps.  Instead of embedding credentials into your source code, you can dynamically query Secrets Manager from your app whenever you need credentials.  You can automatically and frequently rotate your secrets without having to deploy updates to your apps.  All secret values are encrypted when they're at rest with AWS KMS, and while they're in transit with HTTPS and TLS.
* feature: TranscribeService: Amazon Transcribe is an automatic speech recognition (ASR) service that makes it easy for developers to add speech to text capability to their applications. 

## 2.220.1
* feature: DeviceFarm: Added Private Device Management feature. Customers can now manage their private devices efficiently - view their status, set labels and apply profiles on them. Customers can also schedule automated tests and remote access sessions on individual instances in their private device fleet.
* feature: Lambda: added nodejs8.10 as a valid runtime
* feature: Translate: This release increases the maximum size of input text to 5,000 bytes. Amazon Translate now supports automatic language detection of the input text. The translation models have been improved to increase accuracy. See the documentation for more information.

## 2.219.1
* feature: APIGateway: Amazon API Gateway now supports resource policies for APIs making it easier to set access controls for invoking APIs.
* feature: CloudFront: You can now use a new Amazon CloudFront capability called Field-Level Encryption to further enhance the security of sensitive data, such as credit card numbers or personally identifiable information (PII) like social security numbers. CloudFront's field-level encryption further encrypts sensitive data in an HTTPS form using field-specific encryption keys (which you supply) before a POST request is forwarded to your origin. This ensures that sensitive data can only be decrypted and viewed by certain components or services in your application stack. Field-level encryption is easy to setup. Simply configure the fields that have to be further encrypted by CloudFront using the public keys you specify and you can reduce attack surface for your sensitive data.
* feature: ES: This adds Amazon Cognito authentication support to Kibana.

## 2.218.1
* feature: Connect: Amazon Connect is a contact center as a service (CCaS) solution that offers easy, self-service configuration and enables dynamic, personal, and natural customer engagement at any scale. With this release of the Amazon Connect SDK, Outbound APIs (StartOutboundVoiceContact, StopContact) are now generally available. This release supports CTR generation for calls generated through the new APIs. Additionally IAM permissions are supported for the new APIs. 

## 2.217.1
* bugfix: DocumentClient: Fixes a bug with the minified version of the browser SDK where sending Sets of data with the DynamoDB DocumentClient would cause an error to be returned from the service.
* feature: AlexaForBusiness: Adds operations for creating and managing address books of phone contacts for use in A4B managed shared devices.
* feature: CloudFormation: Enabling resource level permission control for StackSets APIs. Adding support for customers to use customized AdministrationRole to create security boundaries between different users.
* feature: Greengrass: Greengrass APIs now support creating Machine Learning resource types and configuring binary data as the input payload for Greengrass Lambda functions.
* feature: SSM: This Patch Manager release supports creating patch baselines for CentOS.

## 2.216.1
* feature: IAM: Add support for Longer Role Sessions. Four APIs manage max session duration: GetRole, ListRoles, CreateRole, and the new API UpdateRole. The max session duration integer attribute is measured in seconds.
* feature: MTurk: Added a new attribute "ActionsGuarded" to QualificationRequirement: This update allows MTurk Requester customers using the AWS SDK to control which Workers can see and preview their HITs. We now support hiding HITs from unqualified Workers' search results.
* feature: STS: Change utilizes the Max Session Duration attribute introduced for IAM Roles and allows STS customers to request session duration up to the Max Session Duration of 12 hours from AssumeRole based APIs.

## 2.215.1
* feature: ACM: AWS Certificate Manager has added support for customers to disable Certificate Transparency logging on a per-certificate basis.

## 2.214.1
* feature: DynamoDB: Point-in-time recovery (PITR) provides continuous backups of your DynamoDB table data. With PITR, you do not have to worry about creating, maintaining, or scheduling backups. You enable PITR on your table and your backup is available for restore at any point in time from the moment you enable it, up to a maximum of the 35 preceding days. PITR provides continuous backups until you explicitly disable it. For more information, see the Amazon DynamoDB Developer Guide.

## 2.213.1
* feature: AppStream: Feedback URL allows admins to provide a feedback link or a survey link for collecting user feedback while streaming sessions. When a feedback link is provided, streaming users will see a "Send Feedback" choice in their streaming session toolbar. On selecting this choice, user will be redirected to the link provided in a new browser tab. If a feedback link is not provided, users will not see the "Send Feedback" option. 
* feature: CodeBuild: Adding support for branch filtering when using webhooks with AWS CodeBuild. 
* feature: ECS: Amazon Elastic Container Service (ECS) now includes integrated Service Discovery using Route 53 Auto Naming. Customers can now specify a Route 53 Auto Naming service as part of an ECS service. ECS will register task IPs with Route 53, making them available via DNS in your VPC.

## 2.212.1
* feature: CloudWatchEvents: Added SQS FIFO queue target support
* feature: ConfigService: AWS Config adds support for BatchGetResourceConfig API, allowing you to batch-retrieve the current state of one or more of your resources.
* feature: CostExplorer: This launch will allow customers to access their Amazon EC2 Reserved Instance (RI) purchase recommendations programmatically via the AWS Cost Explorer API. 
* feature: ECS: Amazon ECS users can now mount a temporary volume in memory in containers and specify the shared memory that a container can use through the use of docker's 'tmpfs' and 'shm-size' features respectively. These fields can be specified under linuxParameters in ContainerDefinition in the Task Definition Template.
* feature: Glue: API Updates for DevEndpoint: PublicKey is now optional for CreateDevEndpoint. The new DevEndpoint field PrivateAddress will be populated for DevEndpoints associated with a VPC.
* feature: MediaLive: AWS Elemental MediaLive has added support for updating Inputs and Input Security Groups. You can update Input Security Groups at any time and it will update all channels using that Input Security Group. Inputs can be updated as long as they are not attached to a currently running channel.

## 2.211.1
* bugfix: dependency: Pins ieee754 to 1.1.8 to avoid timestamp issue reported in issue #1977

## 2.211.0
* feature: ElasticBeanstalk: AWS Elastic Beanstalk is launching a new public API named DescribeAccountAttributes which allows customers to access account level attributes. In this release, the API will support quotas for resources such as applications, application versions, and environments.

## 2.210.0
* feature: Organizations: This release adds additional reason codes to improve clarity to exceptions that can occur.
* feature: Pinpoint: With this release, you can delete endpoints from your Amazon Pinpoint projects. Customers can now specify one of their leased dedicated long or short codes to send text messages.
* feature: SageMaker: This release provides support for ml.p3.xlarge instance types for notebook instances.  Lifecycle configuration is now available to customize your notebook instances on start; the configuration can be reused between multiple notebooks.  If a notebook instance is attached to a VPC you can now opt out of internet access that by default is provided by SageMaker.

## 2.209.0
* feature: ServiceDiscovery: This release adds support for custom health checks, which let you check the health of resources that aren't accessible over the internet. For example, you can use a custom health check when the instance is in an Amazon VPC.

## 2.208.0
* feature: CloudHSMV2: CreateCluster can now take both 8 and 17 character Subnet IDs. DeleteHsm can now take both 8 and 17 character ENI IDs.
* feature: Iot: We added new fields to the response of the following APIs. (1) describe-certificate: added new generationId, customerVersion fields (2) describe-ca-certificate: added new generationId, customerVersion and lastModifiedDate fields (3) get-policy: added generationId, creationDate and lastModifiedDate fields
* feature: Redshift: DescribeClusterSnapshotsMessage with ClusterExists flag returns snapshots of existing clusters. Else both existing and deleted cluster snapshots are returned

## 2.207.0
* feature: ECS: Amazon Elastic Container Service (ECS) now supports container health checks. Customers can now specify a docker container health check command and parameters in their task definition. ECS will monitor, report and take scheduling action based on the health status.
* feature: MigrationHub: Unused key LABEL removed from ResourceAttrbute
* feature: Pinpoint: With this release, you can export endpoints from your Amazon Pinpoint projects. You can export a) all of the endpoints assigned to a project or b) the subset of endpoints assigned to a segment.

## 2.206.0
* feature: MediaLive: Updates API to model required traits and minimum/maximum constraints.

## 2.205.0
* feature: CloudWatchEvents: Added BatchParameters to the PutTargets API
* feature: EC2: Added support for modifying Placement Group association of instances via ModifyInstancePlacement API.
* feature: SSM: This Inventory release supports the status message details reported by the last sync for the resource data sync API.
* feature: ServiceCatalog: This release of ServiceCatalog adds the DeleteTagOption API.
* feature: StorageGateway: AWS Storage Gateway (File) support for two new file share attributes are added.           1. Users can specify the S3 Canned ACL to use for new objects created in the file share.         2. Users can create file shares for requester-pays buckets.

## 2.204.0
* feature: ApplicationAutoScaling: Application Auto Scaling now supports automatic scaling of SageMaker Production Variants on an Endpoint.

## 2.203.0
* feature: Route53: Added support for creating LBR rules using ap-northeast-3 region.

## 2.202.0
* feature: AppStream: This API update is to enable customers to copy their Amazon AppStream 2.0 images within and between AWS Regions

## 2.201.0
* feature: CostExplorer: Added GetReservationCoverage API for retrieving reservation coverage information.

## 2.200.0
* feature: CodeCommit: This release adds an API for adding a file directly to an AWS CodeCommit repository without requiring a Git client.
* feature: EC2: Adds support for tagging an EBS snapshot as part of the API call that creates the EBS snapshot
* feature: ServerlessApplicationRepository: Added support for delete-application API and the ability for developers to set a homepage for their application. The homepage is a URL with more information about the application, for example the location of your GitHub repository for the application. 

## 2.199.0
* feature: AutoScaling: Amazon EC2 Auto Scaling support for service-linked roles
* feature: WAF: The new PermissionPolicy APIs in AWS WAF Regional allow customers to attach resource-based policies to their entities.
* feature: WAFRegional: The new PermissionPolicy APIs in AWS WAF Regional allow customers to attach resource-based policies to their entities.

## 2.198.0
* feature: ConfigService: With this release, AWS Config updated the ConfigurationItemStatus enum values. The values prior to this update did not represent appropriate values returned by GetResourceConfigHistory. You must update your code to enumerate the new enum values so this is a breaking change.  To map old properties to new properties, use the following descriptions: New discovered resource - Old property: Discovered, New property: ResourceDiscovered. Updated resource - Old property: Ok, New property: OK. Deleted resource - Old property: Deleted, New property: ResourceDeleted or ResourceDeletedNotRecorded. Not-recorded resource - Old property: N/A, New property: ResourceNotRecorded or ResourceDeletedNotRecorded.

## 2.197.0
* feature: RDS: Updates RDS API to indicate whether a DBEngine supports read replicas.

## 2.196.0
* feature: GameLift: Updates to allow Fleets to run on On-Demand or Spot instances.
* feature: MediaConvert: Nielsen ID3 tags can now be inserted into transport stream (TS) and HLS outputs. For more information on Nielsen configuration you can go to https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobs.html#jobs-nielsenconfiguration

## 2.195.0
* feature: AppSync: AWS AppSync now supports for None Data Source, CreateApiKey now supports setting expiration on API keys, new API UpdateApiKey supports updating expiration on API keys. 
* feature: LexModelBuildingService: Amazon Lex now provides the ability to export and import your Amazon Lex chatbot definition as a JSON file.

## 2.194.0
* feature: Route53: Added support for creating Private Hosted Zones and metric-based healthchecks in the ap-northeast-3 region for whitelisted customers.

## 2.193.0
* feature: CognitoIdentityServiceProvider: Support for user migration using AWS Lambda trigger. Support to obtain signing certificate for user pools.
* feature: EC2: Network interfaces now supply the following additional status of "associated" to better distinguish the current status.
* feature: GuardDuty: Added PortProbeAction information to the Action section of the port probe-type finding.
* feature: KMS: This release of AWS Key Management Service includes support for InvalidArnException in the RetireGrant API.

## 2.192.0
* feature: EC2: Users can now better understand the longer ID opt-in status of their account using the two new APIs DescribeAggregateIdFormat and DescribePrincipalIdFormat
* feature: LexModelBuildingService: You can now define a response for your Amazon Lex chatbot directly from the AWS console. A response consists of messages dynamically selected from a group of pre-defined messages, populated by the developer.
* feature: LexRuntime: You can now define a response for your Amazon Lex chatbot directly from the AWS console. A response consists of messages dynamically selected from a group of pre-defined messages, populated by the developer.

## 2.191.0
* feature: AppStream: Adds support for allowing customers to provide a redirect URL for a stack. Users will be redirected to the link provided by the admin at the end of their streaming session. 
* feature: Budgets: Making budgetLimit and timePeriod optional, and updating budgets docs. 
* feature: DMS: This release includes the addition of two new APIs: describe replication instance task logs and reboot instance. The first allows user to see how much storage each log for a task on a given instance is occupying. The second gives users the option to reboot the application software on the instance and force a fail over for MAZ instances to test robustness of their integration with our service. 
* feature: DirectoryService: Updated the regex of some input parameters to support longer EC2 identifiers.
* feature: DynamoDB: Amazon DynamoDB now supports server-side encryption using a default service key (alias/aws/dynamodb) from the AWS Key Management Service (KMS). AWS KMS is a service that combines secure, highly available hardware and software to provide a key management system scaled for the cloud. AWS KMS is used via the AWS Management Console or APIs to centrally create encryption keys, define the policies that control how keys can be used, and audit key usage to prove they are being used correctly. For more information, see the Amazon DynamoDB Developer Guide.
* feature: GameLift: Amazon GameLift FlexMatch added the StartMatchBackfill API.  This API allows developers to add new players to an existing game session using the same matchmaking rules and player data that were used to initially create the session.
* feature: MediaLive: AWS Elemental MediaLive has added support for updating channel settings for idle channels. You can now update channel name, channel outputs and output destinations, encoder settings, user role ARN, and input specifications. Channel settings can be updated in the console or with API calls. Please note that running channels need to be stopped before they can be updated. We've also deprecated the 'Reserved' field.
* feature: MediaStore: AWS Elemental MediaStore now supports per-container CORS configuration.

## 2.190.0
* feature: Glue: This new feature will now allow customers to add a customized json classifier. They can specify a json path to indicate the object, array or field of the json documents they'd like crawlers to inspect when they crawl json files. 
* feature: SSM: This Patch Manager release supports configuring Linux repos as part of patch baselines, controlling updates of non-OS security packages and also creating patch baselines for SUSE12
* feature: ServiceCatalog: This release of Service Catalog adds SearchProvisionedProducts API and ProvisionedProductPlan APIs.
* feature: ServiceDiscovery: This release adds support for registering CNAME record types and creating Route 53 alias records that route traffic to Amazon Elastic Load Balancers using Amazon Route 53 Auto Naming APIs.

## 2.189.0
* feature: Kinesis: Using ListShards a Kinesis Data Streams customer or client can get information about shards in a data stream (including meta-data for each shard) without obtaining data stream level information.
* feature: OpsWorks: AWS OpsWorks Stacks supports EBS encryption and HDD volume types. Also, a new DescribeOperatingSystems API is available, which lists all operating systems supported by OpsWorks Stacks.

## 2.188.0
* feature: DeviceFarm: Add InteractionMode in CreateRemoteAccessSession for DirectDeviceAccess feature.
* feature: MediaLive: Add InputSpecification to CreateChannel (specification of input attributes is used for channel sizing and affects pricing);  add NotFoundException to DeleteInputSecurityGroups.

## 2.187.0
* feature: AlexaForBusiness: Supports new field for DeviceStatusInfo which provides details about the DeviceStatus following a DeviceSync operation.
* feature: CodeBuild: Adding support for Shallow Clone and GitHub Enterprise in AWS CodeBuild.
* feature: GuardDuty: Added the missing AccessKeyDetails object to the resource shape.
* feature: Lambda: AWS Lambda now supports Revision ID on your function versions and aliases, to track and apply conditional updates when you are updating your function version or alias resources.
* feature: MetadataService: Allow environmental disabling of the AWS.MetadataService client by setting the AWS_EC2_METADATA_DISABLED environment variable to a truthy value.

## 2.186.0
* feature: Budgets: Add additional costTypes: IncludeDiscount, UseAmortized,  to support finer control for different charges included in a cost budget.

## 2.185.0
* feature: Glue: New AWS Glue DataCatalog APIs to manage table versions and a new feature to skip archiving of the old table version when updating table.
* feature: TranscribeService: Amazon Transcribe Public Preview Release

## 2.184.0
* feature: SageMaker: CreateTrainingJob and CreateEndpointConfig now supports KMS Key for volume encryption. 

## 2.183.0
* feature: ApplicationAutoScaling: Application Auto Scaling is adding support for Target Tracking Scaling for ECS services.
* feature: AutoScalingPlans: AWS Auto Scaling enables you to quickly discover all of the scalable resources underlying your application and set up application scaling in minutes using built-in scaling recommendations.
* feature: RDS: With this release you can now integrate RDS DB instances with CloudWatch Logs. We have added parameters to the operations for creating and modifying DB instances (for example CreateDBInstance) to allow you to take advantage of this capability through the CLI and API. Once you enable this feature, a stream of log events will publish to CloudWatch Logs for each log type you enable.

## 2.182.0
* feature: Lambda: Support for creating Lambda Functions using 'dotnetcore2.0' and 'go1.x'. 

## 2.181.0
* feature: Glue: Support is added to generate ETL scripts in Scala which can now be run by  AWS Glue ETL jobs. In addition, the trigger API now supports firing when any conditions are met (in addition to all conditions). Also, jobs can be triggered based on a "failed" or "stopped" job run (in addition to a "succeeded" job run). 

## 2.180.0
* feature: ELB: Added OperationNotPermittedException to indicate that you cannot create a classic load balancer while deleting the Elastic Load Balancing service-linked role.
* feature: ELBv2: Added OperationNotPermittedException to indicate that you cannot create a load balancer while deleting the Elastic Load Balancing service-linked role.
* feature: RDS: Read Replicas for Amazon RDS for MySQL, MariaDB, and PostgreSQL now support Multi-AZ deployments.Amazon RDS Read Replicas enable you to create one or more read-only copies of your database instance within the same AWS Region or in a different AWS Region. Updates made to the source database are asynchronously copied to the Read Replicas. In addition to providing scalability for read-heavy workloads, you can choose to promote a Read Replica to become standalone a DB instance when needed.Amazon RDS Multi-AZ Deployments provide enhanced availability for database instances within a single AWS Region. With Multi-AZ, your data is synchronously replicated to a standby in a different Availability Zone (AZ). In case of an infrastructure failure, Amazon RDS performs an automatic failover to the standby, minimizing disruption to your applications.You can now combine Read Replicas with Multi-AZ as part of a disaster recovery strategy for your production databases. A well-designed and tested plan is critical for maintaining business continuity after a disaster. Since Read Replicas can also be created in different regions than the source database, your Read Replica can be promoted to become the new production database in case of a regional disruption.You can also combine Read Replicas with Multi-AZ for your database engine upgrade process. You can create a Read Replica of your production database instance and upgrade it to a new database engine version. When the upgrade is complete, you can stop applications, promote the Read Replica to a standalone database instance and switch over your applications. Since the database instance is already a Multi-AZ deployment, no additional steps are needed.For more information, see the Amazon RDS User Guide.

## 2.179.0
* feature: DirectoryService: On October 24 we introduced AWS Directory Service for Microsoft Active Directory (Standard Edition), also known as AWS Microsoft AD (Standard Edition), which is a managed Microsoft Active Directory (AD) that is optimized for small and midsize businesses (SMBs). With this SDK release, you can now create an AWS Microsoft AD directory using API. This enables you to run typical SMB workloads using a cost-effective, highly available, and managed Microsoft AD in the AWS Cloud.

## 2.178.0
* feature: CodeDeploy: The AWS CodeDeploy API was updated to support DeleteGitHubAccountToken, a new method that deletes a GitHub account connection.
* feature: Route53: This release adds an exception to the CreateTrafficPolicyVersion API operation.

## 2.177.0
* feature: Inspector: Added 2 new attributes to the DescribeAssessmentTemplate response, indicating the total number of assessment runs and last assessment run ARN (if present.)

## 2.176.0
* feature: WorkSpaces: Modify WorkSpaces have been updated with flexible storage and switching of hardware bundles feature. The following configurations have been added to ModifyWorkSpacesProperties: storage and compute. This update provides the capability to configure the storage of a WorkSpace. It also adds the capability of switching hardware bundle of a WorkSpace by specifying an eligible compute (Value, Standard, Performance, Power).

## 2.175.0
* feature: EC2: This release fixes an issue with tags not showing in DescribeAddresses responses.
* feature: ECS: Amazon ECS users can now set a health check initialization wait period of their ECS services, the services that are associated with an Elastic Load Balancer (ELB) will wait for a period of time before the ELB become healthy. You can now configure this in Create and Update Service.
* feature: Inspector: PreviewAgents API now returns additional fields within the AgentPreview data type. The API now shows the agent health and availability status for all instances included in the assessment target. This allows users to check the health status of Inspector Agents before running an assessment. In addition, it shows the instance ID, hostname, and IP address of the targeted instances.
* feature: SageMaker: SageMaker Models no longer support SupplementalContainers.  API's that have been affected are CreateModel and DescribeModel.

## 2.174.0
* feature: CodeBuild: Adding support allowing AWS CodeBuild customers to select specific curated image versions.
* feature: EC2: Elastic IP tagging enables you to add key and value metadata to your Elastic IPs so that you can search, filter, and organize them according to your organization's needs.
* feature: KinesisAnalytics: Kinesis Analytics now supports AWS Lambda functions as output.

## 2.173.0
* feature: ConfigService: Update ResourceType enum with values for WAF, WAFRegional, and CloudFront resources
* feature: Iot: This release adds support for code signed Over-the-air update functionality for Amazon FreeRTOS. Users can now create and schedule Over-the-air updates to their Amazon FreeRTOS devices using these new APIs. 

## 2.172.0
* feature: APIGateway: API Gateway now adds support for calling API with compressed payloads using one of the supported content codings, tagging an API stage for cost allocation, and returning API keys from a custom authorizer for use with a usage plan.
* feature: Route53: Route 53 added support for a new China (Ningxia) region, cn-northwest-1. You can now specify cn-northwest-1 as the region for latency-based or geoproximity routing. Route 53 also added support for a new EU (Paris) region, eu-west-3. You can now associate VPCs in eu-west-3 with private hosted zones and create alias records that route traffic to resources in eu-west-3.

## 2.171.0
* feature: AppStream: This API update is to enable customers to add tags to their Amazon AppStream 2.0 resources

## 2.170.0
* feature: APIGateway: Adds support for Cognito Authorizer scopes at the API method level.

## 2.169.0
* feature: WorkMail: Today, Amazon WorkMail released an administrative SDK and enabled AWS CloudTrail integration. With the administrative SDK, you can natively integrate WorkMail with your existing services. The SDK enables programmatic user, resource, and group management through API calls. This means your existing IT tools and workflows can now automate WorkMail management, and third party applications can streamline WorkMail migrations and account actions. 

## 2.168.0
* feature: CognitoIdentityServiceProvider: Exposing the hosted UI domain name for a user pool that has a domain configured.
* feature: LexModelBuildingService: The GetBotChannelAssociation API now returns the status and failure reason, if any, for a bot channel.
* feature: SageMaker: CreateModel API Update:  The request parameter 'ExecutionRoleArn' has changed from optional to required.

## 2.167.0
* feature: AppStream: This API update is to support the feature that allows customers to automatically consume the latest Amazon AppStream 2.0 agent as and when published by AWS.
* feature: CloudWatch: With this launch, you can now create a CloudWatch alarm that alerts you when M out of N datapoints of a metric are breaching your predefined threshold, such as three out of five times in any given five minutes interval or two out of six times in a thirty minutes interval. When M out of N datapoints are not breaching your threshold in an interval, the alarm will be in OK state. Please note that the M datapoints out of N datapoints in an interval can be of any order and does not need to be consecutive. Consequently, you can now get alerted even when the spikes in your metrics are intermittent over an interval.

## 2.166.0
* feature: ES: Added support for encryption of data at rest on Amazon Elasticsearch Service using AWS KMS
* feature: SES: Customers can customize the emails that Amazon SES sends when verifying new identities. This feature is helpful for developers whose applications send email through Amazon SES on behalf of their customers.

## 2.165.0
* feature: CloudDirectory: Amazon Cloud Directory makes it easier for you to apply schema changes across your directories with in-place schema upgrades. Your directories now remain available while backward-compatible schema changes are being applied, such as the addition of new fields. You also can view the history of your schema changes in Cloud Directory by using both major and minor version identifiers, which can help you track and audit schema versions across directories.
* feature: SageMaker: Initial waiters for common SageMaker workflows.

## 2.164.0
* feature: Iot: Add error action API for RulesEngine. 
* feature: ServiceCatalog: ServiceCatalog has two distinct personas for its use, an "admin" persona (who creates sets of products with different versions and prescribes who has access to them) and an "end-user" persona (who can launch cloud resources based on the configuration data their admins have given them access to).  This API update will allow admin users to deactivate/activate product versions, end-user will only be able to access and launch active product versions. 
* feature: ServiceDiscovery: Amazon Route 53 Auto Naming lets you configure public or private namespaces that your microservice applications run in. When instances of the service become available, you can call the Auto Naming API to register the instance, and Amazon Route 53 automatically creates up to five DNS records and an optional health check. Clients that submit DNS queries for the service receive an answer that contains up to eight healthy records.

## 2.163.0
* feature: Budgets: Add additional costTypes to support finer control for different charges included in a cost budget.

## 2.162.0
* feature: SageMaker: Preparing to release updated waiters week of December 4, 2017 for all supported SDKs.

## 2.161.0
* feature: APIGateway: Added support Private Integration and VPC Link features in API Gateway. This allows to create an API with the API Gateway private integration, thus providing clients access to HTTP/HTTPS resources in an Amazon VPC from outside of the VPC through a VpcLink resource.
* feature: AlexaForBusiness: Alexa for Business is now generally available for production use. Alexa for Business makes it easy for you to use Alexa in your organization. The Alexa for Business SDK gives you APIs to manage Alexa devices, enroll users, and assign skills at scale. For more information about Alexa for Business, go to https://aws.amazon.com/alexaforbusiness 
* feature: Cloud9: Adds support for creating and managing AWS Cloud9 development environments. AWS Cloud9 is a cloud-based integrated development environment (IDE) that you use to write, run, and debug code.
* feature: EC2: Adds the following updates: 1. Spread Placement ensures that instances are placed on distinct hardware in order to reduce correlated failures. 2. Inter-region VPC Peering allows customers to peer VPCs across different AWS regions without requiring additional gateways, VPN connections or physical hardware 
* feature: Lambda: AWS Lambda now supports the ability to set the concurrency limits for individual functions, and increasing memory to 3008MB.
* feature: ServerlessApplicationRepository: First release of the AWS Serverless Application Repository SDK

## 2.160.0
* feature: AutoScaling: You can now use Auto Scaling with EC2 Launch Templates via the CreateAutoScalingGroup and UpdateAutoScalingGroup APIs.
* feature: EC2: Adds the following updates: 1. T2 Unlimited enables high CPU performance for any period of time whenever required 2. You are now able to create and launch EC2 m5 and h1 instances
* feature: Lightsail: This release adds support for load balancer and TLS/SSL certificate management. This set of APIs allows customers to create, manage, and scale secure load balanced applications on Lightsail infrastructure. To provide support for customers who manage their DNS on Lightsail, we've added the ability create an Alias A type record which can point to a load balancer DNS name via the CreateDomainEntry API http://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateDomainEntry.html.
* feature: ResourceGroups: AWS Resource Groups lets you search and group AWS resources from multiple services based on their tags.
* feature: SSM: This release updates AWS Systems Manager APIs to enable executing automations at controlled rate, target resources in a resource groups and execute entire automation at once or single step at a time. It is now also possible to use YAML, in addition to JSON, when creating Systems Manager documents.
* feature: WAF: This release adds support for rule group and managed rule group. Rule group is a container of rules that customers can create, put rules in it and associate the rule group to a WebACL. All rules in a rule group will function identically as they would if each rule was individually associated to the WebACL. Managed rule group is a pre-configured rule group composed by our security partners and made available via the AWS Marketplace. Customers can subscribe to these managed rule groups, associate the managed rule group to their WebACL and start using them immediately to protect their resources.
* feature: WAFRegional: This release adds support for rule group and managed rule group. Rule group is a container of rules that customers can create, put rules in it and associate the rule group to a WebACL. All rules in a rule group will function identically as they would if each rule was individually associated to the WebACL. Managed rule group is a pre-configured rule group composed by our security partners and made available via the AWS Marketplace. Customers can subscribe to these managed rule groups, associate the managed rule group to their WebACL and start using them immediately to protect their resources.

## 2.159.0
* feature: Comprehend: Amazon Comprehend is an AWS service for gaining insight into the content of text and documents . It develops insights by recognizing the entities, key phrases, language, sentiments, and other common elements in a document. For more information, go to the Amazon Comprehend product page. To get started, see the Amazon Comprehend Developer Guide.
* feature: DynamoDB: Amazon DynamoDB now supports the following features: Global Table and On-Demand Backup. Global Table is a fully-managed, multi-region, multi-master database. DynamoDB customers can now write anywhere and read anywhere with single-digit millisecond latency by performing database operations closest to where end users reside. Global Table also enables customers to disaster-proof their applications, keeping them running and data accessible even in the face of natural disasters or region disruptions. Customers can set up Global Table with just a few clicks in the AWS Management Console-no application rewrites required. On-Demand Backup capability is to protect data from loss due to application errors, and meet customers' archival needs for compliance and regulatory reasons. Customers can backup and restore their DynamoDB table data anytime, with a single-click in the AWS management console or a single API call. Backup and restore actions execute with zero impact on table performance or availability. For more information, see the Amazon DynamoDB Developer Guide.
* feature: ECS: Amazon Elastic Container Service (Amazon ECS) released a new launch type for running containers on a serverless infrastructure. The Fargate launch type allows you to run your containerized applications without the need to provision and manage the backend infrastructure. Just register your task definition and Fargate launches the container for you. 
* feature: Glacier: This release includes support for Glacier Select, a new feature that allows you to filter and analyze your Glacier archives and store the results in a user-specified S3 location.
* feature: Greengrass: Greengrass OTA feature allows updating Greengrass Core and Greengrass OTA Agent. Local Resource Access feature allows Greengrass Lambdas to access local resources such as peripheral devices and volumes.
* feature: IoTJobsDataPlane: This release adds support for new the service called Iot Jobs. This client is built for the device SDK to use Iot Jobs Device specific APIs.
* feature: Iot: This release adds support for a number of new IoT features, including AWS IoT Device Management (Jobs, Fleet Index and Thing Registration), Thing Groups, Policies on Thing Groups, Registry & Job Events, JSON Logs, Fine-Grained Logging Controls, Custom Authorization and AWS Service Authentication Using X.509 Certificates.
* feature: KinesisVideo: Announcing Amazon Kinesis Video Streams, a fully managed video ingestion and storage service. Kinesis Video Streams makes it easy to securely stream video from connected devices to AWS for machine learning, analytics, and processing. You can also stream other time-encoded data like RADAR and LIDAR signals using Kinesis Video Streams.
* feature: KinesisVideoArchivedMedia: Announcing Amazon Kinesis Video Streams, a fully managed video ingestion and storage service. Kinesis Video Streams makes it easy to securely stream video from connected devices to AWS for machine learning, analytics, and processing. You can also stream other time-encoded data like RADAR and LIDAR signals using Kinesis Video Streams.
* feature: KinesisVideoMedia: Announcing Amazon Kinesis Video Streams, a fully managed video ingestion and storage service. Kinesis Video Streams makes it easy to securely stream video from connected devices to AWS for machine learning, analytics, and processing. You can also stream other time-encoded data like RADAR and LIDAR signals using Kinesis Video Streams.
* feature: Rekognition: This release introduces Amazon Rekognition support for video analysis.
* feature: S3: This release includes support for Glacier Select, a new feature that allows you to filter and analyze  your Glacier storage class objects and store the results in a user-specified S3 location.
* feature: SageMaker: Amazon SageMaker is a fully-managed service that enables data scientists and developers to quickly and easily build, train, and deploy machine learning models, at scale.
* feature: SageMakerRuntime: Amazon SageMaker is a fully-managed service that enables data scientists and developers to quickly and easily build, train, and deploy machine learning models, at scale.
* feature: Translate: Public preview release of Amazon Translate and the Amazon Translate Developer Guide. For more information, see the Amazon Translate Developer Guide.

## 2.158.0
* feature: APIGateway: Changes related to CanaryReleaseDeployment feature. Enables API developer to create a deployment as canary deployment and test API changes with percentage of customers before promoting changes to all customers.
* feature: AppSync: AWS AppSync is an enterprise-level, fully managed GraphQL service with real-time data synchronization and offline programming features.
* feature: Batch: Add support for Array Jobs which allow users to easily submit many copies of a job with a single API call.  This change also enhances the job dependency model to support N_TO_N and sequential dependency chains. The ListJobs and DescribeJobs APIs now have the ability to list or describe the status of entire Array Jobs or individual elements within the array.
* feature: CodeDeploy: Support for AWS Lambda function deployment - AWS CodeDeploy now supports the deployment of AWS Lambda functions. A Lambda deployment uses a Lambda function alias to shift traffic to a new version. You select a deployment configuration that specifies exactly how traffic shifts to your new version. Success of a deployment can be validated using Lambda functions that are referenced by the deployment. This provides the opportunity to rollback if necessary.
* feature: CognitoIdentityServiceProvider: AWS Cognito SDK has been updated to support new Cognito user-pool objects and operations for advanced security
* feature: EC2: Adds the following updates: 1. You are now able to host a service powered by AWS PrivateLink to provide private connectivity to other VPCs. You are now also able to create endpoints to other services powered by PrivateLink including AWS services, Marketplace Seller services or custom services created by yourself or other AWS VPC customers. 2. You are now able to save launch parameters in a single template that can be used with Auto Scaling, Spot Fleet, Spot, and On Demand instances. 3. You are now able to launch Spot instances via the RunInstances API, using a single additional parameter. RunInstances will response synchronously with an instance ID should capacity be available for your Spot request. 4. A simplified Spot pricing model which delivers low, predictable prices that adjust gradually, based on long-term trends in supply and demand. 5. Amazon EC2 Spot can now hibernate Amazon EBS-backed instances in the event of an interruption, so your workloads pick up from where they left off. Spot can fulfill your request by resuming instances from a hibernated state when capacity is available.
* feature: GuardDuty: Enable Amazon GuardDuty to continuously monitor and process AWS data sources to identify threats to your AWS accounts and workloads.  You can add customization by uploading additional threat intelligence lists and IP safe lists. You can list security findings, suspend, and disable the service. 
* feature: Lambda: Lambda aliases can now shift traffic between two function versions, based on preassigned weights.
* feature: MQ: This is the initial SDK release for Amazon MQ. Amazon MQ is a managed message broker service for Apache ActiveMQ that makes it easy to set up and operate message brokers in the cloud. 
* feature: credentials_provider: Add general purpose RemoteCredentials and derive ECSCredentials from it

## 2.157.0
* feature: MediaConvert: AWS Elemental MediaConvert is a file-based video conversion service that transforms media into formats required for traditional broadcast and for internet streaming to multi-screen devices.
* feature: MediaLive: AWS Elemental MediaLive is a video service that lets you easily create live outputs for broadcast and streaming delivery.
* feature: MediaPackage: AWS Elemental MediaPackage is a just-in-time video packaging and origination service that lets you format highly secure and reliable live outputs for a variety of devices.
* feature: MediaStore: AWS Elemental MediaStore is an AWS storage service optimized for media. It gives you the performance, consistency, and low latency required to deliver live and on-demand video content. AWS Elemental MediaStore acts as the origin store in your video workflow.
* feature: MediaStoreData: AWS Elemental MediaStore is an AWS storage service optimized for media. It gives you the performance, consistency, and low latency required to deliver live and on-demand video content. AWS Elemental MediaStore acts as the origin store in your video workflow.

## 2.156.0
* bugfix: Presigner: Update presigner to only hoist headers in v2
* feature: ACM: AWS Certificate Manager now supports the ability to import domainless certs and additional Key Types as well as an additional validation method for DNS.

## 2.155.0
* feature: APIGateway: Add support for Access logs and customizable integration timeouts
* feature: CloudFormation: 1) Instance-level parameter overrides (CloudFormation-StackSet feature): This feature will allow the customers to override the template parameters on specific stackInstances. Customers will also have ability to update their existing instances with/without parameter-overrides using a new API "UpdateStackInstances"                                                                                                                                                                                                                                                         2) Add support for SSM parameters in CloudFormation - This feature will allow the customers to use Systems Manager parameters in CloudFormation templates. They will be able to see values for these parameters in Describe APIs.
* feature: CodeBuild: Adding support for accessing Amazon VPC resources from AWS CodeBuild, dependency caching and build badges.
* feature: EMR: Enable Kerberos on Amazon EMR. 
* feature: Rekognition: This release includes updates to Amazon Rekognition for the following APIs. The new DetectText API allows you to recognize and extract textual content from images. Face Model Versioning has been added to operations that deal with face detection.
* feature: Shield: The AWS Shield SDK has been updated in order to support Elastic IP address protections, the addition of AttackProperties objects in DescribeAttack responses, and a new GetSubscriptionState operation.
* feature: StorageGateway: AWS Storage Gateway now enables you to get notification when all your files written to your NFS file share have been uploaded to Amazon S3. Storage Gateway also enables guessing of the MIME type for uploaded objects based on file extensions.
* feature: XRay: Added automatic pagination support for AWS X-Ray APIs in the SDKs that support this feature.

## 2.154.0
* feature: CodeCommit: AWS CodeCommit now supports pull requests. You can use pull requests to collaboratively review code changes for minor changes or fixes, major feature additions, or new versions of your released software.
* feature: CostExplorer: The AWS Cost Explorer API gives customers programmatic access to AWS cost and usage information, allowing them to perform adhoc queries and build interactive cost management applications that leverage this dataset.
* feature: Firehose: This release includes a new Kinesis Firehose feature that supports Splunk as Kinesis Firehose delivery destination. You can now use Kinesis Firehose to ingest real-time data to Splunk in a serverless, reliable, and salable manner. This release also includes a new feature that allows you to configure Lambda buffer size in Kinesis Firehose data transformation feature. You can now customize the data buffer size before invoking Lambda function in Kinesis Firehose for data transformation. This feature allows you to flexibly trade-off processing and delivery latency with cost and efficiency based on your specific use cases and requirements. 
* feature: Kinesis: Customers can now obtain the important characteristics of their stream with DescribeStreamSummary. The response will not include the shard list for the stream but will have the number of open shards, and all the other fields included in the DescribeStream response.
* feature: WorkDocs: DescribeGroups API and miscellaneous enhancements

## 2.153.0
* feature: ApplicationAutoScaling: This SDK update contains support for Target Tracking scaling for EC2 Spot Fleet. It allows you to scale an EC2 Spot Fleet using a Target Tracking scaling policy.
* feature: DMS: Support for migration task assessment. Support for data validation after the migration.
* feature: RDS: Amazon RDS now supports importing MySQL databases by using backup files from Amazon S3.
* feature: S3: Added ORC to the supported S3 Inventory formats.

## 2.152.0
* bugfix: S3: Reverts default signatureVersion for S3 presigned URLs to the lowest signatureVersion the region supports. 2.150.0 changed the default signatureVersion of all presigned URLs to v4. This change does not affect S3 clients that had the signatureVersion explicitly defined.
* feature: ApplicationAutoScaling: Application Auto Scaling now supports automatic scaling of Amazon Aurora replicas
* feature: EC2: You are now able to create and launch EC2 x1e smaller instance sizes
* feature: Glue: API update for AWS Glue. New crawler configuration attribute enables customers to specify crawler behavior. New XML classifier enables classification of XML data.
* feature: Organizations: This release adds APIs that you can use to enable and disable integration with AWS services designed to work with AWS Organizations. This integration allows the AWS service to perform operations on your behalf on all of the accounts in your organization. Although you can use these APIs yourself, we recommend that you instead use the commands provided in the other AWS service to enable integration with AWS Organizations.
* feature: Route53: You can use Route 53's GetAccountLimit/GetHostedZoneLimit/GetReusableDelegationSetLimit APIs to view your current limits (including custom set limits) on Route 53 resources such as hosted zones and health checks. These APIs also return the number of each resource you're currently using to enable comparison against your current limits.

## 2.151.0
* feature: APIGateway: 1. Extended GetDocumentationParts operation to support retrieving documentation parts resources without contents.  2. Added hosted zone ID in the custom domain response.
* feature: Polly: Amazon Polly adds Korean language support with new female voice - "Seoyeon" and new Indian English female voice - "Aditi"
* feature: SES: SES launches Configuration Set Reputation Metrics and Email Pausing Today, two features that build upon the capabilities of the reputation dashboard. The first is the ability to export reputation metrics for individual configuration sets. The second is the ability to temporarily pause email sending, either at the configuration set level, or across your entire Amazon SES account.
* feature: StepFunctions: You can now use the UpdateStateMachine API to update your state machine definition and role ARN. Existing executions will continue to use the previous definition and role ARN. You can use the DescribeStateMachineForExecution API to determine which state machine definition and role ARN is associated with an execution

## 2.150.0
* feature: ECS: Added new mode for Task Networking in ECS, called awsvpc mode. Mode configuration parameters to be passed in via awsvpcConfiguration. Updated APIs now use/show this new mode - RegisterTaskDefinition, CreateService, UpdateService, RunTask, StartTask.
* feature: ECS: Remove localhost restriction for ECS credential provider
* feature: Lightsail: Lightsail now supports attached block storage, which allows you to scale your applications and protect application data with additional SSD-backed storage disks. This feature allows Lightsail customers to attach secure storage disks to their Lightsail instances and manage their attached disks, including creating and deleting disks, attaching and detaching disks from instances, and backing up disks via snapshot.
* feature: Route53: When a Route 53 health check or hosted zone is created by a linked AWS service, the object now includes information about the service that created it. Hosted zones or health checks that are created by a linked service can't be updated or deleted using Route 53.
* feature: SSM: EC2 Systems Manager GetInventory API adds support for aggregation.

## 2.149.0
* feature: EC2: Introduces the following features: 1. Create a default subnet in an Availability Zone if no default subnet exists. 2. Spot Fleet integrates with Elastic Load Balancing to enable you to attach one or more load balancers to a Spot Fleet request. When you attach the load balancer, it automatically registers the instance in the Spot Fleet to the load balancers which distributes incoming traffic across the instances. 

## 2.148.0
* feature: ApplicationAutoScaling: Application Auto Scaling customers are now able to schedule adjustments to their MinCapacity and MaxCapacity, which makes it possible to pre-provision adequate capacity for anticipated demand and then reduce the provisioned capacity as demand lulls.
* feature: EC2: AWS PrivateLink for Amazon Services - Customers can now privately access Amazon services from their Amazon Virtual Private Cloud (VPC), without using public IPs, and without requiring the traffic to traverse across the Internet.
* feature: ElastiCache: This release adds online resharding for ElastiCache for Redis offering, providing the ability to add and remove shards from a running cluster. Developers can now dynamically scale-out or scale-in their Redis cluster workloads to adapt to changes in demand. ElastiCache will resize the cluster by adding or removing shards and redistribute hash slots uniformly across the new shard configuration, all while the cluster continues to stay online and serves requests.
* feature: Logger: Update the request logger to exclude sensitive input parammeters from being logged

## 2.147.0
* feature: ELBv2: Added a new limit related to Network Load Balancers on the number of targets per load balancer per AZ.
* feature: RDS: DescribeOrderableDBInstanceOptions now returns the minimum and maximum allowed values for storage size, total provisioned IOPS, and provisioned IOPS per GiB for a DB instance.
* feature: S3: This releases adds support for 4 features: 1. Default encryption for S3 Bucket, 2. Encryption status in inventory and Encryption support for inventory.  3. Cross region replication of KMS-encrypted objects, and 4. ownership overwrite for CRR. 

## 2.146.0
* feature: EC2: You are now able to create and launch EC2 C5 instances, the next generation of EC2's compute-optimized instances, in us-east-1, us-west-2 and eu-west-1. C5 instances offer up to 72 vCPUs, 144 GiB of DDR4 instance memory, 25 Gbps in Network bandwidth and improved EBS and Networking bandwidth on smaller instance sizes to deliver improved performance for compute-intensive workloads.
* feature: KMS: Documentation updates for AWS KMS. 
* feature: Pricing: This is the initial release of AWS Price List Service.
* feature: StepFunctions: Documentation update.

## 2.145.0
* feature: ECS: Amazon ECS users can now add devices to their containers and enable init process in containers through the use of docker's 'devices' and 'init' features. These fields can be specified under linuxParameters in ContainerDefinition in the Task Definition Template. 

## 2.144.0
* feature: APIGateway: This release supports creating and managing Regional and Edge-Optimized API endpoints.

## 2.143.0
* feature: DirectConnect: AWS DirectConnect now provides support for Global Access for Virtual Private Cloud (VPC) via a new feature called Direct Connect Gateway. A Direct Connect Gateway will allow you to group multiple Direct Connect Private Virtual Interfaces (DX-VIF) and Private Virtual Gateways (VGW) from different AWS regions (but belonging to the same AWS Account) and pass traffic from any DX-VIF to any VPC in the grouping.

## 2.142.0
* feature: Configuration: Allow the logger by SDK clients to be controlled via the environment if not defined programmatically. If the `AWSJS_DEBUG` environment variable is set to a truthy value and no other logger is defined, the global `console` object will be used.
* feature: DirectConnect: AWS DirectConnect now provides support for Global Access for Virtual Private Cloud (VPC) via a new feature called Direct Connect Gateway. A Direct Connect Gateway will allow you to group multiple Direct Connect Private Virtual Interfaces (DX-VIF) and Private Virtual Gateways (VGW) from different AWS regions (but belonging to the same AWS Account) and pass traffic from any DX-VIF to any VPC in the grouping.

## 2.141.0
* feature: CloudFront: You can now specify additional options for MinimumProtocolVersion, which controls the SSL/TLS protocol that CloudFront uses to communicate with viewers. The minimum protocol version that you choose also determines the ciphers that CloudFront uses to encrypt the content that it returns to viewers.
* feature: EC2: You are now able to create and launch EC2 P3 instance, next generation GPU instances, optimized for machine learning and high performance computing applications. With up to eight NVIDIA Tesla V100 GPUs, P3 instances provide up to one petaflop of mixed-precision, 125 teraflops of single-precision, and 62 teraflops of double-precision floating point performance, as well as a 300 GB/s second-generation NVLink interconnect that enables high-speed, low-latency GPU-to-GPU communication. P3 instances also feature up to 64 vCPUs based on custom Intel Xeon E5 (Broadwell) processors, 488 GB of DRAM, and 25 Gbps of dedicated aggregate network bandwidth using the Elastic Network Adapter (ENA).

## 2.140.0
* feature: ConfigService: AWS Config support for CodeBuild Project resource type
* feature: ElastiCache: Amazon ElastiCache for Redis today announced support for data encryption both for data in-transit and data at-rest. The new encryption in-transit functionality enables ElastiCache for Redis customers to encrypt data for all communication between clients and Redis engine, and all intra-cluster Redis communication. The encryption at-rest functionality allows customers to encrypt their S3 based backups. Customers can begin using the new functionality by simply enabling this functionality via AWS console, and a small configuration change in their Redis clients. The ElastiCache for Redis service automatically manages life cycle of the certificates required for encryption, including the issuance, renewal and expiration of certificates. Additionally, as part of this launch, customers will gain the ability to start using the Redis AUTH command that provides an added level of authentication.
* feature: Glue: AWS Glue: Adding a new API, BatchStopJobRun, to stop one or more job runs for a specified Job. 
* feature: Pinpoint: Added support for APNs VoIP messages. Added support for collapsible IDs, message priority, and TTL for APNs and FCM/GCM.

## 2.139.0
* feature: Organizations: This release supports integrating other AWS services with AWS Organizations through the use of an IAM service-linked role called AWSServiceRoleForOrganizations. Certain operations automatically create that role if it does not already exist.

## 2.138.0
* feature: EC2: Adding pagination support for DescribeSecurityGroups for EC2 Classic and VPC Security Groups

## 2.137.0
* feature: SQS: Added support for tracking cost allocation by adding, updating, removing, and listing the metadata tags of Amazon SQS queues.
* feature: SSM: EC2 Systems Manager versioning support for Parameter Store. Also support for referencing parameter versions in SSM Documents.

## 2.136.0
* feature: Lightsail: This release adds support for Windows Server-based Lightsail instances. The GetInstanceAccessDetails API now returns the password of your Windows Server-based instance when using the default key pair. GetInstanceAccessDetails also returns a PasswordData object for Windows Server instances containing the ciphertext and keyPairName. The Blueprint data type now includes a list of platform values (LINUX_UNIX or WINDOWS). The Bundle data type now includes a list of SupportedPlatforms values (LINUX_UNIX or WINDOWS).

## 2.135.0
* feature: ES: This release adds support for VPC access to Amazon Elasticsearch Service.

## 2.134.0
* feature: CORS: The LexModelBuildingService supports CORS. This change adds the service to the browser version of the SDK by default.
* feature: EC2: You can now change the tenancy of your VPC from dedicated to default with a single API operation. For more details refer to the documentation for changing VPC tenancy.
* feature: ES: AWS Elasticsearch adds support for enabling slow log publishing. Using slow log publishing options customers can configure and enable index/query slow log publishing of their domain to preferred AWS Cloudwatch log group.
* feature: RDS: Adds waiters for DBSnapshotAvailable and DBSnapshotDeleted.
* feature: WAF: This release adds support for regular expressions as match conditions in rules, and support for geographical location by country of request IP address as a match condition in rules.
* feature: WAFRegional: This release adds support for regular expressions as match conditions in rules, and support for geographical location by country of request IP address as a match condition in rules.

## 2.133.0
* feature: CodeCommit: This release includes the DeleteBranch API and a change to the contents of a Commit object.
* feature: DMS: This change includes addition of new optional parameter to an existing API
* feature: ElasticBeanstalk: Added the ability to add, delete or update Tags
* feature: Polly: Amazon Polly exposes two new voices: "Matthew" (US English) and "Takumi" (Japanese)
* feature: RDS: You can now call DescribeValidDBInstanceModifications to learn what modifications you can make to your DB instance. You can use this information when you call ModifyDBInstance.

## 2.132.0
* feature: ECR: Adds support for new API set used to manage Amazon ECR repository lifecycle policies. Amazon ECR lifecycle policies enable you to specify the lifecycle management of images in a repository. The configuration is a set of one or more rules, where each rule defines an action for Amazon ECR to apply to an image. This allows the automation of cleaning up unused images, for example expiring images based on age or status. A lifecycle policy preview API is provided as well, which allows you to see the impact of a lifecycle policy on an image repository before you execute it
* feature: SES: Added content related to email template management and templated email sending operations.

## 2.131.0
* feature: EC2: This release includes updates to AWS Virtual Private Gateway.
* feature: ELBv2: Server Name Indication (SNI) is an extension to the TLS protocol by which a client indicates the hostname to connect to at the start of the TLS handshake. The load balancer can present multiple certificates through the same secure listener, which enables it to support multiple secure websites using a single secure listener. Application Load Balancers also support a smart certificate selection algorithm with SNI. If the hostname indicated by a client matches multiple certificates, the load balancer determines the best certificate to use based on multiple factors including the capabilities of the client.
* feature: OpsWorksCM: Provide engine specific information for node associations.

## 2.130.0
* feature: ConfigService: Revert: Added missing enumeration values for ConfigurationItemStatus

## 2.129.0
* feature: ConfigService: Added missing enumeration values for ConfigurationItemStatus

## 2.128.0
* feature: Redshift: DescribeEventSubscriptions API supports tag keys and tag values as request parameters. 

## 2.127.0
* feature: KinesisAnalytics: Kinesis Analytics now supports schema discovery on objects in S3.  Additionally, Kinesis Analytics now supports input data preprocessing through Lambda.
* feature: Route53Domains: Added a new API that checks whether a domain name can be transferred to Amazon Route 53.

## 2.126.0
* feature: EC2: This release includes service updates to AWS VPN.
* feature: SSM: EC2 Systems Manager support for tagging SSM Documents. Also support for tag-based permissions to restrict access to SSM Documents based on these tags.

## 2.125.0
* feature: AppStream: Includes APIs for managing and accessing image builders, and deleting images.
* feature: CodeBuild: Adding support for Building GitHub Pull Requests in AWS CodeBuild
* feature: MTurk: Today, Amazon Mechanical Turk (MTurk) supports SQS Notifications being delivered to Customers' SQS queues when different stages of the MTurk workflow are complete.  We are going to create new functionality so that Customers can leverage SNS topics as a destination for notification messages when various stages of the MTurk workflow are complete. 
* feature: Organizations: This release flags the HandshakeParty structure's Type and Id fields as 'required'. They effectively were required in the past, as you received an error if you did not include them. This is now reflected at the API definition level. 
* feature: Route53: This change allows customers to reset elements of health check.

## 2.124.0
* feature: Pinpoint: Added two new push notification channels: Amazon Device Messaging (ADM) and, for push notification support in China, Baidu Cloud Push. Added support for APNs auth via .p8 key file. Added operation for direct message deliveries to user IDs, enabling you to message an individual user on multiple endpoints.

## 2.123.0
* feature: CloudFormation: You can now prevent a stack from being accidentally deleted by enabling termination protection on the stack. If you attempt to delete a stack with termination protection enabled, the deletion fails and the stack, including its status, remains unchanged. You can enable termination protection on a stack when you create it. Termination protection on stacks is disabled by default. After creation, you can set termination protection on a stack whose status is CREATE_COMPLETE, UPDATE_COMPLETE, or UPDATE_ROLLBACK_COMPLETE.

## 2.122.0
* feature: ConfigService: AWS Config support for DynamoDB tables and Auto Scaling resource types
* feature: ECS: Amazon ECS users can now add and drop Linux capabilities to their containers through the use of docker's cap-add and cap-drop features. Customers can specify the capabilities they wish to add or drop for each container in their task definition. 

## 2.121.0
* feature: Budgets: Including "DuplicateRecordException" in UpdateNotification and UpdateSubscriber. 
* feature: CloudWatchLogs: Adds support for associating LogGroups with KMS Keys.
* feature: EC2: Add EC2 APIs to copy Amazon FPGA Images (AFIs) within the same region and across multiple regions, delete AFIs, and modify AFI attributes. AFI attributes include name, description and granting/denying other AWS accounts to load the AFI.

## 2.120.0
* feature: AppStream: API updates for supporting On-Demand fleets.
* feature: CodePipeline: This change includes a PipelineMetadata object that is part of the output from the GetPipeline API that includes the Pipeline ARN, created, and updated timestamp.
* feature: Greengrass: Reset Deployments feature allows you to clean-up the cloud resource so you can delete the group. It also cleans up the core so that it goes back to the pre-deployment state.
* feature: LexRuntime: Request attributes can be used to pass client specific information from the client to Amazon Lex as part of each request.
* feature: RDS: Introduces the --option-group-name parameter to the ModifyDBSnapshot CLI command. You can specify this parameter when you upgrade an Oracle DB snapshot. The same option group considerations apply when upgrading a DB snapshot as when upgrading a DB instance.  For more information, see http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Oracle.html#USER_UpgradeDBInstance.Oracle.OGPG.OG

## 2.119.0
* feature: EC2: Fixed bug in EC2 clients preventing ElasticGpuSet from being set.

## 2.118.0
* feature: EC2: Amazon EC2 now lets you opt for Spot instances to be stopped in the event of an interruption instead of being terminated.  Your Spot request can be fulfilled again by restarting instances from a previously stopped state, subject to availability of capacity at or below your preferred price.  When you submit a persistent Spot request, you can choose from "terminate" or "stop" as the instance interruption behavior.  Choosing "stop" will shutdown your Spot instances so you can continue from this stopped state later on.  This feature is only available for instances with Amazon EBS volume as their root device.
* feature: IAM: A new API, DeleteServiceLinkedRole, submits a service-linked role deletion request and returns a DeletionTaskId, which you can use to check the status of the deletion.
* feature: SES: Amazon Simple Email Service (Amazon SES) now lets you customize the domains used for tracking open and click events. Previously, open and click tracking links referred to destinations hosted on domains operated by Amazon SES. With this feature, you can use your own branded domains for capturing open and click events.

## 2.117.0
* feature: APIGateway: Add a new enum "REQUEST" to '--type <value>' field in the current create-authorizer API, and make "identitySource" optional.

## 2.116.0
* bugfix: clock skew: put the updating clock skew logic to each service client instead of using global config
* feature: CodeBuild: Supporting Parameter Store in environment variables for AWS CodeBuild
* feature: ServiceCatalog: This release of Service Catalog adds API support to copy products.

## 2.115.0
* feature: AutoScaling: Customers can create Life Cycle Hooks at the time of creating Auto Scaling Groups through the CreateAutoScalingGroup API
* feature: CloudWatchEvents: Exposes ConcurrentModificationException as one of the valid exceptions for PutPermission and RemovePermission operation.
* feature: EC2: You are now able to create and launch EC2 x1e.32xlarge instance, a new EC2 instance in the X1 family, in us-east-1, us-west-2, eu-west-1, and ap-northeast-1. x1e.32xlarge offers 128 vCPUs, 3,904 GiB of DDR4 instance memory, high memory bandwidth, large L3 caches, and leading reliability capabilities to boost the performance and reliability of in-memory applications.

## 2.114.0
* feature: EC2: Fixed bug in EC2 clients preventing HostOfferingSet from being set

## 2.113.0
* feature: DeviceFarm: DeviceFarm has added support for two features - RemoteDebugging and Customer Artifacts. Customers  can now do remote Debugging on their Private Devices and can now retrieve custom files generated by their tests on the device and the device host (execution environment) on both public and private devices. 

## 2.112.0
* feature: CloudWatchLogs: Adds support for the PutResourcePolicy, DescribeResourcePolicy and DeleteResourcePolicy APIs.

## 2.111.0
* feature: EC2: With Tagging support, you can add Key and Value metadata to search, filter and organize your NAT Gateways according to your organization's needs.
* feature: ELBv2: The feature enables the new Network Load Balancer that is optimized to handle volatile traffic patterns while using a single static IP address per Availability Zone. Network Load Balancer operates at the connection level (Layer 4), routing connections to Amazon EC2 instances and containers, within Amazon Virtual Private Cloud (Amazon VPC) based on IP protocol data.
* feature: LexModelBuildingService: Amazon Lex provides the ability to export your Amazon Lex chatbot definition as a JSON file that can be added to the target platform. The JSON configuration file contains the structure of your Amazon Lex chatbot, including the intent schema with utterances, slots, prompts and slot-types.
* feature: Route53: You can configure Amazon Route 53 to log information about the DNS queries that Amazon Route 53 receives for your domains and subdomains. When you configure query logging, Amazon Route 53 starts to send logs to CloudWatch Logs. You can use various tools, including the AWS console, to access the query logs.

## 2.110.0
* feature: Budgets: Add an optional "thresholdType" to notifications to support percentage or absolute value thresholds.

## 2.109.0
* feature: CodeStar: Added support to tag CodeStar projects. Tags can be used to organize and find CodeStar projects on key-value pairs that you can choose. For example, you could add a tag with a key of "Release" and a value of "Beta" to projects your organization is working on for an upcoming beta release.

## 2.108.0
* feature: GameLift: GameLift VPC resources can be peered with any other AWS VPC. R4 memory-optimized instances now available to deploy.
* feature: Mobile: AWS Mobile Hub is an integrated experience designed to help developers build, test, configure and release cloud-based applications for mobile devices using Amazon Web Services. AWS Mobile Hub provides a console and API for developers, allowing them to quickly select desired features and integrate them into mobile applications. Features include NoSQL Database, Cloud Logic, Messaging and Analytics. With AWS Mobile Hub, you pay only for the underlying services that Mobile Hub provisions based on the features you choose in the Mobile Hub console.
* feature: SSM: Adding KMS encryption support to SSM Inventory Resource Data Sync. Exposes the ClientToken parameter on SSM StartAutomationExecution to provide idempotent execution requests.

## 2.107.0
* feature: CodeBuild: The AWS CodeBuild HTTP API now provides the BatchDeleteBuilds operation, which enables you to delete existing builds.
* feature: EC2: Descriptions for Security Group Rules enables customers to be able to define a description for ingress and egress security group rules . The Descriptions for Security Group Rules feature supports one description field per Security Group rule for both ingress and egress rules . Descriptions for Security Group Rules provides a simple way to describe the purpose or function of a Security Group Rule allowing for easier customer identification of configuration elements .      Prior to the release of Descriptions for Security Group Rules , customers had to maintain a separate system outside of AWS if they wanted to track Security Group Rule mapping and their purpose for being implemented. If a security group rule has already been created and you would like to update or change your description for that security group rule you can use the UpdateSecurityGroupRuleDescription API.
* feature: ELBv2: This change now allows Application Load Balancers to distribute traffic to AWS resources using their IP addresses as targets in addition to the instance IDs. You can also load balance to resources outside the VPC hosting the load balancer using their IP addresses as targets. This includes resources in peered VPCs, EC2-Classic, and on-premises locations reachable over AWS Direct Connect or a VPN connection.
* feature: LexModelBuildingService: Amazon Lex now supports synonyms for slot type values. If the user inputs a synonym, it will be resolved to the corresponding slot value.

## 2.106.0
* feature: ApplicationAutoScaling: Application Auto Scaling now supports the DisableScaleIn option for Target Tracking Scaling Policies. This allows customers to create scaling policies that will only add capacity to the target.
* feature: Organizations: The exception ConstraintViolationException now contains a new reason subcode MASTERACCOUNT_MISSING_CONTACT_INFO to make it easier to understand why attempting to remove an account from an Organization can fail. We also improved several other of the text descriptions and examples.

## 2.105.0
* feature: ConfigService: Increased the internal size limit of resourceId
* feature: EC2: Provides capability to add secondary CIDR blocks to a VPC.

## 2.104.0
* feature: CloudFormation: Rollback triggers enable you to have AWS CloudFormation monitor the state of your application during stack creation and updating, and to roll back that operation if the application breaches the threshold of any of the alarms you've specified.
* feature: GameLift: Update spelling of MatchmakingTicket status values for internal consistency.
* feature: RDS: Option group options now contain additional properties that identify requirements for certain options. Check these properties to determine if your DB instance must be in a VPC or have auto minor upgrade turned on before you can use an option. Check to see if you can downgrade the version of an option after you have installed it.

## 2.103.0
* feature: Rekognition: Update the enum value of LandmarkType and GenderType to be consistent with service response

## 2.102.0
* feature: SSM: Changes to associations in Systems Manager State Manager can now be recorded. Previously, when you edited associations, you could not go back and review older association settings. Now, associations are versioned, and can be named using human-readable strings, allowing you to see a trail of association changes. You can also perform rate-based scheduling, which allows you to schedule associations more granularly.

## 2.101.0
* feature: Firehose: This change will allow customers to attach a Firehose delivery stream to an existing Kinesis stream directly. You no longer need a forwarder to move data from a Kinesis stream to a Firehose delivery stream. You can now run your streaming applications on your Kinesis stream and easily attach a Firehose delivery stream to it for data delivery to S3, Redshift, or Elasticsearch concurrently.
* feature: Route53: Amazon Route 53 now supports CAA resource record type. A CAA record controls which certificate authorities are allowed to issue certificates for the domain or subdomain.

## 2.100.0
* feature: GameLift: The Matchmaking Grouping Service is a new feature that groups player match requests for a given game together into game sessions based on developer configured rules.

## 2.99.0
* feature: EC2: Fixed bug in EC2 clients preventing HostReservation from being set

## 2.98.0
* feature: Batch: This release enhances the DescribeJobs API to include the CloudWatch logStreamName attribute in ContainerDetail and ContainerDetailAttempt
* feature: CloudHSMV2: CloudHSM provides hardware security modules for protecting sensitive data and cryptographic keys within an EC2 VPC, and enable the customer to maintain control over key access and use. This is a second-generation of the service that will improve security, lower cost and provide better customer usability.
* feature: EFS: Customers can create encrypted EFS file systems and specify a KMS master key to encrypt it with.
* feature: Glue: AWS Glue is a fully managed extract, transform, and load (ETL) service that makes it easy for customers to prepare and load their data for analytics. You can create and run an ETL job with a few clicks in the AWS Management Console. You simply point AWS Glue to your data stored on AWS, and AWS Glue discovers your data and stores the associated metadata (e.g. table definition and schema) in the AWS Glue Data Catalog. Once cataloged, your data is immediately searchable, queryable, and available for ETL. AWS Glue generates the code to execute your data transformations and data loading processes. AWS Glue generates Python code that is entirely customizable, reusable, and portable. Once your ETL job is ready, you can schedule it to run on AWS Glue's fully managed, scale-out Spark environment. AWS Glue provides a flexible scheduler with dependency resolution, job monitoring, and alerting. AWS Glue is serverless, so there is no infrastructure to buy, set up, or manage. It automatically provisions the environment needed to complete the job, and customers pay only for the compute resources consumed while running ETL jobs. With AWS Glue, data can be available for analytics in minutes.
* feature: MigrationHub: AWS Migration Hub provides a single location to track migrations across multiple AWS and partner solutions. Using Migration Hub allows you to choose the AWS and partner migration tools that best fit your needs, while providing visibility into the status of your entire migration portfolio. Migration Hub also provides key metrics and progress for individual applications, regardless of which tools are being used to migrate them. For example, you might use AWS Database Migration Service, AWS Server Migration Service, and partner migration tools to migrate an application comprised of a database, virtualized web servers, and a bare metal server. Using Migration Hub will provide you with a single screen that shows the migration progress of all the resources in the application. This allows you to quickly get progress updates across all of your migrations, easily identify and troubleshoot any issues, and reduce the overall time and effort spent on your migration projects. Migration Hub is available to all AWS customers at no additional charge. You only pay for the cost of the migration tools you use, and any resources being consumed on AWS. 
* feature: SSM: Systems Manager Maintenance Windows include the following changes or enhancements: New task options using Systems Manager Automation, AWS Lambda, and AWS Step Functions; enhanced ability to edit the targets of a Maintenance Window, including specifying a target name and description, and ability to edit the owner field; enhanced ability to edits tasks; enhanced support for Run Command parameters; and you can now use a --safe flag when attempting to deregister a target. If this flag is enabled when you attempt to deregister a target, the system returns an error if the target is referenced by any task. Also, Systems Manager now includes Configuration Compliance to scan your fleet of managed instances for patch compliance and configuration inconsistencies. You can collect and aggregate data from multiple AWS accounts and Regions, and then drill down into specific resources that aren't compliant.
* feature: StorageGateway: Add optional field ForceDelete to DeleteFileShare api.

## 2.97.0
* bugfix: REST-JSON serialization: Automatically add a content-type header of application/json to requests with a JSON body
* feature: CodeDeploy: Adds support for specifying Application Load Balancers in deployment groups, for both in-place and blue/green deployments.
* feature: CognitoIdentityServiceProvider: We have added support for features for Amazon Cognito User Pools that enable application developers to easily add and customize a sign-up and sign-in user experience, use OAuth 2.0, and integrate with Facebook, Google, Login with Amazon, and SAML-based identity providers.
* feature: EC2: Provides customers an opportunity to recover an EIP that was released

## 2.96.0
* feature: CloudDirectory: Enable BatchDetachPolicy
* feature: CodeBuild: Supporting Bitbucket as source type in AWS CodeBuild.

## 2.95.0
* bugfix: credentials: add typescript definition for resolvePromise()
* bugfix: typings: add readablestream type to clients that support streaming
* feature: ElasticBeanstalk: Add support for paginating the result of DescribeEnvironments     Include the ARN of described environments in DescribeEnvironments output

## 2.94.0
* feature: CodeDeploy: AWS CodeDeploy now supports the use of multiple tag groups in a single deployment group (an intersection of tags) to identify the instances for a deployment. When you create or update a deployment group, use the new ec2TagSet and onPremisesTagSet structures to specify up to three groups of tags. Only instances that are identified by at least one tag in each of the tag groups are included in the deployment group.
* feature: ConfigService: Added new API, GetDiscoveredResourceCounts, which returns the resource types, the number of each resource type, and the total number of resources that AWS Config is recording in the given region for your AWS account.
* feature: EC2: Ec2 SpotInstanceRequestFulfilled waiter update
* feature: ELBv2: Add TargetInService and TargetDeregistered waiters 
* feature: Pinpoint: This release of the Pinpoint SDK enables App management - create, delete, update operations, Raw Content delivery for APNs and GCM campaign messages and From Address override.
* feature: SES: This update adds information about publishing email open and click events. This update also adds information about publishing email events to Amazon Simple Notification Service (Amazon SNS).

## 2.93.0
* feature: DynamoDB: Add a `wrapNumbers` option to the Document Client to direct the client not to convert number attributes to JavaScript numbers.
* feature: Inspector: Inspector's StopAssessmentRun API has been updated with a new input option - stopAction. This request parameter can be set to either START_EVALUATION or SKIP_EVALUATION. START_EVALUATION (the default value, and the previous behavior) stops the AWS agent data collection and begins the results evaluation for findings generation based on the data collected so far. SKIP_EVALUATION cancels the assessment run immediately, after which no findings are generated.
* feature: SSM: Adds a SendAutomationSignal API to SSM Service. This API is used to send a signal to an automation execution to change the current behavior or status of the execution.

## 2.92.0
* feature: EC2: The CreateDefaultVPC API enables you to create a new default VPC . You no longer need to contact AWS support, if your default VPC has been deleted.
* feature: KinesisAnalytics: Added additional exception types and clarified documentation.

## 2.91.0
* feature: CloudWatch: This release adds high resolution features to CloudWatch, with support for Custom Metrics down to 1 second and Alarms down to 10 seconds.
* feature: EC2: Amazon EC2 Elastic GPUs allow you to easily attach low-cost graphics acceleration to current generation EC2 instances. With Amazon EC2 Elastic GPUs, you can configure the right amount of graphics acceleration to your particular workload without being constrained by fixed hardware configurations and limited GPU selection.

## 2.90.0
* feature: CloudDirectory: Cloud Directory adds support for additional batch operations.
* feature: CloudFormation: AWS CloudFormation StackSets enables you to manage stacks across multiple accounts and regions.

## 2.89.0
* feature: AppStream: Amazon AppStream 2.0 image builders and fleets can now access applications and network resources that rely on Microsoft Active Directory (AD) for authentication and permissions. This new feature allows you to join your streaming instances to your AD, so you can use your existing AD user management tools. 
* feature: EC2: Spot Fleet tagging capability allows customers to automatically tag instances launched by Spot Fleet. You can use this feature to label or distinguish instances created by distinct Spot Fleets. Tagging your EC2 instances also enables you to see instance cost allocation by tag in your AWS bill.

## 2.88.0
* feature: EMR: Amazon EMR now includes the ability to use a custom Amazon Linux AMI and adjustable root volume size when launching a cluster.

## 2.87.0
* feature: Budgets: Update budget Management API's to list/create/update RI_UTILIZATION type budget. Update budget Management API's to support DAILY timeUnit for RI_UTILIZATION type budget.

## 2.86.0
* feature: CognitoIdentityServiceProvider: Allows developers to configure user pools for email/phone based signup and sign-in.
* feature: Lambda: Lambda@Edge lets you run code closer to your end users without provisioning or managing servers. With Lambda@Edge, your code runs in AWS edge locations, allowing you to respond to your end users at the lowest latency. Your code is triggered by Amazon CloudFront events, such as requests to and from origin servers and viewers, and it is ready to execute at every AWS edge location whenever a request for content is received. You just upload your Node.js code to AWS Lambda and Lambda takes care of everything required to run and scale your code with high availability. You only pay for the compute time you consume - there is no charge when your code is not running.

## 2.85.0
* feature: Discovery: Adding feature to the Export API for Discovery Service to allow filters for the export task to allow export based on per agent id.
* feature: EC2: New EC2 GPU Graphics instance

## 2.84.0
* bugfix: S3: Updates S3 client to no longer attempt to determine a bucket's region when a request is aborted.
* feature: APIGateway: Adds support for management of gateway responses.
* feature: EC2: X-ENI (or Cross-Account ENI) is a new feature that allows the attachment or association of Elastic Network Interfaces (ENI) between VPCs in different AWS accounts located in the same availability zone. With this new capability, service providers and partners can deliver managed solutions in a variety of new architectural patterns where the provider and consumer of the service are in different AWS accounts.

## 2.83.0
* feature: AutoScaling: Auto Scaling now supports a new type of scaling policy called target tracking scaling policies that you can use to set up dynamic scaling for your application.

## 2.82.0
* feature: DirectoryService: You can now improve the resilience and performance of your Microsoft AD directory by deploying additional domain controllers. Added UpdateNumberofDomainControllers API that allows you to update the number of domain controllers you want for your directory, and DescribeDomainControllers API that allows you to describe the detailed information of each domain controller of your directory. Also added the 'DesiredNumberOfDomainControllers' field to the DescribeDirectories API output for Microsoft AD.
* feature: KMS: This release of AWS Key Management Service introduces the ability to determine whether a key is AWS managed or customer managed.
* feature: Kinesis: You can now encrypt your data at rest within an Amazon Kinesis Stream using server-side encryption. Server-side encryption via AWS KMS makes it easy for customers to meet strict data management requirements by encrypting their data at rest within the Amazon Kinesis Streams, a fully managed real-time data processing service.
* feature: SSM: Amazon EC2 Systems Manager now expands Patching support to Amazon Linux, Red Hat and Ubuntu in addition to the already supported Windows Server.

## 2.81.0
* bugfix: Core: The SDK will now throw an InvalidHeader error when a header's value is not stringifiable. See #1598.
* bugfix: apigateway: ApiGateway.getExports will no longer override user-supplied 'accepts' with 'application/json'
* feature: CloudWatch: We are excited to announce the availability of APIs and CloudFormation support for CloudWatch Dashboards. You can use the new dashboard APIs or CloudFormation templates to dynamically build and maintain dashboards to monitor your infrastructure and applications. There are four new dashboard APIs - PutDashboard, GetDashboard, DeleteDashboards, and ListDashboards APIs. PutDashboard is used to create a new dashboard or modify an existing one whereas GetDashboard is the API to get the details of a specific dashboard. ListDashboards and DeleteDashboards are used to get the names or delete multiple dashboards respectively. Getting started with dashboard APIs is similar to any other AWS APIs. The APIs can be accessed through AWS SDK or through CLI tools.
* feature: Route53: Bug fix for InvalidChangeBatch exception.

## 2.80.0
* feature: S3: API Update for S3: Adding Object Tagging Header to MultipartUpload Initialization

## 2.79.0
* bugfix: LexRuntime: Adds support for non-file streams as an input to postContent.
* feature: CloudWatchEvents: CloudWatch Events now allows different AWS accounts to share events with each other through a new resource called event bus. Event buses accept events from AWS services, other AWS accounts and PutEvents API calls. Currently all AWS accounts have one default event bus. To send events to another account, customers simply write rules to match the events of interest and attach an event bus in the receiving account as the target to the rule. The PutTargets API has been updated to allow adding cross account event buses as targets. In addition, we have released two new APIs - PutPermission and RemovePermission - that enables customers to add/remove permissions to their default event bus.
* feature: GameLift: Allow developers to download GameLift fleet creation logs to assist with debugging.
* feature: SSM: Adding Resource Data Sync support to SSM Inventory.  New APIs:  * CreateResourceDataSync - creates a new resource data sync configuration,  * ListResourceDataSync - lists existing resource data sync configurations,  * DeleteResourceDataSync - deletes an existing resource data sync configuration. 

## 2.78.0
* feature: ServiceCatalog: Proper tagging of resources is critical to post-launch operations such as billing, cost allocation, and resource management. By using Service Catalog's TagOption Library, administrators can define a library of re-usable TagOptions that conform to company standards, and associate these with Service Catalog portfolios and products. Learn how to move your current tags to the new library, create new TagOptions, and view and associate your library items with portfolios and products. Understand how to ensure that the right tags are created on products launched through Service Catalog and how to provide users with defined selectable tags.

## 2.77.0
* feature: Lambda: The Lambda Invoke API will now throw new exception InvalidRuntimeException (status code 502) for invokes with deprecated runtimes.

## 2.76.0
* feature: CodePipeline: A new API, ListPipelineExecutions, enables you to retrieve summary information about the most recent executions in a pipeline, including pipeline execution ID, status, start time, and last updated time. You can request information for a maximum of 100 executions. Pipeline execution data is available for the most recent 12 months of activity.
* feature: DMS: Added tagging for DMS certificates.
* feature: ELB: Add retry error state to InstanceInService waiter for ElasticLoadBalancer
* feature: Lightsail: This release adds a new nextPageToken property to the result of the GetOperationsForResource API. Developers can now get the next set of items in a list by making subsequent calls to GetOperationsForResource API with the token from the previous call. This release also deprecates the nextPageCount property, which previously returned null (use the nextPageToken property instead). This release also deprecates the customImageName property on the CreateInstancesRequest class, which was previously ignored by the API.
* feature: Route53: This release reintroduces the HealthCheckInUse exception.

## 2.75.0
* feature: DAX: Amazon DynamoDB Accelerator (DAX) is a fully managed, highly available, in-memory cache for DynamoDB that delivers up to a 10x performance improvement - from milliseconds to microseconds - even at millions of requests per second. DAX does all the heavy lifting required to add in-memory acceleration to your DynamoDB tables, without requiring developers to manage cache invalidation, data population, or cluster management.
* feature: Route53: Amazon Route 53 now supports multivalue answers in response to DNS queries, which lets you route traffic approximately randomly to multiple resources, such as web servers. Create one multivalue answer record for each resource and, optionally, associate an Amazon Route 53 health check with each record, and Amazon Route 53 responds to DNS queries with up to eight healthy records.
* feature: S3: Allows forward slashes in Bucket names when using SigV4 to create or retrieve objects. This is to maintain compatibility with behavior when using SigV2. In new code, Buckets should not contain forward slashes. Instead, directories should be part of an object's key.
* feature: SSM: Adding hierarchy support to the SSM Parameter Store API. Added support tor tagging. New APIs: GetParameter - retrieves one parameter, DeleteParameters - deletes multiple parameters (max number 10), GetParametersByPath - retrieves parameters located in the hierarchy. Updated APIs: PutParameter - added ability to enforce parameter value by applying regex (AllowedPattern), DescribeParameters - modified to support Tag filtering.
* feature: WAFRegional: You can now create, edit, update, and delete a new type of WAF rule with a rate tracking component.

## 2.74.0
* feature: WorkDocs: This release provides a new API to retrieve the activities performed by WorkDocs users.

## 2.73.0
* feature: Organizations: Improvements to Exception Modeling

## 2.72.0
* feature: XRay: Add a response time histogram to the services in response of GetServiceGraph API.

## 2.71.0
* feature: DynamoDB: Adds two new functions to the AWS.DynamoDB.Converter namespace: one to convert full DynamoDB items (such as what you might receive for events in a DynamoDB stream) into plain vanilla JavaScript objects and one to convert JavaScript objects back into DynamoDB items
* feature: EC2: Adds API to describe Amazon FPGA Images (AFIs) available to customers, which includes public AFIs, private AFIs that you own, and AFIs owned by other AWS accounts for which you have load permissions.
* feature: ECS: Added support for cpu, memory, and memory reservation container overrides on the RunTask and StartTask APIs.
* feature: Iot: Revert the last release: remove CertificatePem from DescribeCertificate API.
* feature: ServiceCatalog: Added ProvisioningArtifactSummaries to DescribeProductAsAdmin's output to show the provisioning artifacts belong to the product. Allow filtering by SourceProductId in SearchProductsAsAdmin for AWS Marketplace products. Added a verbose option to DescribeProvisioningArtifact to display the CloudFormation template used to create the provisioning artifact.Added DescribeProvisionedProduct API. Changed the type of ProvisionedProduct's Status to be distinct from Record's Status. New ProvisionedProduct's Status are AVAILABLE, UNDER_CHANGE, TAINTED, ERROR. Changed Record's Status set of values to CREATED, IN_PROGRESS, IN_PROGRESS_IN_ERROR, SUCCEEDED, FAILED.

## 2.70.0
* feature: ApplicationAutoScaling: Application Auto Scaling now supports automatic scaling of read and write throughput capacity for DynamoDB tables and global secondary indexes.

## 2.69.0
* feature: ConfigService: With this release AWS Config supports the Amazon CloudWatch alarm resource type.

## 2.68.0
* feature: RDS: API Update for RDS: this update enables copy-on-write, a new Aurora MySQL Compatible Edition feature that allows users to restore their database, and support copy of TDE enabled snapshot cross region.
* feature: S3: Switches S3 to use signatureVersion "v4" by default. To continue using signatureVersion "v2", set the signatureVersion: "v2" option in the S3 service client configuration. Presigned URLs will continue using "v2" by default.

## 2.67.0
* feature: EFS: CORS support added. Now a default service in the browser build of the JavaScript SDK.
* feature: OpsWorks: Tagging Support for AWS OpsWorks Stacks

## 2.66.0
* feature: Iot: In addition to using certificate ID, AWS IoT customers can now obtain the description of a certificate with the certificate PEM.
* feature: Pinpoint: Starting today Amazon Pinpoint adds SMS Text and Email Messaging support in addition to Mobile Push Notifications, providing developers, product managers and marketers with multi-channel messaging capabilities to drive user engagement in their applications. Pinpoint also enables backend services and applications to message users directly and provides advanced user and app analytics to understand user behavior and messaging performance.
* feature: Rekognition: API Update for AmazonRekognition: Adding RecognizeCelebrities API

## 2.65.0
* feature: CodeBuild: Add support to APIs for privileged containers. This change would allow performing privileged operations like starting the Docker daemon inside builds possible in custom docker images.
* feature: Greengrass: AWS Greengrass is software that lets you run local compute, messaging, and device state synchronization for connected devices in a secure way. With AWS Greengrass, connected devices can run AWS Lambda functions, keep device data in sync, and communicate with other devices securely even when not connected to the Internet. Using AWS Lambda, Greengrass ensures your IoT devices can respond quickly to local events, operate with intermittent connections, and minimize the cost of transmitting IoT data to the cloud.

## 2.64.0
* bugfix: S3: Calling send multiple times on an S3 ManagedUpload with leavePartsOnError set to true should no longer result in truncated files being uploaded to S3. Calling send multiple times is not supported with streams.
* feature: Iot: Update client side validation for SalesForce action.

## 2.63.0
* feature: AppStream: AppStream 2.0 Custom Security Groups allows you to easily control what network resources your streaming instances and images have access to. You can assign up to 5 security groups per Fleet to control the inbound and outbound network access to your streaming instances to specific IP ranges, network protocols, or ports.
* feature: AutoScaling: Autoscaling resource model update.
* feature: Iot:  Added Salesforce action to IoT Rules Engine.

## 2.62.0
* feature: KinesisAnalytics: Kinesis Analytics publishes error messages CloudWatch logs in case of application misconfigurations
* feature: WorkDocs: This release includes new APIs to manage tags and custom metadata on resources and also new APIs to add and retrieve comments at the document level.

## 2.61.0
* feature: CodeDeploy: AWS CodeDeploy has improved how it manages connections to GitHub accounts and repositories. You can now create and store up to 25 connections to GitHub accounts in order to associate AWS CodeDeploy applications with GitHub repositories. Each connection can support multiple repositories. You can create connections to up to 25 different GitHub accounts, or create more than one connection to a single account. The ListGitHubAccountTokenNames command has been introduced to retrieve the names of stored connections to GitHub accounts that you have created. The name of the connection to GitHub used for an AWS CodeDeploy application is also included in the ApplicationInfo structure.  Two new fields, lastAttemptedDeployment and lastSuccessfulDeployment, have been added to DeploymentGroupInfo to improve the handling of deployment group information in the AWS CodeDeploy console. Information about these latest deployments can also be retrieved using the GetDeploymentGroup and BatchGetDeployment group requests. Also includes a region update  (us-gov-west-1).
* feature: CognitoIdentityServiceProvider: Added support within Amazon Cognito User Pools for 1) a customizable hosted UI for user sign up and sign in and 2) integration of external identity providers.
* feature: ELBv2: Update the existing DescribeRules API to support pagination.

## 2.60.0
* bugfix: Core: Fixes issue where some TimeStamp shapes had an incorrect timestampFormat. Specifically affects S3.putBucketLifecycleConfiguration when using Date fields.
* feature: RDS: Amazon RDS customers can now easily and quickly stop and start their DB instances.

## 2.59.0
* bugfix: S3: Update ManagedUploader body verification to allow empty strings
* feature: CloudDirectory: Cloud Directory has launched support for Typed Links, enabling customers to create object-to-object relationships that are not hierarchical in nature. Typed Links enable customers to quickly query for data along these relationships. Customers can also enforce referential integrity using Typed Links, ensuring data in use is not inadvertently deleted.

## 2.58.0
* feature: AppStream: Support added for persistent user storage, backed by S3.
* feature: Rekognition: Updated the CompareFaces API response to include orientation information, unmatched faces, landmarks, pose, and quality of the compared faces.

## 2.57.0
* feature: IAM: The unique ID and access key lengths were extended from 32 to 128
* feature: STS: The unique ID and access key lengths were extended from 32 to 128.
* feature: StorageGateway: Two Storage Gateway data types, Tape and TapeArchive, each have a new response element, TapeUsedInBytes. This element helps you manage your virtual tapes. By using TapeUsedInBytes, you can see the amount of data written to each virtual tape.

## 2.56.0
* feature: DMS: This release adds support for using Amazon S3 and Amazon DynamoDB as targets for database migration, and using MongoDB as a source for database migration. For more information, see the AWS Database Migration Service documentation.

## 2.55.0
* bugfix: ReactNative: Requests will always have a Content-Type header if they also have a body. Works around an issue caused by React Native's Android XMLHttpRequest implementation that requires the Content-Type header to be present if there is a request body.
* feature: ResourceGroupsTaggingAPI: You can now specify the number of resources returned per page in GetResources operation, as an optional parameter, to easily manage the list of resources returned by your queries.

## 2.54.0
* feature: Athena: This release adds support for Amazon Athena. Amazon Athena is an interactive query service that makes it easy to analyze data in Amazon S3 using standard SQL. Athena is serverless, so there is no infrastructure to manage, and you pay only for the queries that you run.
* feature: Lightsail: This release adds new APIs that make it easier to set network port configurations on Lightsail instances. Developers can now make a single request to both open and close public ports on an instance using the PutInstancePublicPorts operation.

## 2.53.0
* feature: Polly: Amazon Polly adds new German voice "Vicki"

## 2.52.0
* feature: CodeDeploy: This release introduces the previousRevision field in the responses to the GetDeployment and BatchGetDeployments actions. previousRevision provides information about the application revision that was deployed to the deployment group before the most recent successful deployment.  Also, the fileExistsBehavior parameter has been added for CreateDeployment action requests. In the past, if the AWS CodeDeploy agent detected files in a target location that weren't part of the application revision from the most recent successful deployment, it would fail the current deployment by default. This new parameter provides options for how the agent handles these files: fail the deployment, retain the content, or overwrite the content.
* feature: GameLift: Allow developers to specify how metrics are grouped in CloudWatch for their GameLift fleets. Developers can also specify how many concurrent game sessions activate on a per-instance basis.
* feature: Inspector: Adds ability to produce an assessment report that includes detailed and comprehensive results of a specified assessment run.

## 2.51.0
* feature: SSM: UpdateAssociation API now supports updating document name and targets of an association. GetAutomationExecution API can return FailureDetails as an optional field to the StepExecution Object, which contains failure type, failure stage as well as other failure related information for a failed step.

## 2.50.0
* bugfix: ReactNative: Fixes issue where binary responses were empty in iOS (e.g. s3.getObject)
* feature: ELB: Add a new API to allow customers to describe their account limits, such as load balancer limit, target group limit etc.
* feature: ELBv2: Add a new API to allow customers to describe their account limits, such as load balancer limit, target group limit etc.
* feature: LexModelBuildingService: Releasing new DeleteBotVersion, DeleteIntentVersion and DeleteSlotTypeVersion APIs.
* feature: Organizations: AWS Organizations APIs that return an Account object now include the email address associated with the account’s root user.
* bugfix: Request: Updates node.js request handling to obey socket read timeouts after response headers have been received. Previously timeouts were being ignored once headers were received, sometimes causing connections to hang.

## 2.49.0
* feature: ECS: Exposes container instance registration time in ECS:DescribeContainerInstances.
* feature: Lambda: Support for UpdateFunctionCode DryRun option
* feature: MarketplaceEntitlementService: AWS Marketplace Entitlement Service enables AWS Marketplace sellers to determine the capacity purchased by their customers.

## 2.48.0
* feature: CloudFormation: Adding back the removed waiters and paginators.

## 2.47.0
* feature: CloudFormation: API update for CloudFormation: New optional parameter ClientRequestToken which can be used as an idempotency token to safely retry certain operations as well as tagging StackEvents.
* feature: RDS: The DescribeDBClusterSnapshots API now returns a SourceDBClusterSnapshotArn field which identifies the source DB cluster snapshot of a copied snapshot.
* feature: React Native: Adds support for running the SDK in React Native. See the README for instructions.
* feature: Rekognition: Fix for missing file type check
* feature: SQS: Adding server-side encryption (SSE) support to SQS by integrating with AWS KMS; adding new queue attributes to SQS CreateQueue, SetQueueAttributes and GetQueueAttributes APIs to support SSE.
* feature: Snowball: The Snowball API has a new exception that can be thrown for list operation requests.

## 2.46.0
* bugfix: SharedIniFileCredentials: This fix reverts a regression introduced in version 2.44.0 in which the value returned by os.homedir would be used in preference over the value of the HOME environment variable
* feature: RDS: With Amazon Relational Database Service (Amazon RDS) running MySQL or Amazon Aurora, you can now authenticate to your DB instance using IAM database authentication.
* feature: RDS: Adds AWS.RDS.Signer class to generate auth tokens for connecting to a database.

## 2.45.0
* bugfix: Promise: Fixes an issue introduced in v2.44.0 where payload members on some CloudFront and S3 operations weren't hoisted when using promises. This issue was introduced in and could affect users that were accessing fields on a response that weren't documented, but were available for backwards compatibility.
* bugfix: Request: Make `$response` property of resolved promise value non-enumerable to prevent serialization errors
* feature: AppStream: The new feature named "Default Internet Access" will enable Internet access from AppStream 2.0 instances - image builders and fleet instances. Admins will check a flag either through AWS management console for AppStream 2.0 or through API while creating an image builder or while creating/updating a fleet.
* feature: Kinesis: Adds a new waiter, StreamNotExists, to Kinesis.

## 2.44.0
* feature: DeviceFarm: API Update for AWS Device Farm: Support for Deals and Promotions 
* feature: ELBv2: Adding LoadBalancersDeleted waiter for Elasticloadbalancingv2
* feature: EnvironmentVariable: Load config from ~/.aws/config if AWS_SDK_LOAD_CONFIG is set
* feature: EnvironmentVariable: Add support for specifying the location of the shared config file via the AWS_CONFIG_FILE environment variable. This variable is only honored if AWS_SDK_LOAD_CONFIG is set to a truthy value.
* feature: EnvironmentVariable: Add support for the AWS_SHARED_CREDENTIALS_FILE environment variable if AWS_SDK_LOAD_CONFIG is set
* feature: Promises: Binds response object to the data object with which successful request promises are resolved

## 2.43.0
* feature: APIGateway: Add support for "embed" property.
* feature: CodeStar: AWS CodeStar is a cloud-based service for creating, managing, and working with software development projects on AWS. An AWS CodeStar project creates and integrates AWS services for your project development toolchain. AWS CodeStar also manages the permissions required for project users.
* feature: EC2: Adds support for creating an Amazon FPGA Image (AFI) from a specified design checkpoint (DCP).
* feature: IAM: This changes introduces a new IAM role type, Service Linked Role, which works like a normal role but must be managed via services' control. 
* feature: Lambda: Lambda integration with CloudDebugger service to enable customers to enable tracing for the Lambda functions and send trace information to the CloudDebugger service.
* feature: LexModelBuildingService: Amazon Lex is a service for building conversational interfaces into any application using voice and text.
* feature: Polly: API Update for Amazon Polly: Add support for speech marks
* feature: Rekognition: Given an image, the API detects explicit or suggestive adult content in the image and returns a list of corresponding labels with confidence scores, as well as a taxonomy (parent-child relation) for each label.

## 2.42.0
* bugfix: Parser: Makes casting payload blobs to strings an exceptional behavior rather than the default
* feature: Lambda: You can use tags to group and filter your Lambda functions, making it easier to analyze them for billing allocation purposes. For more information, see Tagging Lambda Functions.  You can now write or upgrade your Lambda functions using Python version 3.6. For more information, see Programming Model for Authoring Lambda Functions in Python. Note: Features will be rolled out in the US regions on 4/19.

## 2.41.0
* feature: APIGateway: API Gateway request validators
* feature: Batch: API Update for AWS Batch: Customer provided AMI for MANAGED Compute Environment 
* feature: GameLift: Allows developers to utilize an improved workflow when calling our Queues API and introduces a new feature that allows developers to specify a maximum allowable latency per Queue.
* feature: OpsWorks: Cloudwatch Logs agent configuration can now be attached to OpsWorks Layers using CreateLayer and UpdateLayer. OpsWorks will then automatically install and manage the CloudWatch Logs agent on the instances part of the OpsWorks Layer.

## 2.40.0
* feature: Redshift: This update adds the GetClusterCredentials API which is used to get temporary login credentials to the cluster. AccountWithRestoreAccess now has a new member AccountAlias, this is the identifier of the AWS support account authorized to restore the specified snapshot. This is added to support the feature where the customer can share their snapshot with the Amazon Redshift Support Account without having to manually specify the AWS Redshift Service account ID on the AWS Console/API.

## 2.39.0
* feature: ElastiCache: ElastiCache added support for testing the Elasticache Multi-AZ feature with Automatic Failover.
* feature: Http: Adds a connectTimeout option that allows slow-to-establish socket connections to be quickly abandoned

## 2.38.0
* feature: CloudWatch: Amazon Web Services announced the immediate availability of two additional alarm configuration rules for Amazon CloudWatch Alarms. The first rule is for configuring missing data treatment. Customers have the options to treat missing data as alarm threshold breached, alarm threshold not breached, maintain alarm state and the current default treatment. The second rule is for alarms based on percentiles metrics that can trigger unnecassarily if the percentile is calculated from a small number of samples. The new rule can treat percentiles with low sample counts as same as missing data. If the first rule is enabled, the same treatment will be applied when an alarm encounters a percentile with low sample counts.

## 2.37.0
* feature: LexRuntime: Adds support to PostContent for speech input

## 2.36.0
* feature: CloudDirectory: ListObjectAttributes now supports filtering by facet.

## 2.35.0
* feature: CloudFormation: Adding paginators for ListExports and ListImports
* feature: CloudFront: Amazon CloudFront now supports user configurable HTTP Read and Keep-Alive Idle Timeouts for your Custom Origin Servers
* feature: ResourceGroupsTaggingAPI: Resource Groups Tagging APIs can help you organize your resources and enable you to simplify resource management, access management, and cost allocation.
* feature: StorageGateway: File gateway mode in AWS Storage gateway provides access to objects in S3 as files on a Network File System (NFS) mount point. Once a file share is created, any changes made externally to the S3 bucket will not be reflected by the gateway. Using the cache refresh feature in this update, the customer can trigger an on-demand scan of the keys in their S3 bucket and refresh the file namespace cached on the gateway. It takes as an input the fileShare ARN and refreshes the cache for only that file share. Additionally there is new functionality on file gateway that allows you configure what squash options they would like on their file share, this allows a customer to configure their gateway to not squash root permissions. This can be done by setting options in NfsOptions for CreateNfsFileShare and UpdateNfsFileShare APIs.

## 2.34.0
* features: Batch: Customers can now provide a retryStrategy as part of the RegisterJobDefinition and SubmitJob API calls.
* features: EC2: Customers can now tag their Amazon EC2 Instances and Amazon EBS Volumes at the time of their creation.

## 2.33.0
* feature: core: Adds support for 'v4' and 'v4-unsigned-body' authtype traits.
* bugfix: ManagedUpload: Ensures multi-part upload locations are URI-decoded to match single-part upload locations.

## 2.32.0
* feature: S3: Adds a means of specifying tags to apply to objects of any size uploaded with AWS.S3.ManagedUploader
* feature: ApplicationAutoScaling: Application AutoScaling is launching support for a new target resource (AppStream 2.0 Fleets) as a scalable target.

## 2.31.0
* feature: DynamoDB: Adds ability to customize retry delays for DynamoDB. This previously worked for all services except DynamoDB. Also adds jitter to DynamoDB retries. See `AWS.Config.retryDelayOptions` for more information.
* feature: Waiter: Allow customization of a waiter using a special `$waiter` key
* feature: Lambda: Adds support for new runtime Node.js v6.10 for AWS Lambda service. :tada:
* feature: ELBv2: Adding waiters for Elastic Load Balancing V2
* feature: Discovery: Adds export configuration options to the API.

## 2.30.0
* feature: DynamoDb: Allow objects with inheritance chains to be converted to MapAttributeValues instead of undefined
* bugfix: CredentialsError: Update AWS.Config.getCredentials to overwrite the name (in addition to message and code) of errors thrown by underlying credential providers.

## 2.29.0
* feature: protocol: The SDK can now support JSON-value string shapes in headers
* feature: Pinpoint: Added ability to segment endpoints by user attributes in addition to endpoint attributes.
* feature: Pinpoint: Added functionality to publish raw app analytics and campaign events data as events streams to Kinesis and Kinesis Firehose.
* feature: ELBv2: Adding waiters for LoadBalancers in ELBv2.
* feature: MarketplaceCommerceAnalytics: This update adds a new data set, us_sales_and_use_tax_records, which enables AWS Marketplace sellers to programmatically access to their U.S. Sales and Use Tax report data.

## 2.28.0
* feature: DeviceFarm: Network shaping allows users to simulate network connections and conditions while testing their Android, iOS, and web apps with AWS Device Farm.
* feature: CloudWatchEvents: This update extends Target Data Type for configuring Target behavior during invocation.

## 2.27.0
* bugfix: TemporaryCredentials: Ensure master credentials are not expired before using them to refresh temporary credentials
* feature: CodeDeploy: Add paginators for Codedeploy
* feature: EMR: This release includes support for instance fleets in Amazon EMR

## 2.26.0
* feature: APIGateway: API Gateway has added support for ACM certificates on custom domain names. Both Amazon-issued certificates and uploaded third-part certificates are supported.
* feature: CloudDirectory: Introduces a new Cloud Directory API that enables you to retrieve all available parent paths for any type of object (a node, leaf node, policy node, and index node) in a hierarchy.

## 2.25.0
* feature: WorkDocs: Amazon WorkDocs API provides full administrator level access to WorkDocs site resources, allowing developers to integrate their applications to manage WorkDocs users, content and permissions programmatically.

## 2.24.0
* feature: RDS: Add support to using encrypted clusters as cross-region replication masters. Update CopyDBClusterSnapshot API to support encrypted cross region copy of Aurora cluster snapshots.

## 2.23.0
* feature: Budgets: When creating or editing a budget via the AWS Budgets API you can define notifications that are sent to subscribers when the actual or forecasted value for cost or usage exceeds the notificationThreshold associated with the budget notification object. Starting today, the maximum allowed value for the notificationThreshold was raised from 100 to 300. This change was made to give you more flexibility when setting budget notifications.
* feature: OpsWorksCM: OpsWorks for Chef Automate has added a new field "AssociatePublicIpAddress" to the CreateServer request, "CloudFormationStackArn" to the Server model and "TERMINATED" server state.

## 2.22.0
* bugfix: MechanicalTurkRequester: Rename MechanicalTurkRequester to MTurk

## 2.21.0
* feature: DynamoDB: Time to Live (TTL) is a feature that allows you to define when items in a table expire and can be purged from the database, so that you don't have to track expired data and delete it manually. With TTL enabled on a DynamoDB table, you can set a timestamp for deletion on a per-item basis, allowing you to limit storage usage to only those records that are relevant.
* feature: DynamoDBStreams: Time to Live (TTL) is a feature that allows you to define when items in a table expire and can be purged from the database, so that you don't have to track expired data and delete it manually. With TTL enabled on a DynamoDB table, you can set a timestamp for deletion on a per-item basis, allowing you to limit storage usage to only those records that are relevant.
* feature: IAM: This release adds support for AWS Organizations service control policies (SCPs) to SimulatePrincipalPolicy operation. If there are SCPs associated with the simulated user's account, their effect on the result is captured in the OrganizationDecisionDetail element in the EvaluationResult.
* feature: MechanicalTurkRequester: Amazon Mechanical Turk is a web service that provides an on-demand, scalable, human workforce to complete jobs that humans can do better than computers, for example, recognizing objects in photos.
* feature: Organizations: AWS Organizations is a web service that enables you to consolidate your multiple AWS accounts into an organization and centrally manage your accounts and their resources.

## 2.20.0
* feature: ES: Added three new API calls to expose Amazon Elasticsearch imposed limits.

## 2.19.0
* bugfix: XHR: Fixes an issue where the callback provided to an operation would not fire if a request was aborted after being sent. The bug only affected the browser SDK.
* feature: S3: Added an instance method to S3 clients to create POST form data with presigned upload policies
* feature: DynamoDB: Expose DynamoDB DocumentClient marshaller/unmarshaller as AWS.DynamoDB.Converter

## 2.18.0
* feature: GameLift: Allow developers to configure global queues for creating GameSessions. Allow PlayerData on PlayerSessions to store player-specific data.
* feature: Route53: Added support for operations CreateVPCAssociationAuthorization and DeleteVPCAssociationAuthorization to throw a ConcurrentModification error when a conflicting modification occurs in parallel to the authorizations in place for a given hosted zone.
* feature: ElasticBeanstalk: Elastic Beanstalk adds support for creating and managing custom platform.

## 2.17.0
* bugfix: TypeScript: Enable the configuration credentials to be nulled so that the global config is not used.
* feature: EC2: Added the billingProduct parameter to the RegisterImage API.

## 2.16.0
* feature: DirectConnect: This update will introduce the ability for Direct Connect customers to take advantage of Link Aggregation (LAG). This allows you to bundle many individual physical interfaces into a single logical interface, referred to as a LAG. This makes administration much simpler as the majority of configuration is done on the LAG while you are free to add or remove physical interfaces from the bundle as bandwidth demand increases or decreases. A concrete example of the simplification added by LAG is that customers need only a single BGP session as opposed to one session per physical connection.

## 2.15.0
* feature: CognitoIdentity: Allows createIdentityPool and updateIdentityPool API to set server side token check value on identity pool.
* feature: ConfigService: AWS Config now supports a new test mode for the PutEvaluations API. Set the TestMode parameter to true in your custom rule to verify whether your AWS Lambda function will deliver evaluation results to AWS Config. No updates occur to your existing evaluations, and evaluation results are not sent to AWS Config.

## 2.14.0
* feature: KMS: This release of AWS Key Management Service introduces the ability to tag keys. Tagging keys can help you organize your keys and track your KMS costs in the cost allocation report. This release also increases the maximum length of a key ID to accommodate ARNs that include a long key alias.

## 2.13.0
* feature: Ec2: Adds support for the new Modify Volumes apis.

## 2.12.0
* feature: StorageGateway: File gateway mode in AWS Storage gateway provides access to objects in S3 as files on a Network File System (NFS) mount point. This is done by creating Nfs file shares using existing APIs CreateNfsFileShare. Using the feature in this update, the customer can restrict the clients that have read/write access to the gateway by specifying the list of clients as a list of IP addresses or CIDR blocks. This list can be specified using the API CreateNfsFileShare while creating new file shares, or UpdateNfsFileShare while update existing file shares. To find out the list of clients that have access, the existing API DescribeNfsFileShare will now output the list of clients that have access.

## 2.11.0
* bugfix: TypeScript: Add `endpoint` property to AWS.S3 instance declaration.
* feature: EC2: This feature allows customers to associate an IAM profile to running instances that do not have any.
* feature: Rekognition: DetectFaces and IndexFaces operations now return an estimate of the age of the face as an age range.

## 2.10.0
* bugfix: JSON: Fixes issue caused when trying to unmarshall null binary shapes.
* bugfix: TypeScript: Add `credentialProvider` as an optional parameter of `ConfigurationOptions`.
* feature: LexRuntime: Amazon Lex is a service for building conversational interactions into any application using voice or text.

## 2.9.0
* feature: EC2: Adds instance health check functionality to replace unhealthy EC2 Spot fleet instances with fresh ones
* feature: CloudDirectory: Amazon Cloud Directory is a highly scalable, high performance, multi-tenant directory service in the cloud. Its web-based directories make it easy for you to organize and manage application resources such as users, groups, locations, devices, policies, and the rich relationships between them.
* feature: CodeDeploy: This release of AWS CodeDeploy introduces support for blue/green deployments. In a blue/green deployment, the current set of instances in a deployment group is replaced by new instances that have the latest application revision installed on them. After traffic is rerouted behind a load balancer to the replacement instances, the original instances can be terminated automatically or kept running for other uses.
* feature: RDS: Added support for the `ModifyDBSnapshot` and `ModifyDBSnapshotMessage` operations

## 2.8.0
* bugfix: RDS: Fixes issue wherein the wrong parameter name was used for cross region presigned urls.
* feature: ELBv2: Application Load Balancers now support native Internet Protocol version 6 (IPv6) in an Amazon Virtual Private Cloud (VPC). With this ability, clients can now connect to the Application Load Balancer in a dual-stack mode via either IPv4 or IPv6.
* feature: RDS: Adds cross region read replica copying.

## 2.7.28
* feature: CognitoIdentityCredentials: Adds `clientConfig` as an optional parameter to the `CognitoIdentityCredentials` constructor. This parameter can be used to pass in client configuration to the underlying service clients.
* feature: TemporaryCredentials: Allows passing of master credentials to the TemporaryCredentials provider.
* feature: CodeCommit: Added new API to list the different files between 2 commits
* feature: ECS: Amazon ECS now supports a state for container instances that can be used to drain a container instance in preparation for maintenance or cluster scale down.

## 2.7.27
* bugfix: Performance: This change reverts a request body cast in the node HTTP handler that caused a performance regression.
* feature: ACM: Updated response elements for DescribeCertificate API in support of managed renewal.

## 2.7.26
* feature: EC2: Amazon EC2 Spot instances now support dedicated tenancy, providing the ability to run Spot instances single-tenant manner on physically isolated hardware within a VPC to satisfy security, privacy, or other compliance requirements. Dedicated Spot instances can be requested using RequestSpotInstances and RequestSpotFleet.

## 2.7.25
* feature: RDS: Updates AWS.RDS API to the latest version.

## 2.7.24
* bugfix: HTTP: Ensure that buffers are not created with Buffer.from in node 4.0-4.4
* bugfix: core: Deprecate v2.7.23

## 2.7.23
* bugfix: S3: Convert string bodies to buffers to ensure correct encoding is used
* feature: DynamoDB: Adds support for tagging tables and indexes.

## 2.7.22
* feature: CUR: The AWS Cost and Usage Report Service API allows you to enable and disable the Cost & Usage report, as well as modify the report name, the data granularity, and the delivery preferences.
* bugfix: DynamoDB.DocumentClient: Allows objects created using Object.create(null) to be properly serialized by the DDB document client.

## 2.7.21
* feature: ConfigService: Updates putConfigRule to support using/writing rules based on the OversizedConfigurationItemChangeNotification message type.
* feature: MarketplaceCommerceAnalytics: Added support for data set disbursed_amount_by_instance_hours, with historical data available starting 2012-09-04. New data is published to this data set every 30 days.
* bugfix: DynamoDB.DocumentClient: Fixes issue where empty strings in nested members were not removed when convertEmptyValues was set.
* bugfix: CognitoIdentityCredentials: Fixes issue where the cached identity id would sometimes not be retrieved when SDK is run while offline.

## 2.7.20
* feature: CodeDeploy: CodeDeploy supports IAM Session Arns in addition to IAM User Arns for on premise host authentication.
* feature: ECS: Amazon EC2 Container Service (ECS) now supports the ability to customize the placement of tasks on container instances.

## 2.7.19
* feature: APIGateway: This update introduces two new operations used to dynamically discover SDK types and what configuration each type accepts.
* feature: ElasticBeanstalk: Adds a new feature for managing Application Version Lifecycle.
* feature: IAM: Adds service-specific credentials to IAM service to make it easier to onboard CodeCommit customers. These are username/password credentials that work with a single service.

## 2.7.18
* feature: Rekognition: CORS support added. Now a default service in the browser build of the JavaScript SDK.
* feature: EC2: Adds cross region encrypted snapshot copying (CopyDBSnapshot).
* feature: ECR: Amazon ECR now implements Docker Image Manifest V2, Schema 2 providing the ability to use multiple tags per image, support for storing Windows container images, and compatibility with the Open Container Initiative (OCI) image format. With this update, customers can also add tags to an image via PutImage and delete tags using BatchDeleteImage.

## 2.7.17
* bugfix: Promises: Fixes issue introduced in v2.6.12. Calling AWS.config.setPromisesDependency(null) will once again force the SDK to use native promises if they are available.
* feature: Firehose: The processing feature enables users to process and modify records before Amazon Firehose delivers them to destinations.
* feature: StorageGateway: File gateway is a new mode in the AWS Storage Gateway that support a file interface into S3, alongside the current block-based volume and VTL storage. File gateway combines a service and virtual software appliance, enabling you to store and retrieve objects in Amazon S3 using industry standard file protocols such as NFS. The software appliance, or gateway, is deployed into your on-premises environment as a virtual machine (VM) running on VMware ESXi. The gateway provides access to objects in S3 as files on a Network File System (NFS) mount point.

## 2.7.16
* feature: DocumentClient: Add a constructor option to convert empty strings, sets, and binary strings to a Dynamo NULL typed field
* feature: Discovery: Adds new APIs to group discovered servers into Applications with get summary and neighbors. Includes additional filters for ListConfigurations and DescribeAgents API.
* feature: CognitoIdentity: Added fine-grained role-based access control for Cognito identity pools. Developers can configure an identity pool to get the IAM role from an authenticated user's token, or they can configure rules that will map a user to a different role

## 2.7.15
* bugfix: Buffer: Update base64 encode/decode to use Buffer.fill when available and throw an error if a number is provided.
* bugfix: XRay: Add X-Amzn-Trace-Id to list of unsigned headers to prevent signature mismatch errors if the header value is modified while the request is in flight.
* feature: Cognito: Add new regions and endpoints for Amazon Cognito Identity, Amazon Cognito Sync, and Amazon Cognito Identity Provider.
* feature: CognitoIdentityServiceProvider: User Pools now offers groups as an easy way to manage users and their permissions.
* feature: SSM: Add support for Patch Baseline and Patch Compliance APIs

## 2.7.14
* feature: Batch: AWS Batch is a batch computing service that lets customers define queues and compute environments and then submit work as batch jobs.
* feature: DMS: Adds support for SSL enabled Oracle endpoints and task modification.
* feature: CloudWatchLogs: Amazon CloudWatch announces detailed billing to CloudWatch Logs. You can now get usage and cost per log group. You can also add tags on your log groups to get a fine-grained view on cost for logs across business dimension such as cost center, application name, AWS services such as Lambda, CloudTrail, ECS, and other. Up to 50 tags can be added to each log group.

## 2.7.13
* feature: CloudFront:  Add lambda function associations to cache behaviors.
* feature: RDS: Add cluster create data to DBCluster APIs.
* feature: WAFRegional: With this new feature, customers can use AWS WAF directly on Application Load Balancers in a VPC within available regions to protect their websites and web services from malicious attacks such as SQL injection, Cross Site Scripting, bad bots, etc.

## 2.7.12
* feature: S3: Add the Version ID field to the Get and Put object tagging operations.

## 2.7.11
* bugfix: TypeScript: Exposes typings for classes that live on service namespaces (i.e. DynamoDB.DocumentClient). Also exposes interfaces off of service namespaces to allow easier migration from some 3rd party typings. Interfaces will continue to be exposed via Service.Types as well.
* bugfix: TypeScript: Removes remaining `reference` comments from definitions.
* feature: ConfigService: Increases the number of config rules for all accounts from 25 to 50.
* feature: EC2: Adds T2.xlarge, T2.2xlarge, and R4 instance types.

## 2.7.10
* feature: APIGateway: You can now publish your APIs on Amazon API Gateway as products on the AWS Marketplace. Use the SDK to associate your APIs on API Gateway with Marketplace Product Codes. API Gateway will then send metering data to the Marketplace Metering Service on your behalf. Also, API Gateway now supports documenting your API.
* feature: Appstream: Announcing Amazon AppStream 2.0 - a secure, fully managed desktop application streaming service that provides users instant access to their apps from a web browser.
* feature: CodeBuild: AWS CodeBuild is a fully-managed build service in the cloud. CodeBuild compiles source code, runs tests, and produces packages that are ready to deploy. CodeBuild eliminates the need to provision, manage, and scale your own build servers. CodeBuild scales continuously and processes multiple builds concurrently, so your builds are never waiting in a queue. You can get started quickly with CodeBuild’s prepackaged build environments, or you can use custom build environments to use your own build tools. With CodeBuild, you only pay by the minute.
* feature: DirectConnect: API Update for IPv6 for Direct Connect.
* feature: EC2: Adds IPv6 Support for EC2 and new F1 Instance types.
* feature: ElasticBeanstalk: Integrates AWS CodeBuild into ElasticBeanstalk.
* feature: Health: When your business is counting on the performance of your cloud solutions, having relevant and timely insights into events impacting your AWS resources is essential. The AWS Health API serves as the primary source for you to receive personalized information related to your AWS infrastructure, guiding your through scheduled changes, and accelerating the troubleshooting of issues impacting your AWS resources and accounts. At launch, the APIs will be available to Business and Enterprise Support customers.
* feature: Lambda: Adds new API `getAccountSettings`, dotnetcore 1.0 runtime support, DeadLetterConfig, and event source mappings with kinesis streams.
* feature: OpsWorksCM: AWS OpsWorks for Chef Automate gives customers a single tenant Chef Automate server. The Chef Automate server is fully managed by AWS and supports automatic backup, restore and upgrade operations.
* feature: Pinpoint: Amazon Pinpoint makes it easy to run targeted campaigns to improve user engagement. Pinpoint helps you understand your users behavior, define who to target, what messages to send, when to deliver them, and tracks the results of the campaign.
* feature: Shield: AWS Shield is a managed Distributed Denial of Service (DDoS) protection for web applications running on AWS.
* feature: SSM: Amazon EC2 Systems Manager is a flexible and easy to use management service that enables enterprises to securely manage and administer their workloads running on-premises or in the AWS cloud, using a single unified experience. These tasks include collecting system inventory, AWSmaintaining consistent state, ad hoc remote execution, automating imaging creation, applying OS patches, and managing configuration parameters.
* feature: StepFunctions: Adds support for the AWS Step Functions API.
* feature: XRay: AWS X-Ray helps developers analyze and debug distributed applications. With X-Ray, you can understand how your application and its underlying services are performing to identify and troubleshoot the root cause of performance issues and errors.

## 2.7.9
* feature: Polly: Adds `AWS.Polly.Presigner` to create presigned urls for `synthesizeSpeech`.
* feature: Polly: Amazon Polly is a service that turns text into lifelike speech, making it easy to develop applications that use high-quality speech to increase engagement and accessibility. With Amazon Polly the developers can build speech-enabled apps that work in multiple geographies.
* feature: Lightsail: An extremely simplified VM creation and management service.
* feature: Rekognition: Amazon Rekognition is a service that makes it easy to add image analysis to your applications. With Rekognition, you can detect objects, scenes, and faces in images. You can also search and compare faces. Rekognition’s API enables you to quickly add sophisticated deep learning-based visual search and image classification to your applications. 
* feature: Snowball: This release of AWS Snowball introduces a new job type, new APIs, and the new AWS Snowball Edge device to support local compute and storage use cases. The local compute is AWS Lambda powered by AWS Greengrass, and the local storage is compatible with Amazon S3. Each 100 TB Snowball Edge can use the storage and compute power of the AWS cloud locally in places where connecting to the internet may not be an option. Additionally, Snowball Edges can be used in clusters for applications that require greater data durability.

## 2.7.8
* feature: core: The SDK will now automatically provide a version 4 UUID for top-level operation parameters that are modeled with the `idempotencyToken` flag. Users may continue to provide their own tokens.
* feature: S3: Updates the AWS.S3 API to the latest version.

## 2.7.7
* feature: CloudFormation: List-imports API is to list all stacks of user's namespace that are using a specific output.
* feature: Glacier: Allow customers to retrieve their data with different tiers.
* feature: Route53: Expand current IPAddress field to accept IPv6 address.
* feature: S3: Allow customers to specify different restore tiers when accessing their data.

## 2.7.6
* feature: CloudTrail: This release of AWS CloudTrail supports configuring your trail with event selectors. Use event selectors to specify the type of events that you want your trails to log. You can configure event selectors to log read-only, write-only, or all events. CloudTrail supports logging Amazon S3 object level APIs such as GetObject, DeleteObject, and PutObject. You can configure event selectors for your trail to log object level operations.
* feature: ECS: ECS will include a new field named `version` in API responses relating to tasks and container instances. Version is a number that increments every time a change has been made to the associated resource. Users replicating their ECS resource state can use the version field reported by the ECS APIs to determine if their local state is fresh.

## 2.7.5
* bugfix: TypeScript: Stubs DOM interfaces and removes type reference to node.
* feature: ElasticTranscoder: Support for multiple media input files that can be stitched together.
* feature: Lambda: Adds support for Environment variables.
* feature: Gamelift: Provide the ability to remote access into GameLift managed servers.
* feature: EMR: Automatic Scaling of EMR clusters based on metrics. Adds support for cancelling a pending Amazon EMR step.
* feature: ApplicationAutoScaling: Adds support for a new target resource (EMR Instance Groups) as a scalable target.

## 2.7.4
* feature: MarketplaceMetering: Allows third parties to send metering records.
* feature: SQS: Updates the latest version of the SQS API.
* feature: CloudWatch: Amazon CloudWatch now supports Percentiles as a statistical function.
* feature: APIGateway: Allows defining an encoding for the API per content type in order to support 'binary' use case.

## 2.7.3
* feature: Route53: Adds support for cross account VPC association.
* feature: ServiceCatalog: This release enables Service Catalog users to perform administer operations via API.

## 2.7.2
* feature: ElastiCache: Additional parameter to 2 create apis to provide an auth Token for Redis.
* feature: DirectoryService: Adds support for SchemaExtensions.
* feature: Kinesis: Adds DescribeLimits API which displays customer's current shard limit and the number of open shards that are being used. Also adds a 'display stream creation timestamp' feature to DescribeStream API.

## 2.7.1
* feature: CognitoIdentityServiceProvider: Adds schema attributes to CreateUserPool.
* bugfix: TypeScript: Updates definitions to work when `noImplicitAny` and `strictNullChecks` are set to `true`.

## 2.7.0
* feature: TypeScript: Adds typescript definition files to the SDK.
* feature: CloudWatchLogs: Amazon CloudWatch Metrics to Logs is a capability that helps pivot from your logs-extracted metrics directly to the corresponding logs.

## 2.6.15
* feature: DirectConnect: AWS Direct Connect provides three new APIs to support basic tagging on Direct Connect resources.

## 2.6.14
* feature: SES: Amazon Simple Email Service (Amazon SES) now enables you to track your bounce, complaint, delivery, sent, and rejected email metrics with fine-grained granularity.

## 2.6.13
* feature: CloudFormation: Adding ResourcesToSkip parameter to ContinueUpdateRollback API, adding support for ListExports, new ChangeSet types and Transforms.

## 2.6.12
* feature: CredentialProviderChain: Adds promise support for the `resolve` method on the AWS.CredentialProviderChain class. Corresponding promise method is called `resolvePromise`.
* feature: Credentials: Adds promise support for the `get` and `refresh` methods of the AWS.Credentials class. Corresponding promise methods are called `getPromise` and `refreshPromise`.
* feature: ManagedUpload: Adds promise support for S3.ManagedUpload. Calling `s3.upload(params).promise()` will return a promise.
* feature: SMS: AWS Server Migration Service (SMS) is an agentless service which makes it easier and faster for you to migrate thousands of on-premises workloads to AWS. AWS SMS allows you to automate, schedule, and track incremental replications of live server volumes, making it easier for you to coordinate large-scale server migrations.

## 2.6.11
* feature: Budgets: Adds the AWS Budgets service API via AWS.Budgets.

## 2.6.10
* feature: CloudFront: Ability to use Amazon CloudFront to deliver your content both via IPv6 and IPv4 using HTTP/HTTPS.
* feature: IoT: Updates IoT API to the latest available version.
* feature: RDS: Updates RDS to support accessing other AWS services by gassociating an IAM role with necessary permissions to your DB cluster.

## 2.6.9
* bugfix: s3: Propagate an error from a stream to s3.upload callback #1169
* feature: S3: Adds support for using dualstack with accelerate endpoints.
* feature: ACM: This change allows users to import third-party SSL/TLS certificates into ACM.
* feature: ElasticBeanstalk: Adds CodeCommit integraion. DescribeApplicationVersions updated to support pagination.
* feature: GameLift: New APIs to protect game developer resource (builds, alias, fleets, instances, game sessions and player sessions) against abuse.

## 2.6.8
* feature: ECR: DescribeImages is a new api used to expose image metadata which today includes image size and image creation timestamp.
* feature: ElastiCache: Elasticache is launching a new major engine release of Redis, 3.2 (providing stability updates and new command sets over 2.8), as well as ElasticSupport for enabling Redis Cluster in 3.2, which provides support for multiple node groups to horizontally scale data, as well as superior engine failover capabilities.

## 2.6.7
* feature: CognitoIdentityServiceProvider: Added new operation "AdminCreateUser" that creates a new user in the specified user pool and sends a welcome message via email or phone (SMS).
* feature: Route53: Retries PriorRequestNotComplete errors.

## 2.6.6
* feature: EC2: Adding support for EC2 Convertible RIs and the EC2 RI regional benefit.
* feature: S3: S3 API update with partNumber extension and a bug fix to address list-objects command failing when a bucket is marked with request-pays.

## 2.6.5
* bugfix: apiVersion: Fixes an issue where some service clients would fail to instantiate if an older apiVersion was specified.
* feature: CloudFormation: Adds support for specifying an IAM service role for CloudFormation stack operations.

## 2.6.4
* bugfix: Browser: Updates `url` and `querystring` dependencies to be controlled by the SDK instead of tools like browserify or webpack.
* bugfix: Config: Fixes an issue where specifying service-specific config on the global AWS.config object would fail if the service had not yet been instantiated.
* feature: CodeDeploy: AWS CodeDeploy now integrates with Amazon CloudWatch alarms, making it possible to stop a deployment if there is a change in the state of a specified alarm for a number of consecutive periods, as specified in the alarm threshold. AWS CodeDeploy also now supports automatically rolling back a deployment if certain conditions are met, such as a deployment failure or an activated alarm.
* feature: EMR: Added support for Security Configurations which can be used to enable encryption at-rest and in-transit for certain applications on Amazon EMR.
* feature: RDS: Provide local time zone support for AWS RDS SqlServer database instances.
* feature: Redshift: This release of Amazon Redshift introduces Enhanced VPC Routing. When you use Amazon Redshift Enhanced VPC Routing, Amazon Redshift forces all COPY and UNLOAD traffic between your cluster and your data repositories through your Amazon VPC.

## 2.6.3
* bugfix: Node_Https: Fixes an issue caused when https.globalAgent is set to false.
* feature: Iot: Updates registerCertificate operation, and allows users to specify cannedAcl for S3 action.
* feature: RDS: Updates describeDbCluster operation to allow specifying a ReaderEndpoint for accessing cluster readers.

## 2.6.2
* feature: ServiceCatalog: Updates the API for AWS.ServiceCatalog.

## 2.6.1
* bugfix: SDK: Fixes an issue that caused all services to be loaded into memory when requiring the SDK. This issue was introduced in version `2.6.0` of the SDK, and address #1124.

## 2.6.0
* feature: CloudFront: Adds HTTP2 support for Amazon CloudFront distributions.
* feature: MetadataService: Adds retry logic to the EC2 Metadata Service, so that EC2MetadataCredentials will retry TimeoutError. This retry logic is also added to ECSCredentials. Resolves #692
* feature: ServiceCatalog: CORS support added. Now a default service in the browser build of the JavaScript SDK.
* feature: Tools: Adds support for bundling the SDK with webpack. Also adds support for creating node.js bundles using webpack or browserify.

## 2.5.6
* feature: RDS: Adds new operation describeSourceRegions to provide list of all the source region names and endpoints for any region. Source regions are the regions where current region can get a replica or copy a snapshot from.

## 2.5.5
* feature: CognitoIdentityServiceProvider: Adds support for bulk import of users.
* feature: GameLift: Adds Linux support.
* feature: Iot: Adds Iot as a default service in the browser distribution of the AWS SDK for JavaScript.
* feature: RDS: Adds information in response of describeOptionGroupOptions about options that conflict with each other.

## 2.5.4
* feature: CloudFront: CloudFront is adding a Querystring Whitelist Option. Customers will be able to choose to forward certain querystring keys instead of a.) all of them or b.) none of them.
* feature: CodePipeline: CodePiepline has introduced a new feature to return pipeline execution details. Execution details consists of source revisions that are running in the pipeline. Customers will be able to tell what source revisions that are running through the stages in pipeline by fetching execution details of each stage.
* feature: Route53: With this release, Route 53 will support the following new features: support for the NAPTR DNS record type, a new testDNSAnswer API which enables customers to send a test query against a specific name server using spoofed delegation nameserver, resolver, and ECS IPs, and support metric-based health check in ap-south-1 region.

## 2.5.3
* feature: RDS: Adds resource ARNs to Describe APIs.

## 2.5.2
* bugfix: Waiter: Fixes bug in `clusterDeleted` waiter for AWS.Redshift.
* feature: EC2: Adds  new APIs supporting dedicated host reservations. Also adds new property to response of `describeSpotFleetRequests` to indicate  the activity status of spot fleet requests.
* feature: Request: eachItem method stops iteration on returning false (like eachPage)
* feature: WorkSpaces: Adds new APIs to support the launch and management of WorkSpaces that are paid for and used by the hour.

## 2.5.1
* feature: ACM: Increase tagging limit from 10 to 50.
* feature: APIGateway: Amazon API Gateway now supports API usage plans. Usage plans allows you to easily manage and monetize your APIs for your API-based business.
* feature: ECS: Adds support for memory reservation and network mode on task definitions. Also adds splunk as a supported log driver.

## 2.5.0
* feature: AutoScaling: Adds 3 new APIs for ELB L7 integration: attachLoadBalancerTargetGroups, detachLoadBalancerTargetGroups, and describeLoadBalancerTargetGroups.
* feature: ECS: Adds ECS support for ELBv2. Supports Application Load Balancer target groups to enable dynamic ports and path-based routing.
* feature: ELBv2: Adds new backwards incompatible application load balancer API version.  Application load balancers are a new load balancer that is now supported by the Elastic Load Balancing service. Application load balancers support HTTP/2, WebSockets, routing based on URL path, and routing to multiple ports on a single instance.
* feature: KMS: Adds support for importing customer-supplied cryptographic keys. New import key feature lets you import keys from your own key management infrastructure to KMS for greater control over generation and storage of keys and meeting compliance requirements of sensitive workloads.
* feature: KinesisAnalytics: Adds the new service Amazon Kinesis Analytics, a fully managed service for continuously querying streaming data using standard SQL. With Kinesis Analytics, you can write standard SQL queries on streaming data and gain actionable insights in real-time, without having to learn any new programming skills. The service allows you to build applications that continuously read data from streaming data sources, process that data using standard SQL, and send the processed data to up to four destinations of your choice. Kinesis Analytics enables you to generate time-series analytics, feed a real-time dashboard, create real-time alarms and notifications, and much more.
* feature: S3: Adds support for IPv6/IPv4 Dualstack endpoint. A new opt-in boolean  option `use Dualstack` can be specified for S3 service clients: `new AWS.S3({useDualstack: true})`. Alternatively, to configure it once for all subsequent S3 service clients: `AWS.config.update({s3: {useDualstack: true}})`.
* feature: Snowball: Adds Amazon Snowball, a new job management service.

## 2.4.14
* feature: CloudFront: Amazon CloudFront now supports tagging for Web and Streaming distributions. Tags make it easier for you to allocate costs and optimize spending by categorizing and grouping AWS resources.
* feature: ECR: Adds filtering of ListImages requests based on whether an image is tagged or untagged.
* feature: MarketplaceCommerceAnalytics: Adds the `startSupportDataExport` operation.

## 2.4.13
* feature: ApplicationAutoScaling: CORS support added. Now a default service in the browser build of the JavaScript SDK.
* feature: AutoScaling: CORS support added. Now a default service in the browser build of the JavaScript SDK.
* feature: CodeDeploy: CORS support added. Now a default service in the browser build of the JavaScript SDK.
* feature: GameLift: Provides a new Search API for GameLift, which allows game developers to retrieve filtered and sorted lists of their GameSessions.
* feature: RDS: You can now use the AWS Management Console to easily move your DB instance to a different VPC, or to a different subnet group in the same VPC. For more information, see Updating the VPC for a DB Instance. If your DB instance is not in a VPC, you can now use the AWS Management Console to easily move your DB instance into a VPC. You can now copy the source files from a MySQL database to an Amazon Simple Storage Service (Amazon S3) bucket, and then restore an Amazon Aurora DB cluster from those files. This option can be considerably faster than migrating data using mysqldump.

## 2.4.12
* bugfix: Request: Adds a content-length check for the stream returned from `createReadStream()`, and the stream will emit an error when the bytes received are fewer than specified by the response content-length header.
* bugfix: S3: Reverts behavior introduced in version `2.4.0` of the SDK to default the `signatureVersion` of S3 clients to `v4`. S3 clients instantiated without a user-defined `signatureVersion` will now default to `v2` unless the region only supports `v4` signing. This change is being made due to issues sending non-ascii characters in headers when using `v4` signing.
* feature: CloudWatchLogs: Updates the `putMetricFilter` operation.
* feature: EMR: Adds enhanced debugging.
* feature: Iot: Adds `listOutgoingCertificates` and support for allowing autoregistration.
* feature: MachineLearning: Adds compute time and entity timestamp to multiple operations.
* feature: RDS: Support for license model and versioning of option groups.
* feature: Route53Domains: Adds new APIs to renew domains for a specified duration, get domain suggestions, and view billing.

## 2.4.11
* feature: APIGateway: Adds support for authentication through Cognito User Pools.
* feature: CognitoIdentityServiceProvider: Introduces support for Your User Pools.
* feature: DirectoryService: Enables routing to on-premises public IP for Microsoft Active Directory.
* feature: EC2: Enables resolution of DNS queries from a peered VPC to a private IP address.
* feature: ES: Updates to Elasticsearch version 2.3, which offers improved performance, memory management, and security. It also offers several new features includinng pipeline aggregations to perform advanced analytics like moving averages and derivatives, and enhancements to geospatial queries.
* feature: Waiter: Adds Waiters for AWS.CodeDeploy.

## 2.4.10
* feature: util: Parse ini files containing comments using #
* feature: Iot: Adds support for thing types. Thing types are entities that store a description of common features of Things that are of the same logical type. Also adds support for `:` in Thing name. Adds a separator in Firehose action.

## 2.4.9
* feature: ACM: Adds reason for failure when describing certificates.
* feature: ConfigService: Adds support for RDS and ACM resources types and introduces two new APIs: DeleteEvaluationResults and StartConfigRulesEvaluation. Updated PutConfigRule API can now create Config rules that are triggered by both configuration changes and periodicity.
* feature: ElasticTranscoder: Adds WAV file format output support.
* feature: Paginator: Adds paginator for SSM DescribeInstanceInformation operation.

## 2.4.8
* feature: CloudFormation: CORS support added. Now a default service in the browser build of the JavaScript SDK.
* feature: CloudHSM: CORS support added. Now a default service in the browser build of the JavaScript SDK.
* feature: DeviceFarm: Adds session-based APIs.
* feature: EMR: CORS support added. Now a default service in the browser build of the JavaScript SDK.
* feature: ElastiCache: CORS support added. Now a default service in the browser build of the JavaScript SDK.
* feature: ElasticBeanstalk: CORS support added. Now a default service in the browser build of the JavaScript SDK.
* feature: Redshift: CORS support added. Now a default service in the browser build of the JavaScript SDK.
* feature: SSM: Adds notification support.
