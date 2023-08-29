window.BENCHMARK_DATA = {
  "lastUpdate": 1693335777844,
  "repoUrl": "https://github.com/SecuringCarter/opentelemetry-collector-contrib",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "Alex Boten",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1c7aecbc8b60a5175b36ce168c53822d256a54f4",
          "message": "Delete check_links_config.json",
          "timestamp": "2023-08-29T09:38:57-07:00",
          "tree_id": "e7aa48aea043a72d529dfb933596388517a557a6",
          "url": "https://github.com/SecuringCarter/opentelemetry-collector-contrib/commit/1c7aecbc8b60a5175b36ce168c53822d256a54f4"
        },
        "date": 1693332491443,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cpu_percentage_avg",
            "value": 11.798807614075697,
            "unit": "%",
            "extra": "Log10kDPS/OTLP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 12.999467949109468,
            "unit": "%",
            "extra": "Log10kDPS/OTLP - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 59,
            "unit": "MiB",
            "extra": "Log10kDPS/OTLP - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 84,
            "unit": "MiB",
            "extra": "Log10kDPS/OTLP - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/OTLP - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 8.599224201497087,
            "unit": "%",
            "extra": "Log10kDPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 10.33146573493536,
            "unit": "%",
            "extra": "Log10kDPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 54,
            "unit": "MiB",
            "extra": "Log10kDPS/OTLP-HTTP - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 77,
            "unit": "MiB",
            "extra": "Log10kDPS/OTLP-HTTP - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/OTLP-HTTP - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 12.999235194330423,
            "unit": "%",
            "extra": "Log10kDPS/filelog - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 13.996975444898355,
            "unit": "%",
            "extra": "Log10kDPS/filelog - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 57,
            "unit": "MiB",
            "extra": "Log10kDPS/filelog - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 81,
            "unit": "MiB",
            "extra": "Log10kDPS/filelog - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/filelog - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 12.99933716379802,
            "unit": "%",
            "extra": "Log10kDPS/filelog_checkpoints - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 13.998343655319214,
            "unit": "%",
            "extra": "Log10kDPS/filelog_checkpoints - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 58,
            "unit": "MiB",
            "extra": "Log10kDPS/filelog_checkpoints - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 83,
            "unit": "MiB",
            "extra": "Log10kDPS/filelog_checkpoints - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/filelog_checkpoints - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 37.656351186239654,
            "unit": "%",
            "extra": "Log10kDPS/kubernetes_containers - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 39.65591366164864,
            "unit": "%",
            "extra": "Log10kDPS/kubernetes_containers - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 62,
            "unit": "MiB",
            "extra": "Log10kDPS/kubernetes_containers - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 90,
            "unit": "MiB",
            "extra": "Log10kDPS/kubernetes_containers - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/kubernetes_containers - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 33.79829388691,
            "unit": "%",
            "extra": "Log10kDPS/k8s_CRI-Containerd - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 35.65921806222018,
            "unit": "%",
            "extra": "Log10kDPS/k8s_CRI-Containerd - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 60,
            "unit": "MiB",
            "extra": "Log10kDPS/k8s_CRI-Containerd - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 87,
            "unit": "MiB",
            "extra": "Log10kDPS/k8s_CRI-Containerd - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/k8s_CRI-Containerd - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 24.998594475691053,
            "unit": "%",
            "extra": "Log10kDPS/k8s_CRI-Containerd_no_attr_ops - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 26.32443176183231,
            "unit": "%",
            "extra": "Log10kDPS/k8s_CRI-Containerd_no_attr_ops - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 59,
            "unit": "MiB",
            "extra": "Log10kDPS/k8s_CRI-Containerd_no_attr_ops - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 84,
            "unit": "MiB",
            "extra": "Log10kDPS/k8s_CRI-Containerd_no_attr_ops - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/k8s_CRI-Containerd_no_attr_ops - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 13.798983724167291,
            "unit": "%",
            "extra": "Log10kDPS/CRI-Containerd - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 15.663950767341555,
            "unit": "%",
            "extra": "Log10kDPS/CRI-Containerd - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 59,
            "unit": "MiB",
            "extra": "Log10kDPS/CRI-Containerd - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 84,
            "unit": "MiB",
            "extra": "Log10kDPS/CRI-Containerd - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/CRI-Containerd - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 14.33225165632471,
            "unit": "%",
            "extra": "Log10kDPS/syslog-tcp-batch-1 - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 15.665125651704349,
            "unit": "%",
            "extra": "Log10kDPS/syslog-tcp-batch-1 - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 57,
            "unit": "MiB",
            "extra": "Log10kDPS/syslog-tcp-batch-1 - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 81,
            "unit": "MiB",
            "extra": "Log10kDPS/syslog-tcp-batch-1 - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/syslog-tcp-batch-1 - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 5.2663862544196265,
            "unit": "%",
            "extra": "Log10kDPS/syslog-tcp-batch-100 - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 6.997981145421377,
            "unit": "%",
            "extra": "Log10kDPS/syslog-tcp-batch-100 - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 56,
            "unit": "MiB",
            "extra": "Log10kDPS/syslog-tcp-batch-100 - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 79,
            "unit": "MiB",
            "extra": "Log10kDPS/syslog-tcp-batch-100 - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/syslog-tcp-batch-100 - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 21.798276872371176,
            "unit": "%",
            "extra": "Log10kDPS/FluentForward-SplunkHEC - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 22.66235776682679,
            "unit": "%",
            "extra": "Log10kDPS/FluentForward-SplunkHEC - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 56,
            "unit": "MiB",
            "extra": "Log10kDPS/FluentForward-SplunkHEC - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 79,
            "unit": "MiB",
            "extra": "Log10kDPS/FluentForward-SplunkHEC - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/FluentForward-SplunkHEC - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 14.39837438417647,
            "unit": "%",
            "extra": "Log10kDPS/tcp-batch-1 - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 15.989717732063811,
            "unit": "%",
            "extra": "Log10kDPS/tcp-batch-1 - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 55,
            "unit": "MiB",
            "extra": "Log10kDPS/tcp-batch-1 - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 79,
            "unit": "MiB",
            "extra": "Log10kDPS/tcp-batch-1 - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/tcp-batch-1 - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 5.599654199327884,
            "unit": "%",
            "extra": "Log10kDPS/tcp-batch-100 - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 7.998760290806302,
            "unit": "%",
            "extra": "Log10kDPS/tcp-batch-100 - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 57,
            "unit": "MiB",
            "extra": "Log10kDPS/tcp-batch-100 - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 81,
            "unit": "MiB",
            "extra": "Log10kDPS/tcp-batch-100 - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/tcp-batch-100 - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 0.46659087389395976,
            "unit": "%",
            "extra": "IdleMode - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 1.999819833564768,
            "unit": "%",
            "extra": "IdleMode - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 45,
            "unit": "MiB",
            "extra": "IdleMode - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 64,
            "unit": "MiB",
            "extra": "IdleMode - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "IdleMode - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 39.730310553305,
            "unit": "%",
            "extra": "Metric10kDPS/OpenCensus - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 40.657042047073986,
            "unit": "%",
            "extra": "Metric10kDPS/OpenCensus - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 58,
            "unit": "MiB",
            "extra": "Metric10kDPS/OpenCensus - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 83,
            "unit": "MiB",
            "extra": "Metric10kDPS/OpenCensus - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Metric10kDPS/OpenCensus - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 23.93239212500232,
            "unit": "%",
            "extra": "Metric10kDPS/OTLP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 24.988221352077712,
            "unit": "%",
            "extra": "Metric10kDPS/OTLP - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 58,
            "unit": "MiB",
            "extra": "Metric10kDPS/OTLP - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 82,
            "unit": "MiB",
            "extra": "Metric10kDPS/OTLP - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Metric10kDPS/OTLP - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 19.932375006004243,
            "unit": "%",
            "extra": "Metric10kDPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 21.3262853159307,
            "unit": "%",
            "extra": "Metric10kDPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 54,
            "unit": "MiB",
            "extra": "Metric10kDPS/OTLP-HTTP - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 77,
            "unit": "MiB",
            "extra": "Metric10kDPS/OTLP-HTTP - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Metric10kDPS/OTLP-HTTP - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 52.9294342195176,
            "unit": "%",
            "extra": "Metric10kDPS/SignalFx - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 54.324366770651636,
            "unit": "%",
            "extra": "Metric10kDPS/SignalFx - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 57,
            "unit": "MiB",
            "extra": "Metric10kDPS/SignalFx - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 81,
            "unit": "MiB",
            "extra": "Metric10kDPS/SignalFx - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Metric10kDPS/SignalFx - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 34.66543692415796,
            "unit": "%",
            "extra": "MetricsFromFile - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 36.66267576331735,
            "unit": "%",
            "extra": "MetricsFromFile - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 57,
            "unit": "MiB",
            "extra": "MetricsFromFile - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 81,
            "unit": "MiB",
            "extra": "MetricsFromFile - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "MetricsFromFile - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 0,
            "unit": "%",
            "extra": "MetricResourceProcessor/update_and_rename_existing_attributes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 0,
            "unit": "%",
            "extra": "MetricResourceProcessor/update_and_rename_existing_attributes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 0,
            "unit": "MiB",
            "extra": "MetricResourceProcessor/update_and_rename_existing_attributes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 0,
            "unit": "MiB",
            "extra": "MetricResourceProcessor/update_and_rename_existing_attributes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "MetricResourceProcessor/update_and_rename_existing_attributes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 0,
            "unit": "%",
            "extra": "MetricResourceProcessor/set_attribute_on_empty_resource - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 0,
            "unit": "%",
            "extra": "MetricResourceProcessor/set_attribute_on_empty_resource - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 0,
            "unit": "MiB",
            "extra": "MetricResourceProcessor/set_attribute_on_empty_resource - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 0,
            "unit": "MiB",
            "extra": "MetricResourceProcessor/set_attribute_on_empty_resource - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "MetricResourceProcessor/set_attribute_on_empty_resource - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 13.99834083732003,
            "unit": "%",
            "extra": "Trace10kSPS/JaegerGRPC - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 15.330906067630176,
            "unit": "%",
            "extra": "Trace10kSPS/JaegerGRPC - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 57,
            "unit": "MiB",
            "extra": "Trace10kSPS/JaegerGRPC - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 82,
            "unit": "MiB",
            "extra": "Trace10kSPS/JaegerGRPC - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace10kSPS/JaegerGRPC - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 14.466225069715774,
            "unit": "%",
            "extra": "Trace10kSPS/OpenCensus - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 15.997591200032769,
            "unit": "%",
            "extra": "Trace10kSPS/OpenCensus - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 58,
            "unit": "MiB",
            "extra": "Trace10kSPS/OpenCensus - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 82,
            "unit": "MiB",
            "extra": "Trace10kSPS/OpenCensus - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace10kSPS/OpenCensus - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 9.932989762474838,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-gRPC - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 11.995942404470867,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-gRPC - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 59,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-gRPC - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 84,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-gRPC - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace10kSPS/OTLP-gRPC - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 13.59956756639035,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-gRPC-gzip - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 15.328868907566088,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-gRPC-gzip - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 58,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-gRPC-gzip - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 82,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-gRPC-gzip - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace10kSPS/OTLP-gRPC-gzip - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 6.266172763587481,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 7.999156035710526,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 53,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-HTTP - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 75,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-HTTP - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace10kSPS/OTLP-HTTP - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 11.065839832278456,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-HTTP-gzip - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 12.328580336851335,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-HTTP-gzip - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 57,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-HTTP-gzip - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 81,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-HTTP-gzip - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace10kSPS/OTLP-HTTP-gzip - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 7.932714395456123,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-HTTP-zstd - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 10.328297757990361,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-HTTP-zstd - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 93,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-HTTP-zstd - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 139,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-HTTP-zstd - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace10kSPS/OTLP-HTTP-zstd - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 11.665883367927457,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 12.996513849782305,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 57,
            "unit": "MiB",
            "extra": "Trace10kSPS/SAPM - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 82,
            "unit": "MiB",
            "extra": "Trace10kSPS/SAPM - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace10kSPS/SAPM - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 15.199067297076061,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM-gzip - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 16.66355134353427,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM-gzip - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 68,
            "unit": "MiB",
            "extra": "Trace10kSPS/SAPM-gzip - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 96,
            "unit": "MiB",
            "extra": "Trace10kSPS/SAPM-gzip - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace10kSPS/SAPM-gzip - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 11.73222393423811,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM-zstd - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 14.663946201591386,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM-zstd - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 162,
            "unit": "MiB",
            "extra": "Trace10kSPS/SAPM-zstd - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 263,
            "unit": "MiB",
            "extra": "Trace10kSPS/SAPM-zstd - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace10kSPS/SAPM-zstd - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 32.93054966786713,
            "unit": "%",
            "extra": "Trace10kSPS/Zipkin - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 34.330904101446386,
            "unit": "%",
            "extra": "Trace10kSPS/Zipkin - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 61,
            "unit": "MiB",
            "extra": "Trace10kSPS/Zipkin - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 87,
            "unit": "MiB",
            "extra": "Trace10kSPS/Zipkin - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace10kSPS/Zipkin - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 0,
            "unit": "%",
            "extra": "TraceAttributesProcessor/JaegerGRPC - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 0,
            "unit": "%",
            "extra": "TraceAttributesProcessor/JaegerGRPC - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 0,
            "unit": "MiB",
            "extra": "TraceAttributesProcessor/JaegerGRPC - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 0,
            "unit": "MiB",
            "extra": "TraceAttributesProcessor/JaegerGRPC - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "TraceAttributesProcessor/JaegerGRPC - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 0,
            "unit": "%",
            "extra": "TraceAttributesProcessor/OTLP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 0,
            "unit": "%",
            "extra": "TraceAttributesProcessor/OTLP - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 0,
            "unit": "MiB",
            "extra": "TraceAttributesProcessor/OTLP - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 0,
            "unit": "MiB",
            "extra": "TraceAttributesProcessor/OTLP - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "TraceAttributesProcessor/OTLP - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 8.8655687629056,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 10.664217511808687,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 83,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/0*0bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 138,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/0*0bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "TraceBallast1kSPSWithAttrs/0*0bytes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 20.79665280507345,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 21.33151767276459,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 448,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/100*50bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 995,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/100*50bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "TraceBallast1kSPSWithAttrs/100*50bytes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 14.19957170399852,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 16.328007077555277,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 275,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/10*1000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 588,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/10*1000bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "TraceBallast1kSPSWithAttrs/10*1000bytes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 37.329878333637936,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 38.665793876590094,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 617,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/20*5000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 1108,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/20*5000bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "TraceBallast1kSPSWithAttrs/20*5000bytes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 8.933062242884525,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 10.998275774644164,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 88,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSAddAttrs/0*0bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 147,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSAddAttrs/0*0bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "TraceBallast1kSPSAddAttrs/0*0bytes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 19.732488207964877,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 20.666474268680055,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 456,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSAddAttrs/100*50bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 1013,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSAddAttrs/100*50bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "TraceBallast1kSPSAddAttrs/100*50bytes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 15.46486227499299,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 16.992203620142803,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 360,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSAddAttrs/10*1000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 788,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSAddAttrs/10*1000bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "TraceBallast1kSPSAddAttrs/10*1000bytes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 37.265144164421024,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 38.33324111633295,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 612,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSAddAttrs/20*5000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 1110,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSAddAttrs/20*5000bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "TraceBallast1kSPSAddAttrs/20*5000bytes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 33.86397466806122,
            "unit": "%",
            "extra": "TraceNoBackend10kSPS/NoMemoryLimit - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 37.3311607966559,
            "unit": "%",
            "extra": "TraceNoBackend10kSPS/NoMemoryLimit - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 68,
            "unit": "MiB",
            "extra": "TraceNoBackend10kSPS/NoMemoryLimit - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 97,
            "unit": "MiB",
            "extra": "TraceNoBackend10kSPS/NoMemoryLimit - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 140030,
            "unit": "spans",
            "extra": "TraceNoBackend10kSPS/NoMemoryLimit - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 39.064355090748556,
            "unit": "%",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 39.9944939846761,
            "unit": "%",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 57,
            "unit": "MiB",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 81,
            "unit": "MiB",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 133340,
            "unit": "spans",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 11.599413843727058,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 12.997556164829739,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 57,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/0*0bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 82,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/0*0bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace1kSPSWithAttrs/0*0bytes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 25.59777403463513,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 26.669650378252147,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 59,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/100*50bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 83,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/100*50bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace1kSPSWithAttrs/100*50bytes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 19.66583956471942,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 21.328930537285746,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 58,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/10*1000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 82,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/10*1000bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace1kSPSWithAttrs/10*1000bytes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 39.46449283348406,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 40.001442865377975,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 63,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/20*5000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 91,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/20*5000bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace1kSPSWithAttrs/20*5000bytes - Dropped Span Count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alex@boten.ca",
            "name": "Alex Boten",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6946a315417c718181c5dfa84193899d600136c3",
          "message": "Merge branch 'open-telemetry:main' into main",
          "timestamp": "2023-08-29T11:13:58-07:00",
          "tree_id": "9a29a968ba7e90e7a2cea6ed189a533a22deb235",
          "url": "https://github.com/SecuringCarter/opentelemetry-collector-contrib/commit/6946a315417c718181c5dfa84193899d600136c3"
        },
        "date": 1693333785986,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cpu_percentage_avg",
            "value": 9.46634070521518,
            "unit": "%",
            "extra": "Log10kDPS/OTLP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 9.996827729982376,
            "unit": "%",
            "extra": "Log10kDPS/OTLP - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 58,
            "unit": "MiB",
            "extra": "Log10kDPS/OTLP - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 82,
            "unit": "MiB",
            "extra": "Log10kDPS/OTLP - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/OTLP - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 6.999668177463536,
            "unit": "%",
            "extra": "Log10kDPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 8.331576303869763,
            "unit": "%",
            "extra": "Log10kDPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 54,
            "unit": "MiB",
            "extra": "Log10kDPS/OTLP-HTTP - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 78,
            "unit": "MiB",
            "extra": "Log10kDPS/OTLP-HTTP - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/OTLP-HTTP - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 10.599155921379383,
            "unit": "%",
            "extra": "Log10kDPS/filelog - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 11.664747714573139,
            "unit": "%",
            "extra": "Log10kDPS/filelog - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 58,
            "unit": "MiB",
            "extra": "Log10kDPS/filelog - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 85,
            "unit": "MiB",
            "extra": "Log10kDPS/filelog - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/filelog - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 10.798703445751737,
            "unit": "%",
            "extra": "Log10kDPS/filelog_checkpoints - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 11.998816900655173,
            "unit": "%",
            "extra": "Log10kDPS/filelog_checkpoints - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 57,
            "unit": "MiB",
            "extra": "Log10kDPS/filelog_checkpoints - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 84,
            "unit": "MiB",
            "extra": "Log10kDPS/filelog_checkpoints - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/filelog_checkpoints - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 30.198802196722923,
            "unit": "%",
            "extra": "Log10kDPS/kubernetes_containers - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 31.323079462245705,
            "unit": "%",
            "extra": "Log10kDPS/kubernetes_containers - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 60,
            "unit": "MiB",
            "extra": "Log10kDPS/kubernetes_containers - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 87,
            "unit": "MiB",
            "extra": "Log10kDPS/kubernetes_containers - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/kubernetes_containers - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 27.598091378555928,
            "unit": "%",
            "extra": "Log10kDPS/k8s_CRI-Containerd - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 28.992765715434434,
            "unit": "%",
            "extra": "Log10kDPS/k8s_CRI-Containerd - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 58,
            "unit": "MiB",
            "extra": "Log10kDPS/k8s_CRI-Containerd - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 82,
            "unit": "MiB",
            "extra": "Log10kDPS/k8s_CRI-Containerd - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/k8s_CRI-Containerd - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 19.79864600227774,
            "unit": "%",
            "extra": "Log10kDPS/k8s_CRI-Containerd_no_attr_ops - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 20.994900520619343,
            "unit": "%",
            "extra": "Log10kDPS/k8s_CRI-Containerd_no_attr_ops - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 59,
            "unit": "MiB",
            "extra": "Log10kDPS/k8s_CRI-Containerd_no_attr_ops - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 89,
            "unit": "MiB",
            "extra": "Log10kDPS/k8s_CRI-Containerd_no_attr_ops - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/k8s_CRI-Containerd_no_attr_ops - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 11.266070656979627,
            "unit": "%",
            "extra": "Log10kDPS/CRI-Containerd - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 12.330243838666547,
            "unit": "%",
            "extra": "Log10kDPS/CRI-Containerd - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 58,
            "unit": "MiB",
            "extra": "Log10kDPS/CRI-Containerd - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 83,
            "unit": "MiB",
            "extra": "Log10kDPS/CRI-Containerd - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/CRI-Containerd - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 12.13264923714147,
            "unit": "%",
            "extra": "Log10kDPS/syslog-tcp-batch-1 - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 13.332744359351258,
            "unit": "%",
            "extra": "Log10kDPS/syslog-tcp-batch-1 - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 57,
            "unit": "MiB",
            "extra": "Log10kDPS/syslog-tcp-batch-1 - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 80,
            "unit": "MiB",
            "extra": "Log10kDPS/syslog-tcp-batch-1 - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/syslog-tcp-batch-1 - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 4.199752766434293,
            "unit": "%",
            "extra": "Log10kDPS/syslog-tcp-batch-100 - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 5.998013727763982,
            "unit": "%",
            "extra": "Log10kDPS/syslog-tcp-batch-100 - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 57,
            "unit": "MiB",
            "extra": "Log10kDPS/syslog-tcp-batch-100 - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 80,
            "unit": "MiB",
            "extra": "Log10kDPS/syslog-tcp-batch-100 - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/syslog-tcp-batch-100 - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 17.264101455982086,
            "unit": "%",
            "extra": "Log10kDPS/FluentForward-SplunkHEC - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 17.998042322939796,
            "unit": "%",
            "extra": "Log10kDPS/FluentForward-SplunkHEC - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 56,
            "unit": "MiB",
            "extra": "Log10kDPS/FluentForward-SplunkHEC - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 80,
            "unit": "MiB",
            "extra": "Log10kDPS/FluentForward-SplunkHEC - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/FluentForward-SplunkHEC - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 11.9989039681163,
            "unit": "%",
            "extra": "Log10kDPS/tcp-batch-1 - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 13.330372057832546,
            "unit": "%",
            "extra": "Log10kDPS/tcp-batch-1 - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 58,
            "unit": "MiB",
            "extra": "Log10kDPS/tcp-batch-1 - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 83,
            "unit": "MiB",
            "extra": "Log10kDPS/tcp-batch-1 - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/tcp-batch-1 - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 4.332953247252211,
            "unit": "%",
            "extra": "Log10kDPS/tcp-batch-100 - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 5.998961129906328,
            "unit": "%",
            "extra": "Log10kDPS/tcp-batch-100 - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 56,
            "unit": "MiB",
            "extra": "Log10kDPS/tcp-batch-100 - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 80,
            "unit": "MiB",
            "extra": "Log10kDPS/tcp-batch-100 - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/tcp-batch-100 - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 0.399923716950534,
            "unit": "%",
            "extra": "IdleMode - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 1.998319470610375,
            "unit": "%",
            "extra": "IdleMode - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 44,
            "unit": "MiB",
            "extra": "IdleMode - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 62,
            "unit": "MiB",
            "extra": "IdleMode - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "IdleMode - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 27.53213465944476,
            "unit": "%",
            "extra": "Metric10kDPS/OpenCensus - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 28.999174219514927,
            "unit": "%",
            "extra": "Metric10kDPS/OpenCensus - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 57,
            "unit": "MiB",
            "extra": "Metric10kDPS/OpenCensus - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 80,
            "unit": "MiB",
            "extra": "Metric10kDPS/OpenCensus - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Metric10kDPS/OpenCensus - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 15.932648873110805,
            "unit": "%",
            "extra": "Metric10kDPS/OTLP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 17.32735403888052,
            "unit": "%",
            "extra": "Metric10kDPS/OTLP - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 59,
            "unit": "MiB",
            "extra": "Metric10kDPS/OTLP - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 83,
            "unit": "MiB",
            "extra": "Metric10kDPS/OTLP - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Metric10kDPS/OTLP - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 13.799548269027506,
            "unit": "%",
            "extra": "Metric10kDPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 15.331595619622615,
            "unit": "%",
            "extra": "Metric10kDPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 54,
            "unit": "MiB",
            "extra": "Metric10kDPS/OTLP-HTTP - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 77,
            "unit": "MiB",
            "extra": "Metric10kDPS/OTLP-HTTP - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Metric10kDPS/OTLP-HTTP - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 39.729700870620555,
            "unit": "%",
            "extra": "Metric10kDPS/SignalFx - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 41.33510530040573,
            "unit": "%",
            "extra": "Metric10kDPS/SignalFx - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 56,
            "unit": "MiB",
            "extra": "Metric10kDPS/SignalFx - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 79,
            "unit": "MiB",
            "extra": "Metric10kDPS/SignalFx - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Metric10kDPS/SignalFx - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 23.397677122290965,
            "unit": "%",
            "extra": "MetricsFromFile - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 24.33096874435656,
            "unit": "%",
            "extra": "MetricsFromFile - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 57,
            "unit": "MiB",
            "extra": "MetricsFromFile - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 80,
            "unit": "MiB",
            "extra": "MetricsFromFile - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "MetricsFromFile - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 0,
            "unit": "%",
            "extra": "MetricResourceProcessor/update_and_rename_existing_attributes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 0,
            "unit": "%",
            "extra": "MetricResourceProcessor/update_and_rename_existing_attributes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 0,
            "unit": "MiB",
            "extra": "MetricResourceProcessor/update_and_rename_existing_attributes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 0,
            "unit": "MiB",
            "extra": "MetricResourceProcessor/update_and_rename_existing_attributes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "MetricResourceProcessor/update_and_rename_existing_attributes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 0,
            "unit": "%",
            "extra": "MetricResourceProcessor/set_attribute_on_empty_resource - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 0,
            "unit": "%",
            "extra": "MetricResourceProcessor/set_attribute_on_empty_resource - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 0,
            "unit": "MiB",
            "extra": "MetricResourceProcessor/set_attribute_on_empty_resource - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 0,
            "unit": "MiB",
            "extra": "MetricResourceProcessor/set_attribute_on_empty_resource - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "MetricResourceProcessor/set_attribute_on_empty_resource - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 10.132406171559568,
            "unit": "%",
            "extra": "Trace10kSPS/JaegerGRPC - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 11.66353298638077,
            "unit": "%",
            "extra": "Trace10kSPS/JaegerGRPC - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 56,
            "unit": "MiB",
            "extra": "Trace10kSPS/JaegerGRPC - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 82,
            "unit": "MiB",
            "extra": "Trace10kSPS/JaegerGRPC - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace10kSPS/JaegerGRPC - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 10.532426274463122,
            "unit": "%",
            "extra": "Trace10kSPS/OpenCensus - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 11.98664523104667,
            "unit": "%",
            "extra": "Trace10kSPS/OpenCensus - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 59,
            "unit": "MiB",
            "extra": "Trace10kSPS/OpenCensus - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 85,
            "unit": "MiB",
            "extra": "Trace10kSPS/OpenCensus - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace10kSPS/OpenCensus - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 6.0664011144065775,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-gRPC - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 7.6664013069627615,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-gRPC - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 58,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-gRPC - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 82,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-gRPC - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace10kSPS/OTLP-gRPC - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 9.066031309522062,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-gRPC-gzip - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 9.999303431857431,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-gRPC-gzip - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 58,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-gRPC-gzip - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 83,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-gRPC-gzip - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace10kSPS/OTLP-gRPC-gzip - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 4.533029940057061,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 5.665987488523742,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 53,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-HTTP - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 75,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-HTTP - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace10kSPS/OTLP-HTTP - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 8.066055751132396,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-HTTP-gzip - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 9.331926570288001,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-HTTP-gzip - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 57,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-HTTP-gzip - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 81,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-HTTP-gzip - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace10kSPS/OTLP-HTTP-gzip - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 5.39956640653822,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-HTTP-zstd - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 6.9992155465861146,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-HTTP-zstd - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 97,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-HTTP-zstd - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 158,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-HTTP-zstd - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace10kSPS/OTLP-HTTP-zstd - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 7.599375362755932,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 8.665837247829227,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 55,
            "unit": "MiB",
            "extra": "Trace10kSPS/SAPM - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 79,
            "unit": "MiB",
            "extra": "Trace10kSPS/SAPM - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace10kSPS/SAPM - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 10.466291992252668,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM-gzip - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 11.996421507452398,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM-gzip - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 65,
            "unit": "MiB",
            "extra": "Trace10kSPS/SAPM-gzip - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 94,
            "unit": "MiB",
            "extra": "Trace10kSPS/SAPM-gzip - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace10kSPS/SAPM-gzip - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 7.53311494632221,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM-zstd - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 9.330502542836362,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM-zstd - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 160,
            "unit": "MiB",
            "extra": "Trace10kSPS/SAPM-zstd - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 257,
            "unit": "MiB",
            "extra": "Trace10kSPS/SAPM-zstd - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace10kSPS/SAPM-zstd - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 24.999373932345488,
            "unit": "%",
            "extra": "Trace10kSPS/Zipkin - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 25.67512103898936,
            "unit": "%",
            "extra": "Trace10kSPS/Zipkin - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 59,
            "unit": "MiB",
            "extra": "Trace10kSPS/Zipkin - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 87,
            "unit": "MiB",
            "extra": "Trace10kSPS/Zipkin - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace10kSPS/Zipkin - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 0,
            "unit": "%",
            "extra": "TraceAttributesProcessor/JaegerGRPC - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 0,
            "unit": "%",
            "extra": "TraceAttributesProcessor/JaegerGRPC - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 0,
            "unit": "MiB",
            "extra": "TraceAttributesProcessor/JaegerGRPC - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 0,
            "unit": "MiB",
            "extra": "TraceAttributesProcessor/JaegerGRPC - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "TraceAttributesProcessor/JaegerGRPC - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 0,
            "unit": "%",
            "extra": "TraceAttributesProcessor/OTLP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 0,
            "unit": "%",
            "extra": "TraceAttributesProcessor/OTLP - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 0,
            "unit": "MiB",
            "extra": "TraceAttributesProcessor/OTLP - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 0,
            "unit": "MiB",
            "extra": "TraceAttributesProcessor/OTLP - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "TraceAttributesProcessor/OTLP - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 10.33190635448547,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 12.66408145062886,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 81,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/0*0bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 136,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/0*0bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "TraceBallast1kSPSWithAttrs/0*0bytes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 25.530691185931147,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 26.666244264468766,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 457,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/100*50bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 1015,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/100*50bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "TraceBallast1kSPSWithAttrs/100*50bytes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 17.332675662288004,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 18.664985554969366,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 302,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/10*1000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 651,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/10*1000bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "TraceBallast1kSPSWithAttrs/10*1000bytes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 33.39826553455564,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 34.32929059019936,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 538,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/20*5000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 1105,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/20*5000bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "TraceBallast1kSPSWithAttrs/20*5000bytes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 10.932274132987683,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 13.332102606945378,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 85,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSAddAttrs/0*0bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 144,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSAddAttrs/0*0bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "TraceBallast1kSPSAddAttrs/0*0bytes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 24.265096658294315,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 25.998062867003735,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 447,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSAddAttrs/100*50bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 990,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSAddAttrs/100*50bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "TraceBallast1kSPSAddAttrs/100*50bytes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 17.665318873497895,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 18.994804800586607,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 318,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSAddAttrs/10*1000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 690,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSAddAttrs/10*1000bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "TraceBallast1kSPSAddAttrs/10*1000bytes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 33.99741152547973,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 34.99638259891266,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 539,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSAddAttrs/20*5000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 1109,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSAddAttrs/20*5000bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "TraceBallast1kSPSAddAttrs/20*5000bytes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 29.263808525113795,
            "unit": "%",
            "extra": "TraceNoBackend10kSPS/NoMemoryLimit - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 32.33180014859302,
            "unit": "%",
            "extra": "TraceNoBackend10kSPS/NoMemoryLimit - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 70,
            "unit": "MiB",
            "extra": "TraceNoBackend10kSPS/NoMemoryLimit - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 98,
            "unit": "MiB",
            "extra": "TraceNoBackend10kSPS/NoMemoryLimit - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 140730,
            "unit": "spans",
            "extra": "TraceNoBackend10kSPS/NoMemoryLimit - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 34.66529642145175,
            "unit": "%",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 36.3293571094173,
            "unit": "%",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 56,
            "unit": "MiB",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 80,
            "unit": "MiB",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 136980,
            "unit": "spans",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 7.799508142217864,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 9.330424010712413,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 56,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/0*0bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 80,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/0*0bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace1kSPSWithAttrs/0*0bytes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 19.598881328518573,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 20.997726688119354,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 58,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/100*50bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 82,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/100*50bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace1kSPSWithAttrs/100*50bytes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 14.8653041069461,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 16.32768930831475,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 58,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/10*1000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 82,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/10*1000bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace1kSPSWithAttrs/10*1000bytes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 40.66331681449482,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 41.294431844989695,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 63,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/20*5000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 90,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/20*5000bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace1kSPSWithAttrs/20*5000bytes - Dropped Span Count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "Alex Boten",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "af9550b114e4104cda1b1319c7db2b074a2b4c2e",
          "message": "Update load-tests.yml",
          "timestamp": "2023-08-29T11:32:09-07:00",
          "tree_id": "e7332c24000292e000e71a3e3ff190f3c9f5271d",
          "url": "https://github.com/SecuringCarter/opentelemetry-collector-contrib/commit/af9550b114e4104cda1b1319c7db2b074a2b4c2e"
        },
        "date": 1693335776748,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cpu_percentage_avg",
            "value": 13.065895301503168,
            "unit": "%",
            "extra": "Log10kDPS/OTLP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 15.331228922857694,
            "unit": "%",
            "extra": "Log10kDPS/OTLP - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 60,
            "unit": "MiB",
            "extra": "Log10kDPS/OTLP - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 85,
            "unit": "MiB",
            "extra": "Log10kDPS/OTLP - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/OTLP - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 11.132239765923572,
            "unit": "%",
            "extra": "Log10kDPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 12.998805873364313,
            "unit": "%",
            "extra": "Log10kDPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 52,
            "unit": "MiB",
            "extra": "Log10kDPS/OTLP-HTTP - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 74,
            "unit": "MiB",
            "extra": "Log10kDPS/OTLP-HTTP - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/OTLP-HTTP - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 23.331967521952137,
            "unit": "%",
            "extra": "Log10kDPS/filelog - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 24.335096557089475,
            "unit": "%",
            "extra": "Log10kDPS/filelog - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 55,
            "unit": "MiB",
            "extra": "Log10kDPS/filelog - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 78,
            "unit": "MiB",
            "extra": "Log10kDPS/filelog - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/filelog - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 23.732215519085873,
            "unit": "%",
            "extra": "Log10kDPS/filelog_checkpoints - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 24.670931497700106,
            "unit": "%",
            "extra": "Log10kDPS/filelog_checkpoints - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 55,
            "unit": "MiB",
            "extra": "Log10kDPS/filelog_checkpoints - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 79,
            "unit": "MiB",
            "extra": "Log10kDPS/filelog_checkpoints - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/filelog_checkpoints - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 58.930250295143374,
            "unit": "%",
            "extra": "Log10kDPS/kubernetes_containers - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 60.99899939274694,
            "unit": "%",
            "extra": "Log10kDPS/kubernetes_containers - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 58,
            "unit": "MiB",
            "extra": "Log10kDPS/kubernetes_containers - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 84,
            "unit": "MiB",
            "extra": "Log10kDPS/kubernetes_containers - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/kubernetes_containers - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 54.86382635174609,
            "unit": "%",
            "extra": "Log10kDPS/k8s_CRI-Containerd - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 56.357692292667906,
            "unit": "%",
            "extra": "Log10kDPS/k8s_CRI-Containerd - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 58,
            "unit": "MiB",
            "extra": "Log10kDPS/k8s_CRI-Containerd - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 84,
            "unit": "MiB",
            "extra": "Log10kDPS/k8s_CRI-Containerd - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/k8s_CRI-Containerd - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 42.19660306936796,
            "unit": "%",
            "extra": "Log10kDPS/k8s_CRI-Containerd_no_attr_ops - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 43.99633871268502,
            "unit": "%",
            "extra": "Log10kDPS/k8s_CRI-Containerd_no_attr_ops - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 57,
            "unit": "MiB",
            "extra": "Log10kDPS/k8s_CRI-Containerd_no_attr_ops - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 80,
            "unit": "MiB",
            "extra": "Log10kDPS/k8s_CRI-Containerd_no_attr_ops - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/k8s_CRI-Containerd_no_attr_ops - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 24.864468823331595,
            "unit": "%",
            "extra": "Log10kDPS/CRI-Containerd - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 26.662128479116117,
            "unit": "%",
            "extra": "Log10kDPS/CRI-Containerd - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 56,
            "unit": "MiB",
            "extra": "Log10kDPS/CRI-Containerd - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 81,
            "unit": "MiB",
            "extra": "Log10kDPS/CRI-Containerd - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/CRI-Containerd - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 16.33180728926023,
            "unit": "%",
            "extra": "Log10kDPS/syslog-tcp-batch-1 - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 17.662479446214324,
            "unit": "%",
            "extra": "Log10kDPS/syslog-tcp-batch-1 - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 55,
            "unit": "MiB",
            "extra": "Log10kDPS/syslog-tcp-batch-1 - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 78,
            "unit": "MiB",
            "extra": "Log10kDPS/syslog-tcp-batch-1 - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/syslog-tcp-batch-1 - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 8.199576592450471,
            "unit": "%",
            "extra": "Log10kDPS/syslog-tcp-batch-100 - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 9.9993518386807,
            "unit": "%",
            "extra": "Log10kDPS/syslog-tcp-batch-100 - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 55,
            "unit": "MiB",
            "extra": "Log10kDPS/syslog-tcp-batch-100 - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 78,
            "unit": "MiB",
            "extra": "Log10kDPS/syslog-tcp-batch-100 - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/syslog-tcp-batch-100 - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 28.531032345518113,
            "unit": "%",
            "extra": "Log10kDPS/FluentForward-SplunkHEC - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 30.323113978968006,
            "unit": "%",
            "extra": "Log10kDPS/FluentForward-SplunkHEC - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 55,
            "unit": "MiB",
            "extra": "Log10kDPS/FluentForward-SplunkHEC - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 79,
            "unit": "MiB",
            "extra": "Log10kDPS/FluentForward-SplunkHEC - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/FluentForward-SplunkHEC - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 15.998553607031777,
            "unit": "%",
            "extra": "Log10kDPS/tcp-batch-1 - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 17.999303942917454,
            "unit": "%",
            "extra": "Log10kDPS/tcp-batch-1 - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 54,
            "unit": "MiB",
            "extra": "Log10kDPS/tcp-batch-1 - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 77,
            "unit": "MiB",
            "extra": "Log10kDPS/tcp-batch-1 - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/tcp-batch-1 - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 8.199151538680136,
            "unit": "%",
            "extra": "Log10kDPS/tcp-batch-100 - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 9.996189362649254,
            "unit": "%",
            "extra": "Log10kDPS/tcp-batch-100 - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 53,
            "unit": "MiB",
            "extra": "Log10kDPS/tcp-batch-100 - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 76,
            "unit": "MiB",
            "extra": "Log10kDPS/tcp-batch-100 - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/tcp-batch-100 - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 0.46609827166326934,
            "unit": "%",
            "extra": "IdleMode - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 2.332468434600546,
            "unit": "%",
            "extra": "IdleMode - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 54,
            "unit": "MiB",
            "extra": "IdleMode - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 63,
            "unit": "MiB",
            "extra": "IdleMode - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "IdleMode - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 42.93929478955037,
            "unit": "%",
            "extra": "Metric10kDPS/OpenCensus - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 44.00423021465898,
            "unit": "%",
            "extra": "Metric10kDPS/OpenCensus - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 66,
            "unit": "MiB",
            "extra": "Metric10kDPS/OpenCensus - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 78,
            "unit": "MiB",
            "extra": "Metric10kDPS/OpenCensus - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Metric10kDPS/OpenCensus - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 27.39882457215997,
            "unit": "%",
            "extra": "Metric10kDPS/OTLP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 28.997984263119918,
            "unit": "%",
            "extra": "Metric10kDPS/OTLP - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 59,
            "unit": "MiB",
            "extra": "Metric10kDPS/OTLP - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 85,
            "unit": "MiB",
            "extra": "Metric10kDPS/OTLP - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Metric10kDPS/OTLP - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 26.531464849615006,
            "unit": "%",
            "extra": "Metric10kDPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 27.66514550786263,
            "unit": "%",
            "extra": "Metric10kDPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 52,
            "unit": "MiB",
            "extra": "Metric10kDPS/OTLP-HTTP - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 74,
            "unit": "MiB",
            "extra": "Metric10kDPS/OTLP-HTTP - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Metric10kDPS/OTLP-HTTP - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 68.59350226557159,
            "unit": "%",
            "extra": "Metric10kDPS/SignalFx - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 69.98735389170884,
            "unit": "%",
            "extra": "Metric10kDPS/SignalFx - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 59,
            "unit": "MiB",
            "extra": "Metric10kDPS/SignalFx - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 84,
            "unit": "MiB",
            "extra": "Metric10kDPS/SignalFx - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Metric10kDPS/SignalFx - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 37.26507399715344,
            "unit": "%",
            "extra": "MetricsFromFile - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 39.33117886312797,
            "unit": "%",
            "extra": "MetricsFromFile - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 60,
            "unit": "MiB",
            "extra": "MetricsFromFile - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 85,
            "unit": "MiB",
            "extra": "MetricsFromFile - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "MetricsFromFile - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 0,
            "unit": "%",
            "extra": "MetricResourceProcessor/update_and_rename_existing_attributes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 0,
            "unit": "%",
            "extra": "MetricResourceProcessor/update_and_rename_existing_attributes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 0,
            "unit": "MiB",
            "extra": "MetricResourceProcessor/update_and_rename_existing_attributes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 0,
            "unit": "MiB",
            "extra": "MetricResourceProcessor/update_and_rename_existing_attributes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "MetricResourceProcessor/update_and_rename_existing_attributes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 0,
            "unit": "%",
            "extra": "MetricResourceProcessor/set_attribute_on_empty_resource - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 0,
            "unit": "%",
            "extra": "MetricResourceProcessor/set_attribute_on_empty_resource - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 0,
            "unit": "MiB",
            "extra": "MetricResourceProcessor/set_attribute_on_empty_resource - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 0,
            "unit": "MiB",
            "extra": "MetricResourceProcessor/set_attribute_on_empty_resource - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "MetricResourceProcessor/set_attribute_on_empty_resource - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 18.702923524301738,
            "unit": "%",
            "extra": "Trace10kSPS/JaegerGRPC - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 19.004824621792967,
            "unit": "%",
            "extra": "Trace10kSPS/JaegerGRPC - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 65,
            "unit": "MiB",
            "extra": "Trace10kSPS/JaegerGRPC - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 79,
            "unit": "MiB",
            "extra": "Trace10kSPS/JaegerGRPC - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace10kSPS/JaegerGRPC - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 18.93235312463403,
            "unit": "%",
            "extra": "Trace10kSPS/OpenCensus - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 20.662504742311455,
            "unit": "%",
            "extra": "Trace10kSPS/OpenCensus - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 56,
            "unit": "MiB",
            "extra": "Trace10kSPS/OpenCensus - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 79,
            "unit": "MiB",
            "extra": "Trace10kSPS/OpenCensus - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace10kSPS/OpenCensus - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 11.999463144818865,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-gRPC - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 14.999455399773343,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-gRPC - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 59,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-gRPC - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 85,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-gRPC - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace10kSPS/OTLP-gRPC - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 17.06530808270027,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-gRPC-gzip - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 18.661625620399455,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-gRPC-gzip - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 58,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-gRPC-gzip - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 84,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-gRPC-gzip - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace10kSPS/OTLP-gRPC-gzip - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 9.932555261319575,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 10.999119619466537,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 52,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-HTTP - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 74,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-HTTP - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace10kSPS/OTLP-HTTP - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 15.73238868520121,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-HTTP-gzip - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 17.661046009339117,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-HTTP-gzip - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 54,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-HTTP-gzip - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 77,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-HTTP-gzip - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace10kSPS/OTLP-HTTP-gzip - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 10.465603126959458,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-HTTP-zstd - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 13.663168904535883,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-HTTP-zstd - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 122,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-HTTP-zstd - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 208,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-HTTP-zstd - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace10kSPS/OTLP-HTTP-zstd - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 15.065942117387149,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 15.996129827033087,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 58,
            "unit": "MiB",
            "extra": "Trace10kSPS/SAPM - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 85,
            "unit": "MiB",
            "extra": "Trace10kSPS/SAPM - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace10kSPS/SAPM - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 19.331883322226492,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM-gzip - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 21.991944533983407,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM-gzip - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 68,
            "unit": "MiB",
            "extra": "Trace10kSPS/SAPM-gzip - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 98,
            "unit": "MiB",
            "extra": "Trace10kSPS/SAPM-gzip - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace10kSPS/SAPM-gzip - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 12.5991624605961,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM-zstd - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 17.331286670136265,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM-zstd - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 163,
            "unit": "MiB",
            "extra": "Trace10kSPS/SAPM-zstd - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 265,
            "unit": "MiB",
            "extra": "Trace10kSPS/SAPM-zstd - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace10kSPS/SAPM-zstd - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 44.79478591976845,
            "unit": "%",
            "extra": "Trace10kSPS/Zipkin - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 45.6567481186108,
            "unit": "%",
            "extra": "Trace10kSPS/Zipkin - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 58,
            "unit": "MiB",
            "extra": "Trace10kSPS/Zipkin - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 84,
            "unit": "MiB",
            "extra": "Trace10kSPS/Zipkin - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace10kSPS/Zipkin - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 0,
            "unit": "%",
            "extra": "TraceAttributesProcessor/JaegerGRPC - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 0,
            "unit": "%",
            "extra": "TraceAttributesProcessor/JaegerGRPC - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 0,
            "unit": "MiB",
            "extra": "TraceAttributesProcessor/JaegerGRPC - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 0,
            "unit": "MiB",
            "extra": "TraceAttributesProcessor/JaegerGRPC - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "TraceAttributesProcessor/JaegerGRPC - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 0,
            "unit": "%",
            "extra": "TraceAttributesProcessor/OTLP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 0,
            "unit": "%",
            "extra": "TraceAttributesProcessor/OTLP - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 0,
            "unit": "MiB",
            "extra": "TraceAttributesProcessor/OTLP - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 0,
            "unit": "MiB",
            "extra": "TraceAttributesProcessor/OTLP - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "TraceAttributesProcessor/OTLP - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 9.720072143651043,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 10.66609993055759,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 91,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/0*0bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 133,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/0*0bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "TraceBallast1kSPSWithAttrs/0*0bytes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 24.464421517775136,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 26.332114788389386,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 470,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/100*50bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 1048,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/100*50bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "TraceBallast1kSPSWithAttrs/100*50bytes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 18.932383577689567,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 20.66323023372393,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 350,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/10*1000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 767,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/10*1000bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "TraceBallast1kSPSWithAttrs/10*1000bytes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 34.26373914309904,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 35.3334817339566,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 560,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/20*5000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 1104,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/20*5000bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "TraceBallast1kSPSWithAttrs/20*5000bytes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 10.666300466972514,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 12.331593571559603,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 84,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSAddAttrs/0*0bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 142,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSAddAttrs/0*0bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "TraceBallast1kSPSAddAttrs/0*0bytes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 24.931163063954074,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 26.6564163504908,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 466,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSAddAttrs/100*50bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 1042,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSAddAttrs/100*50bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "TraceBallast1kSPSAddAttrs/100*50bytes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 18.998699012155363,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 20.995757303338685,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 319,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSAddAttrs/10*1000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 694,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSAddAttrs/10*1000bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "TraceBallast1kSPSAddAttrs/10*1000bytes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 34.26463799450956,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 35.327084878746795,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 555,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSAddAttrs/20*5000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 1103,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSAddAttrs/20*5000bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "TraceBallast1kSPSAddAttrs/20*5000bytes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 32.89016941518539,
            "unit": "%",
            "extra": "TraceNoBackend10kSPS/NoMemoryLimit - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 33.66505992313003,
            "unit": "%",
            "extra": "TraceNoBackend10kSPS/NoMemoryLimit - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 77,
            "unit": "MiB",
            "extra": "TraceNoBackend10kSPS/NoMemoryLimit - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 96,
            "unit": "MiB",
            "extra": "TraceNoBackend10kSPS/NoMemoryLimit - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 141330,
            "unit": "spans",
            "extra": "TraceNoBackend10kSPS/NoMemoryLimit - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 44.52875689034393,
            "unit": "%",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 47.982581203429596,
            "unit": "%",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 55,
            "unit": "MiB",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 78,
            "unit": "MiB",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 141700,
            "unit": "spans",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 10.599072371305878,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 12.998258454337513,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 57,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/0*0bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 84,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/0*0bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace1kSPSWithAttrs/0*0bytes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 30.998066243500453,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 32.99786698488023,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 60,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/100*50bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 85,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/100*50bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace1kSPSWithAttrs/100*50bytes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 23.06549963080805,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 24.99947976082618,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 58,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/10*1000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 84,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/10*1000bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace1kSPSWithAttrs/10*1000bytes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 40.131282836138496,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 41.319804926188596,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 65,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/20*5000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 94,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/20*5000bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace1kSPSWithAttrs/20*5000bytes - Dropped Span Count"
          }
        ]
      }
    ]
  }
}